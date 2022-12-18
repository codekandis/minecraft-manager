<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\EntityPropertyMapperBuilder;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SettingEntityRepositoryInterface;
use CodeKandis\Persistence\FetchingResultFailedException;
use CodeKandis\Persistence\Repositories\AbstractRepository;
use CodeKandis\Persistence\SettingFetchModeFailedException;
use CodeKandis\Persistence\StatementExecutionFailedException;
use CodeKandis\Persistence\StatementPreparationFailedException;
use CodeKandis\Persistence\TransactionCommitFailedException;
use CodeKandis\Persistence\TransactionRollbackFailedException;
use CodeKandis\Persistence\TransactionStartFailedException;
use ReflectionException;

/**
 * Represents a MariaDB repository of the setting entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingEntityRepository extends AbstractRepository implements SettingEntityRepositoryInterface
{
	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByRecordId( SettingEntityInterface $settingWithRecordId ): ?SettingEntityInterface
	{
		$query = <<< END
			SELECT
				`settings`.`_id`,
				`settings`.`id`,
				`settings`.`userId`,
				`settings`.`chunksize`
			FROM
				`settings`
			WHERE
				`settings`.`_id` = :_id
			LIMIT
				0, 1;
		END;

		$settingEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingEntityPropertyMapper();

		$mappedSettingWithRecordId = $settingEntityPropertyMapper->mapToArray( $settingWithRecordId );

		$arguments = [
			'_id' => $mappedSettingWithRecordId[ '_id' ]
		];

		return $this->persistenceConnector->queryFirst( $query, $arguments, $settingEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The setting entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the setting entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?SettingEntityInterface
	{
		$query = <<< END
			SELECT
				`settings`.`_id`,
				`settings`.`id`,
				`settings`.`userId`,
				`settings`.`chunksize`
			FROM
				`settings`
			WHERE
				`settings`.`userId` = :userId
			LIMIT
				0, 1;
		END;

		$userEntityPropertyMapper    = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();
		$settingEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingEntityPropertyMapper();

		$mappedUserWithUserId = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId' => $mappedUserWithUserId[ 'id' ]
		];

		return $this->persistenceConnector->queryFirst( $query, $arguments, $settingEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the setting entity.
	 * @throws EntityDoesNotMatchClassNameException The setting entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the setting entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function createByUserId( SettingEntityInterface $setting, UserEntityInterface $userWithUserId ): SettingEntityInterface
	{
		$query = <<< END
			INSERT INTO
				`settings`
				( `id`, `userId`, `chunksize` )
			VALUES
				( UUID(), :userId, :chunksize );
		END;

		$settingEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingEntityPropertyMapper();
		$userEntityPropertyMapper    = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();

		$mappedSetting        = $settingEntityPropertyMapper->mapToArray( $setting );
		$mappedUserWithUserId = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId'    => $mappedUserWithUserId[ 'id' ],
			'chunksize' => $mappedSetting[ 'chunksize' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		return $settingEntityPropertyMapper->mapFromArray(
			[
				'_id' => $this->persistenceConnector->getLastInsertId()
			]
		);
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the setting entity.
	 * @throws EntityDoesNotMatchClassNameException The setting entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the setting entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function updateByRecordId( SettingEntityInterface $setting, SettingEntityInterface $settingWithRecordId ): SettingEntityInterface
	{
		$query = <<< END
			UPDATE
				`settings`
			SET
				`settings`.`chunksize` = :chunksize
			WHERE
				`settings`.`_id` = :_id;
		END;

		$settingEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingEntityPropertyMapper();

		$mappedSetting             = $settingEntityPropertyMapper->mapToArray( $setting );
		$mappedSettingWithRecordId = $settingEntityPropertyMapper->mapToArray( $settingWithRecordId );

		$arguments = [
			'_id'       => $mappedSettingWithRecordId[ '_id' ],
			'chunksize' => $mappedSetting[ 'chunksize' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		$persistedSettingWithRecordId = new SettingEntity();
		$persistedSettingWithRecordId->set_Id(
			$settingWithRecordId->get_Id()
		);

		return $persistedSettingWithRecordId;
	}
}
