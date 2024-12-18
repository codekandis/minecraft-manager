<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayStationMapper\MariaDb;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\EntityPropertyMapperBuilder;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayStationMapper\StationPositionsEntityRepositoryInterface;
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
 * Represents a MariaDB repository of the station positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class StationPositionsEntityRepository extends AbstractRepository implements StationPositionsEntityRepositoryInterface
{
	/**
	 * @inheritDoc
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByRecordId( StationPositionsEntityInterface $stationPositionsWithRecordId ): ?StationPositionsEntityInterface
	{
		$query = <<< END
			SELECT
				`subwayStationMapper.stationPositions`.`_id`,
				`subwayStationMapper.stationPositions`.`id`,
				`subwayStationMapper.stationPositions`.`userId`,
				`subwayStationMapper.stationPositions`.`orientation`,
				`subwayStationMapper.stationPositions`.`structureBlockPositionX`,
				`subwayStationMapper.stationPositions`.`structureBlockPositionY`,
				`subwayStationMapper.stationPositions`.`structureBlockPositionZ`
			FROM
				`subwayStationMapper.stationPositions`
			WHERE
				`subwayStationMapper.stationPositions`.`_id` = :_id
			LIMIT
				0, 1;
		END;

		$stationPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayStationMapperStationPositionsEntityPropertyMapper();

		$mappedStationPositionsWithRecordId = $stationPositionsEntityPropertyMapper->mapToArray( $stationPositionsWithRecordId );

		$arguments = [
			'_id' => $mappedStationPositionsWithRecordId[ '_id' ]
		];

		/**
		 * @var StationPositionsEntityInterface
		 */
		return $this->persistenceConnector->queryFirst( $query, $arguments, $stationPositionsEntityPropertyMapper );
	}

	/**
	 * @inheritDoc
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The station positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the station positions entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?StationPositionsEntityInterface
	{
		$query = <<< END
			SELECT
				`subwayStationMapper.stationPositions`.`_id`,
				`subwayStationMapper.stationPositions`.`id`,
				`subwayStationMapper.stationPositions`.`userId`,
				`subwayStationMapper.stationPositions`.`orientation`,
				`subwayStationMapper.stationPositions`.`structureBlockPositionX`,
				`subwayStationMapper.stationPositions`.`structureBlockPositionY`,
				`subwayStationMapper.stationPositions`.`structureBlockPositionZ`
			FROM
				`subwayStationMapper.stationPositions`
			WHERE
				`subwayStationMapper.stationPositions`.`userId` = :userId
			LIMIT
				0, 1;
		END;

		$userEntityPropertyMapper             = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();
		$stationPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayStationMapperStationPositionsEntityPropertyMapper();

		$mappedUserWithUserId = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId' => $mappedUserWithUserId[ 'id' ]
		];

		/**
		 * @var StationPositionsEntityInterface
		 */
		return $this->persistenceConnector->queryFirst( $query, $arguments, $stationPositionsEntityPropertyMapper );
	}

	/**
	 * @inheritDoc
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the station positions entity.
	 * @throws EntityDoesNotMatchClassNameException The station positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the station positions entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function createByUserId( StationPositionsEntityInterface $stationPositions, UserEntityInterface $userWithUserId ): StationPositionsEntityInterface
	{
		$query = <<< END
			INSERT INTO
				`subwayStationMapper.stationPositions`
				( `id`, `userId`, `orientation`, `structureBlockPositionX`, `structureBlockPositionY`, `structureBlockPositionZ` )
			VALUES
				( UUID(), :userId, :orientation, :structureBlockPositionX, :structureBlockPositionY, :structureBlockPositionZ );
		END;

		$stationPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayStationMapperStationPositionsEntityPropertyMapper();
		$userEntityPropertyMapper             = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();

		$mappedStationPositions = $stationPositionsEntityPropertyMapper->mapToArray( $stationPositions );
		$mappedUserWithUserId   = $userEntityPropertyMapper->mapToArray( $userWithUserId );

		$arguments = [
			'userId'                  => $mappedUserWithUserId[ 'id' ],
			'orientation'             => $mappedStationPositions[ 'orientation' ],
			'structureBlockPositionX' => $mappedStationPositions[ 'structureBlockPositionX' ],
			'structureBlockPositionY' => $mappedStationPositions[ 'structureBlockPositionY' ],
			'structureBlockPositionZ' => $mappedStationPositions[ 'structureBlockPositionZ' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		/**
		 * @var StationPositionsEntityInterface
		 */
		return $stationPositionsEntityPropertyMapper->mapFromArray(
			[
				'_id' => $this->persistenceConnector->getLastInsertId()
			]
		);
	}

	/**
	 * @inheritDoc
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws ReflectionException An error occurred during the creation of the station positions entity.
	 * @throws EntityDoesNotMatchClassNameException The station positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the station positions entity class.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	public function updateByRecordId( StationPositionsEntityInterface $stationPositions, StationPositionsEntityInterface $stationPositionsWithRecordId ): StationPositionsEntityInterface
	{
		$query = <<< END
			UPDATE
				`subwayStationMapper.stationPositions`
			SET
				`subwayStationMapper.stationPositions`.`orientation` = :orientation,
				`subwayStationMapper.stationPositions`.`structureBlockPositionX` = :structureBlockPositionX,
				`subwayStationMapper.stationPositions`.`structureBlockPositionY` = :structureBlockPositionY,
				`subwayStationMapper.stationPositions`.`structureBlockPositionZ` = :structureBlockPositionZ
			WHERE
				`subwayStationMapper.stationPositions`.`_id` = :_id;
		END;

		$stationPositionsEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSubwayStationMapperStationPositionsEntityPropertyMapper();

		$mappedStationPositions             = $stationPositionsEntityPropertyMapper->mapToArray( $stationPositions );
		$mappedStationPositionsWithRecordId = $stationPositionsEntityPropertyMapper->mapToArray( $stationPositionsWithRecordId );

		$arguments = [
			'_id'                     => $mappedStationPositionsWithRecordId[ '_id' ],
			'orientation'             => $mappedStationPositions[ 'orientation' ],
			'structureBlockPositionX' => $mappedStationPositions[ 'structureBlockPositionX' ],
			'structureBlockPositionY' => $mappedStationPositions[ 'structureBlockPositionY' ],
			'structureBlockPositionZ' => $mappedStationPositions[ 'structureBlockPositionZ' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );

		$persistedStationPositionsWithRecordId = new StationPositionsEntity();
		$persistedStationPositionsWithRecordId->set_Id(
			$stationPositionsWithRecordId->get_Id()
		);

		return $persistedStationPositionsWithRecordId;
	}
}
