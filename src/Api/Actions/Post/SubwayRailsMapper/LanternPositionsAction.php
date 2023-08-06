<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Post\SubwayRailsMapper;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractWriteAction;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayRailsMapper\LanternPositionsApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Http\UriBuilders\UriBuilderBuilder;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapper\LanternPositionsEntityRepositoryInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapper\MariaDb\LanternPositionsEntityRepository;
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
 * Represents the action to create or update a user's lantern positions.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class LanternPositionsAction extends AbstractWriteAction
{
	/**
	 * Stores the lantern positions entity repository.
	 * @var LanternPositionsEntityRepositoryInterface
	 */
	private LanternPositionsEntityRepositoryInterface $lanternPositionsEntityRepository;

	/**
	 * Gets the lantern positions entity repository.
	 * @return LanternPositionsEntityRepositoryInterface
	 */
	public function getLanternPositionsEntityRepository(): LanternPositionsEntityRepositoryInterface
	{
		return $this->lanternPositionsEntityRepository ??
			   $this->lanternPositionsEntityRepository = new LanternPositionsEntityRepository(
				   $this->getPersistenceConnector()
			   );
	}

	/**
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The lantern positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the lantern positions entity class.
	 * @throws ReflectionException An error occurred during the creation of the lantern positions entity.
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
					'lanternPositions'
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
		 * @var LanternPositionsEntityInterface $submittedLanternPositions
		 */
		$submittedLanternPositions = LanternPositionsEntity::fromObject( $inputData[ 'lanternPositions' ] );
		$authenticatedUser         = $this->getAuthenticatedUser();
		$existingLanternPositions  = $this->readLanternPositionsByUserId( $authenticatedUser );

		if ( null === $existingLanternPositions )
		{
			$lanternPositionsWithRecordId = $this->createLanternPositionsByUserId( $submittedLanternPositions, $authenticatedUser );
		}
		else
		{
			$lanternPositionsWithRecordId = $this->updateLanternPositionsByRecordId( $submittedLanternPositions, $existingLanternPositions );
		}

		$persistedLanternPositions = $this->readLanternPositionsByRecordId( $lanternPositionsWithRecordId );
		$this->extendUris( $persistedLanternPositions );

		( new RedirectResponder(
			$persistedLanternPositions->getCanonicalUri(),
			StatusCodes::SEE_OTHER
		) )
			->respond();
	}

	/**
	 * Extends the URIs of a lantern positions.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions to extend its URIs.
	 */
	private function extendUris( LanternPositionsEntityInterface $lanternPositions ): void
	{
		( new LanternPositionsApiUriExtender(
			( new UriBuilderBuilder(
				ConfigurationRegistry
					::_()
					->getUriBuilderConfiguration()
			) )
				->buildApiUriBuilder(),
			$lanternPositions
		) )
			->extend();
	}

	/**
	 * Reads a lantern positions by its specific record ID.
	 * @param UserEntityInterface $user The user with the ID to find.
	 * @return ?LanternPositionsEntityInterface The lantern positions, if found, null otherwise.
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readLanternPositionsByUserId( UserEntityInterface $user ): ?LanternPositionsEntityInterface
	{
		return $this->getLanternPositionsEntityRepository()
					->readByUserId( $user );
	}

	/**
	 * Reads a lantern positions by its specific record ID.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions with the record ID to find.
	 * @return ?LanternPositionsEntityInterface The lantern positions, if found, null otherwise.
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readLanternPositionsByRecordId( LanternPositionsEntityInterface $lanternPositions ): ?LanternPositionsEntityInterface
	{
		return $this->getLanternPositionsEntityRepository()
					->readByRecordId( $lanternPositions );
	}

	/**
	 * Creates or updates a lantern positions by a specific user ID.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions to create or update.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 * @return LanternPositionsEntityInterface The lantern positions with the record ID of the created lantern positions.
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The lantern positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the lantern positions entity class.
	 * @throws ReflectionException An error occurred during the creation of the lantern positions entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function createLanternPositionsByUserId( LanternPositionsEntityInterface $lanternPositions, UserEntityInterface $userWithUserId ): LanternPositionsEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $lanternPositions, $userWithUserId ): LanternPositionsEntityInterface
				{
					return $this
						->getLanternPositionsEntityRepository()
						->createByUserId( $lanternPositions, $userWithUserId );
				}
			);
	}

	/**
	 * Updates a lantern positions by a specific user ID.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions to create or update.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions with the lantern positions record ID.
	 * @return LanternPositionsEntityInterface The lantern positions with the record ID of the update lantern positions.
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The lantern positions entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the lantern positions entity class.
	 * @throws ReflectionException An error occurred during the creation of the lantern positions entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function updateLanternPositionsByRecordId( LanternPositionsEntityInterface $lanternPositions, LanternPositionsEntityInterface $lanternPositionsWithRecordId ): LanternPositionsEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $lanternPositions, $lanternPositionsWithRecordId ): LanternPositionsEntityInterface
				{
					return $this
						->getLanternPositionsEntityRepository()
						->updateByRecordId( $lanternPositions, $lanternPositionsWithRecordId );
				}
			);
	}
}
