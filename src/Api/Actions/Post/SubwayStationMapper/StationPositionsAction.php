<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Post\SubwayStationMapper;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractWriteAction;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayStationMapper\StationPositionsApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Http\UriBuilders\UriBuilderBuilder;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayStationMapper\MariaDb\StationPositionsEntityRepository;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayStationMapper\StationPositionsEntityRepositoryInterface;
use CodeKandis\Persistence\FetchingResultFailedException;
use CodeKandis\Persistence\SettingFetchModeFailedException;
use CodeKandis\Persistence\StatementExecutionFailedException;
use CodeKandis\Persistence\StatementPreparationFailedException;
use CodeKandis\Persistence\TransactionCommitFailedException;
use CodeKandis\Persistence\TransactionRollbackFailedException;
use CodeKandis\Persistence\TransactionStartFailedException;
use CodeKandis\Tiphy\Http\Requests\BadRequestException;
use CodeKandis\Tiphy\Http\Responses\JsonResponder;
use CodeKandis\Tiphy\Http\Responses\RedirectResponder;
use CodeKandis\Tiphy\Http\Responses\StatusCodes;
use CodeKandis\Tiphy\Throwables\ErrorInformation;
use JsonException;
use ReflectionException;

/**
 * Represents the action to create or update a users' station positions.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class StationPositionsAction extends AbstractWriteAction
{
	/**
	 * Stores the station positions entity repository.
	 * @var StationPositionsEntityRepositoryInterface
	 */
	private StationPositionsEntityRepositoryInterface $stationPositionsEntityRepository;

	/**
	 * Gets the station positions entity repository.
	 * @return StationPositionsEntityRepositoryInterface
	 */
	public function getStationPositionsEntityRepository(): StationPositionsEntityRepositoryInterface
	{
		return $this->stationPositionsEntityRepository ??
			   $this->stationPositionsEntityRepository = new StationPositionsEntityRepository(
				   $this->getPersistenceConnector()
			   );
	}

	/**
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The station positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the station positions entity class.
	 * @throws ReflectionException An error occurred during the creation of the station positions entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 * @throws JsonException An error occurred during the serialization of the response.
	 */
	public function execute(): void
	{
		try
		{
			$inputData = $this->getInputData(
				[
					'stationPositions'
				]
			);
		}
		catch ( BadRequestException $exception )
		{
			$errorInformation = new ErrorInformation( $exception->getCode(), $exception->getMessage() );
			( new JsonResponder( StatusCodes::BAD_REQUEST, null, $errorInformation ) )
				->respond();

			return;
		}

		/**
		 * @var StationPositionsEntityInterface $submittedStationPositions
		 */
		$submittedStationPositions = StationPositionsEntity::fromObject( $inputData[ 'stationPositions' ] );
		$authenticatedUser         = $this->getAuthenticatedUser();
		$existingStationPositions  = $this->readStationPositionsByUserId( $authenticatedUser );

		if ( null === $existingStationPositions )
		{
			$stationPositionsWithRecordId = $this->createStationPositionsByUserId( $submittedStationPositions, $authenticatedUser );
		}
		else
		{
			$stationPositionsWithRecordId = $this->updateStationPositionsByRecordId( $submittedStationPositions, $existingStationPositions );
		}

		$persistedStationPositions = $this->readStationPositionsByRecordId( $stationPositionsWithRecordId );
		$this->extendUris( $persistedStationPositions );

		( new RedirectResponder(
			$persistedStationPositions->getCanonicalUri(),
			StatusCodes::SEE_OTHER
		) )
			->respond();
	}

	/**
	 * Extends the URIs of a station positions.
	 * @param StationPositionsEntityInterface $stationPositions The station positions to extend its URIs.
	 */
	private function extendUris( StationPositionsEntityInterface $stationPositions ): void
	{
		( new StationPositionsApiUriExtender(
			( new UriBuilderBuilder(
				ConfigurationRegistry
					::_()
					->getUriBuilderConfiguration()
			) )
				->buildApiUriBuilder(),
			$stationPositions
		) )
			->extend();
	}

	/**
	 * Reads a station positions by its specific record ID.
	 * @param UserEntityInterface $user The user with the ID to find.
	 * @return ?StationPositionsEntityInterface The station positions, if found, null otherwise.
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readStationPositionsByUserId( UserEntityInterface $user ): ?StationPositionsEntityInterface
	{
		return $this->getStationPositionsEntityRepository()
					->readByUserId( $user );
	}

	/**
	 * Reads a station positions by its specific record ID.
	 * @param StationPositionsEntityInterface $stationPositions The station positions with the record ID to find.
	 * @return ?StationPositionsEntityInterface The station positions, if found, null otherwise.
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readStationPositionsByRecordId( StationPositionsEntityInterface $stationPositions ): ?StationPositionsEntityInterface
	{
		return $this->getStationPositionsEntityRepository()
					->readByRecordId( $stationPositions );
	}

	/**
	 * Creates or updates a station positions by a specific user ID.
	 * @param StationPositionsEntityInterface $stationPositions The station positions to create or update.
	 * @param UserEntityInterface $userWithUserId The user with the users' ID.
	 * @return StationPositionsEntityInterface The station positions with the record ID of the created station positions.
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The station positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the station positions entity class.
	 * @throws ReflectionException An error occurred during the creation of the station positions entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function createStationPositionsByUserId( StationPositionsEntityInterface $stationPositions, UserEntityInterface $userWithUserId ): StationPositionsEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $stationPositions, $userWithUserId ): StationPositionsEntityInterface
				{
					return $this
						->getStationPositionsEntityRepository()
						->createByUserId( $stationPositions, $userWithUserId );
				}
			);
	}

	/**
	 * Updates a station positions by a specific user ID.
	 * @param StationPositionsEntityInterface $stationPositions The station positions to create or update.
	 * @param StationPositionsEntityInterface $stationPositions The station positions with the station positions record ID.
	 * @return StationPositionsEntityInterface The station positions with the record ID of the update station positions.
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The station positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the station positions entity class.
	 * @throws ReflectionException An error occurred during the creation of the station positions entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function updateStationPositionsByRecordId( StationPositionsEntityInterface $stationPositions, StationPositionsEntityInterface $stationPositionsWithRecordId ): StationPositionsEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $stationPositions, $stationPositionsWithRecordId ): StationPositionsEntityInterface
				{
					return $this
						->getStationPositionsEntityRepository()
						->updateByRecordId( $stationPositions, $stationPositionsWithRecordId );
				}
			);
	}
}
