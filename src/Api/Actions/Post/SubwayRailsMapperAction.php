<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Post;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractWriteAction;
use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilder;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayRailsMapperApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\FrontendConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb\SubwayRailsMapperEntityRepository;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapperEntityRepositoryInterface;
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
use function var_dump;

/**
 * Represents the action to create or update a user's subway rails mapper.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SubwayRailsMapperAction extends AbstractWriteAction
{
	/**
	 * Stores the subway rails mapper entity repository.
	 * @var SubwayRailsMapperEntityRepositoryInterface
	 */
	private SubwayRailsMapperEntityRepositoryInterface $subwayRailsMapperEntityRepository;

	/**
	 * Gets the subway rails mapper entity repository.
	 * @return SubwayRailsMapperEntityRepositoryInterface
	 */
	public function getSubwayRailsMapperEntityRepository(): SubwayRailsMapperEntityRepositoryInterface
	{
		return $this->subwayRailsMapperEntityRepository ??
			   $this->subwayRailsMapperEntityRepository = new SubwayRailsMapperEntityRepository(
				   $this->getPersistenceConnector()
			   );
	}

	/**
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The subway rails mapper entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the subway rails mapper entity class.
	 * @throws ReflectionException An error occurred during the creation of the subway rails mapper entity.
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
					'subwayRailsMapper'
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
		 * @var SubwayRailsMapperEntityInterface $submittedSubwayRailsMapper
		 */
		$submittedSubwayRailsMapper = SubwayRailsMapperEntity::fromObject( $inputData[ 'subwayRailsMapper' ] );
		$authenticatedUser          = $this->getAuthenticatedUser();
		$existingSubwayRailsMapper  = $this->readSubwayRailsMapperByUserId( $authenticatedUser );

		if ( null === $existingSubwayRailsMapper )
		{
			$subwayRailsMapperWithRecordId = $this->createSubwayRailsMapperByUserId( $submittedSubwayRailsMapper, $authenticatedUser );
		}
		else
		{
			$subwayRailsMapperWithRecordId = $this->updateSubwayRailsMapperByRecordId( $submittedSubwayRailsMapper, $existingSubwayRailsMapper );
			var_dump( $subwayRailsMapperWithRecordId );
			die();
		}

		$persistedSubwayRailsMapper = $this->readSubwayRailsMapperByRecordId( $subwayRailsMapperWithRecordId );
		$this->extendUris( $persistedSubwayRailsMapper );

		( new RedirectResponder(
			$persistedSubwayRailsMapper->getCanonicalUri(),
			StatusCodes::SEE_OTHER
		) )
			->respond();
	}

	/**
	 * Extends the URIs of a subway rails mapper.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subway rails mapper to extend its URIs.
	 */
	private function extendUris( SubwayRailsMapperEntityInterface $subwayRailsMapper ): void
	{
		( new SubwayRailsMapperApiUriExtender(
			new ApiUriBuilder(
				FrontendConfigurationRegistry
					::_()
					->getApiUriBuilderConfiguration()
			),
			$subwayRailsMapper
		) )
			->extend();
	}

	/**
	 * Reads a subway rails mapper by its specific record ID.
	 * @param UserEntityInterface $user The user with the ID to find.
	 * @return ?SubwayRailsMapperEntityInterface The subway rails mapper, if found, null otherwise.
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSubwayRailsMapperByUserId( UserEntityInterface $user ): ?SubwayRailsMapperEntityInterface
	{
		return $this->getSubwayRailsMapperEntityRepository()
					->readByUserId( $user );
	}

	/**
	 * Reads a subway rails mapper by its specific record ID.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subway rails mapper with the record ID to find.
	 * @return ?SubwayRailsMapperEntityInterface The subway rails mapper, if found, null otherwise.
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSubwayRailsMapperByRecordId( SubwayRailsMapperEntityInterface $subwayRailsMapper ): ?SubwayRailsMapperEntityInterface
	{
		return $this->getSubwayRailsMapperEntityRepository()
					->readByRecordId( $subwayRailsMapper );
	}

	/**
	 * Creates or updates a subway rails mapper by a specific user ID.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subway rails mapper to create or update.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 * @return SubwayRailsMapperEntityInterface The subway rails mapper with the record ID of the created subway rails mapper.
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The subway rails mapper entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the subway rails mapper entity class.
	 * @throws ReflectionException An error occurred during the creation of the subway rails mapper entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function createSubwayRailsMapperByUserId( SubwayRailsMapperEntityInterface $subwayRailsMapper, UserEntityInterface $userWithUserId ): SubwayRailsMapperEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $subwayRailsMapper, $userWithUserId ): SubwayRailsMapperEntityInterface
				{
					return $this
						->getSubwayRailsMapperEntityRepository()
						->createByUserId( $subwayRailsMapper, $userWithUserId );
				}
			);
	}

	/**
	 * Updates a subway rails mapper by a specific user ID.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subway rails mapper to create or update.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subway rails mapper with the subway rails mapper record ID.
	 * @return SubwayRailsMapperEntityInterface The subway rails mapper with the record ID of the update subway rails mapper.
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The subway rails mapper entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the subway rails mapper entity class.
	 * @throws ReflectionException An error occurred during the creation of the subway rails mapper entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function updateSubwayRailsMapperByRecordId( SubwayRailsMapperEntityInterface $subwayRailsMapper, SubwayRailsMapperEntityInterface $subwayRailsMapperWithRecordId ): SubwayRailsMapperEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $subwayRailsMapper, $subwayRailsMapperWithRecordId ): SubwayRailsMapperEntityInterface
				{
					return $this
						->getSubwayRailsMapperEntityRepository()
						->updateByRecordId( $subwayRailsMapper, $subwayRailsMapperWithRecordId );
				}
			);
	}
}
