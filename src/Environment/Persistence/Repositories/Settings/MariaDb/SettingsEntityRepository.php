<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\Settings\MariaDb;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\EntityPropertyMapperBuilder;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\Settings\SettingsEntityRepositoryInterface;
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
 * Represents a MariaDB repository of the settings entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingsEntityRepository extends AbstractRepository implements SettingsEntityRepositoryInterface
{
	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The settings of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByRecordId( SettingsEntityInterface $settingsWithRecordId ): ?SettingsEntityInterface
	{
		$query = <<< END
			SELECT
				`settings.settings`.`_id`,
				`settings.settings`.`id`,
				`settings.settings`.`userId`,
				`settings.settings`.`chunksize`
			FROM
				`settings.settings`
			WHERE
				`settings.settings`.`_id` = :_id
			LIMIT
				0, 1;
		END;

		$settingsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingsSettingsEntityPropertyMapper();

		$mappedSettingsWithRecordId = $settingsEntityPropertyMapper->mapToArray( $settingsWithRecordId );

		$arguments = [
			'_id' => $mappedSettingsWithRecordId[ '_id' ]
		];

		return $this->persistenceConnector->queryFirst( $query, $arguments, $settingsEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The settings entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the settings entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The settings of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?SettingsEntityInterface
	{
		$query = <<< END
			SELECT
				`settings.settings`.`_id`,
				`settings.settings`.`id`,
				`settings.settings`.`userId`,
				`settings.settings`.`chunksize`
			FROM
				`settings.settings`
			WHERE
				`settings.settings`.`userId` = :userId
			LIMIT
				0, 1;
		END;

		$userEntityPropertyMapper     = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();
		$settingsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingsSettingsEntityPropertyMapper();

		$mappedUserWithUserId = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId' => $mappedUserWithUserId[ 'id' ]
		];

		return $this->persistenceConnector->queryFirst( $query, $arguments, $settingsEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the settings entity.
	 * @throws EntityDoesNotMatchClassNameException The settings entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the settings entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function createByUserId( SettingsEntityInterface $settings, UserEntityInterface $userWithUserId ): SettingsEntityInterface
	{
		$query = <<< END
			INSERT INTO
				`settings.settings`
				( `id`, `userId`, `chunksize` )
			VALUES
				( UUID(), :userId, :chunksize );
		END;

		$settingsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingsSettingsEntityPropertyMapper();
		$userEntityPropertyMapper     = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();

		$mappedSettings       = $settingsEntityPropertyMapper->mapToArray( $settings );
		$mappedUserWithUserId = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId'    => $mappedUserWithUserId[ 'id' ],
			'chunksize' => $mappedSettings[ 'chunksize' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		return $settingsEntityPropertyMapper->mapFromArray(
			[
				'_id' => $this->persistenceConnector->getLastInsertId()
			]
		);
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the settings entity.
	 * @throws EntityDoesNotMatchClassNameException The settings entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the settings entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function updateByRecordId( SettingsEntityInterface $settings, SettingsEntityInterface $settingsWithRecordId ): SettingsEntityInterface
	{
		$query = <<< END
			UPDATE
				`settings.settings`
			SET
				`settings.settings`.`chunksize` = :chunksize
			WHERE
				`settings.settings`.`_id` = :_id;
		END;

		$settingsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingsSettingsEntityPropertyMapper();

		$mappedSetting             = $settingsEntityPropertyMapper->mapToArray( $settings );
		$mappedSettingWithRecordId = $settingsEntityPropertyMapper->mapToArray( $settingsWithRecordId );

		$arguments = [
			'_id'       => $mappedSettingWithRecordId[ '_id' ],
			'chunksize' => $mappedSetting[ 'chunksize' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		$persistedSettingWithRecordId = new SettingsEntity();
		$persistedSettingWithRecordId->set_Id(
			$settingsWithRecordId->get_Id()
		);

		return $persistedSettingWithRecordId;
	}
}
