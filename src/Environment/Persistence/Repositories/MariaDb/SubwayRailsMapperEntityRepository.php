<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\EntityPropertyMapperBuilder;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapperEntityRepositoryInterface;
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
 * Represents a MariaDB repository of the subway rails mapper entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SubwayRailsMapperEntityRepository extends AbstractRepository implements SubwayRailsMapperEntityRepositoryInterface
{
	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByRecordId( SubwayRailsMapperEntityInterface $subwayRailsMapperWithRecordId ): ?SubwayRailsMapperEntityInterface
	{
		$query = <<< END
			SELECT
				`subwayRailsMappers`.`_id`,
				`subwayRailsMappers`.`id`,
				`subwayRailsMappers`.`userId`,
				`subwayRailsMappers`.`startPositionX`,
				`subwayRailsMappers`.`startPositionY`,
				`subwayRailsMappers`.`startPositionZ`
			FROM
				`subwayRailsMappers`
			WHERE
				`subwayRailsMappers`.`_id` = :_id
			LIMIT
				0, 1;
		END;

		$subwayRailsMapperEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperEntityPropertyMapper();

		$mappedSubwayRailsMapperWithRecordId = $subwayRailsMapperEntityPropertyMapper->mapToArray( $subwayRailsMapperWithRecordId );

		$arguments = [
			'_id' => $mappedSubwayRailsMapperWithRecordId[ '_id' ]
		];

		return $this->persistenceConnector->queryFirst( $query, $arguments, $subwayRailsMapperEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The subway rails mapper entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the subway rails mapper entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?SubwayRailsMapperEntityInterface
	{
		$query = <<< END
			SELECT
				`subwayRailsMappers`.`_id`,
				`subwayRailsMappers`.`id`,
				`subwayRailsMappers`.`userId`,
				`subwayRailsMappers`.`startPositionX`,
				`subwayRailsMappers`.`startPositionY`,
				`subwayRailsMappers`.`startPositionZ`
			FROM
				`subwayRailsMappers`
			WHERE
				`subwayRailsMappers`.`userId` = :userId
			LIMIT
				0, 1;
		END;

		$userEntityPropertyMapper              = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();
		$subwayRailsMapperEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperEntityPropertyMapper();

		$mappedUserWithUserId = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId' => $mappedUserWithUserId[ 'id' ]
		];

		return $this->persistenceConnector->queryFirst( $query, $arguments, $subwayRailsMapperEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the subway rails mapper entity.
	 * @throws EntityDoesNotMatchClassNameException The subway rails mapper entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the subway rails mapper entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function createByUserId( SubwayRailsMapperEntityInterface $subwayRailsMapper, UserEntityInterface $userWithUserId ): SubwayRailsMapperEntityInterface
	{
		$query = <<< END
			INSERT INTO
				`subwayRailsMappers`
				( `id`, `userId`, `startPositionX`, `startPositionY`, `startPositionZ` )
			VALUES
				( UUID(), :userId, :startPositionX, :startPositionY, :startPositionZ );
		END;

		$subwayRailsMapperEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperEntityPropertyMapper();
		$userEntityPropertyMapper              = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();

		$mappedSubwayRailsMapper = $subwayRailsMapperEntityPropertyMapper->mapToArray( $subwayRailsMapper );
		$mappedUserWithUserId    = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId'         => $mappedUserWithUserId[ 'id' ],
			'startPositionX' => $mappedSubwayRailsMapper[ 'startPositionX' ],
			'startPositionY' => $mappedSubwayRailsMapper[ 'startPositionY' ],
			'startPositionZ' => $mappedSubwayRailsMapper[ 'startPositionZ' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		return $subwayRailsMapperEntityPropertyMapper->mapFromArray(
			[
				'_id' => $this->persistenceConnector->getLastInsertId()
			]
		);
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the subway rails mapper entity.
	 * @throws EntityDoesNotMatchClassNameException The subway rails mapper entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the subway rails mapper entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function updateByRecordId( SubwayRailsMapperEntityInterface $subwayRailsMapper, SubwayRailsMapperEntityInterface $subwayRailsMapperWithRecordId ): SubwayRailsMapperEntityInterface
	{
		$query = <<< END
			UPDATE
				`subwayRailsMappers`
			SET
				`subwayRailsMappers`.`startPositionX` = :startPositionX,
				`subwayRailsMappers`.`startPositionY` = :startPositionY,
				`subwayRailsMappers`.`startPositionZ` = :startPositionZ
			WHERE
				`subwayRailsMappers`.`_id` = :_id;
		END;

		$subwayRailsMapperEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperEntityPropertyMapper();

		$mappedSubwayRailsMapper             = $subwayRailsMapperEntityPropertyMapper->mapToArray( $subwayRailsMapper );
		$mappedSubwayRailsMapperWithRecordId = $subwayRailsMapperEntityPropertyMapper->mapToArray( $subwayRailsMapperWithRecordId );

		$arguments = [
			'_id'            => $mappedSubwayRailsMapperWithRecordId[ '_id' ],
			'startPositionX' => $mappedSubwayRailsMapper[ 'startPositionX' ],
			'startPositionY' => $mappedSubwayRailsMapper[ 'startPositionY' ],
			'startPositionZ' => $mappedSubwayRailsMapper[ 'startPositionZ' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		$persistedSubwayRailsMapperWithRecordId = new SubwayRailsMapperEntity();
		$persistedSubwayRailsMapperWithRecordId->set_Id(
			$subwayRailsMapperWithRecordId->get_Id()
		);

		return $persistedSubwayRailsMapperWithRecordId;
	}
}
