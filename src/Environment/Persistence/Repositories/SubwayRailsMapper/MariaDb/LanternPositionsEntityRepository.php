<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapper\MariaDb;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\EntityPropertyMapperBuilder;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapper\LanternPositionsEntityRepositoryInterface;
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
 * Represents a MariaDB repository of the lantern positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class LanternPositionsEntityRepository extends AbstractRepository implements LanternPositionsEntityRepositoryInterface
{
	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByRecordId( LanternPositionsEntityInterface $lanternPositionsWithRecordId ): ?LanternPositionsEntityInterface
	{
		$query = <<< END
			SELECT
				`subwayRailsMapper.lanternPositions`.`_id`,
				`subwayRailsMapper.lanternPositions`.`id`,
				`subwayRailsMapper.lanternPositions`.`userId`,
				`subwayRailsMapper.lanternPositions`.`startPositionX`,
				`subwayRailsMapper.lanternPositions`.`startPositionY`,
				`subwayRailsMapper.lanternPositions`.`startPositionZ`
			FROM
				`subwayRailsMapper.lanternPositions`
			WHERE
				`subwayRailsMapper.lanternPositions`.`_id` = :_id
			LIMIT
				0, 1;
		END;

		$lanternPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperLanternPositionEntityPropertyMapper();

		$mappedLanternPositionsWithRecordId = $lanternPositionsEntityPropertyMapper->mapToArray( $lanternPositionsWithRecordId );

		$arguments = [
			'_id' => $mappedLanternPositionsWithRecordId[ '_id' ]
		];

		/**
		 * @var LanternPositionsEntityInterface
		 */
		return $this->persistenceConnector->queryFirst( $query, $arguments, $lanternPositionsEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The lantern positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the lantern positions entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?LanternPositionsEntityInterface
	{
		$query = <<< END
			SELECT
				`subwayRailsMapper.lanternPositions`.`_id`,
				`subwayRailsMapper.lanternPositions`.`id`,
				`subwayRailsMapper.lanternPositions`.`userId`,
				`subwayRailsMapper.lanternPositions`.`startPositionX`,
				`subwayRailsMapper.lanternPositions`.`startPositionY`,
				`subwayRailsMapper.lanternPositions`.`startPositionZ`
			FROM
				`subwayRailsMapper.lanternPositions`
			WHERE
				`subwayRailsMapper.lanternPositions`.`userId` = :userId
			LIMIT
				0, 1;
		END;

		$userEntityPropertyMapper             = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();
		$lanternPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperLanternPositionEntityPropertyMapper();

		$mappedUserWithUserId = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId' => $mappedUserWithUserId[ 'id' ]
		];

		/**
		 * @var LanternPositionsEntityInterface
		 */
		return $this->persistenceConnector->queryFirst( $query, $arguments, $lanternPositionsEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the lantern positions entity.
	 * @throws EntityDoesNotMatchClassNameException The lantern positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the lantern positions entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function createByUserId( LanternPositionsEntityInterface $lanternPositions, UserEntityInterface $userWithUserId ): LanternPositionsEntityInterface
	{
		$query = <<< END
			INSERT INTO
				`subwayRailsMapper.lanternPositions`
				( `id`, `userId`, `startPositionX`, `startPositionY`, `startPositionZ` )
			VALUES
				( UUID(), :userId, :startPositionX, :startPositionY, :startPositionZ );
		END;

		$lanternPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperLanternPositionEntityPropertyMapper();
		$userEntityPropertyMapper             = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();

		$mappedLanternPositions = $lanternPositionsEntityPropertyMapper->mapToArray( $lanternPositions );
		$mappedUserWithUserId   = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId'         => $mappedUserWithUserId[ 'id' ],
			'startPositionX' => $mappedLanternPositions[ 'startPositionX' ],
			'startPositionY' => $mappedLanternPositions[ 'startPositionY' ],
			'startPositionZ' => $mappedLanternPositions[ 'startPositionZ' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		/**
		 * @var LanternPositionsEntityInterface
		 */
		return $lanternPositionsEntityPropertyMapper->mapFromArray(
			[
				'_id' => $this->persistenceConnector->getLastInsertId()
			]
		);
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the lantern positions entity.
	 * @throws EntityDoesNotMatchClassNameException The lantern positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the lantern positions entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function updateByRecordId( LanternPositionsEntityInterface $lanternPositions, LanternPositionsEntityInterface $lanternPositionsWithRecordId ): LanternPositionsEntityInterface
	{
		$query = <<< END
			UPDATE
				`subwayRailsMapper.lanternPositions`
			SET
				`subwayRailsMapper.lanternPositions`.`startPositionX` = :startPositionX,
				`subwayRailsMapper.lanternPositions`.`startPositionY` = :startPositionY,
				`subwayRailsMapper.lanternPositions`.`startPositionZ` = :startPositionZ
			WHERE
				`subwayRailsMapper.lanternPositions`.`_id` = :_id;
		END;

		$lanternPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayRailsMapperLanternPositionEntityPropertyMapper();

		$mappedLanternPositions             = $lanternPositionsEntityPropertyMapper->mapToArray( $lanternPositions );
		$mappedLanternPositionsWithRecordId = $lanternPositionsEntityPropertyMapper->mapToArray( $lanternPositionsWithRecordId );

		$arguments = [
			'_id'            => $mappedLanternPositionsWithRecordId[ '_id' ],
			'startPositionX' => $mappedLanternPositions[ 'startPositionX' ],
			'startPositionY' => $mappedLanternPositions[ 'startPositionY' ],
			'startPositionZ' => $mappedLanternPositions[ 'startPositionZ' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		$persistedLanternPositionsWithRecordId = new LanternPositionsEntity();
		$persistedLanternPositionsWithRecordId->set_Id(
			$lanternPositionsWithRecordId->get_Id()
		);

		return $persistedLanternPositionsWithRecordId;
	}
}
