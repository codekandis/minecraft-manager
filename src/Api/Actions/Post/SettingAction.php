<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Post;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractWriteAction;
use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilder;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SettingApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\FrontendConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb\SettingEntityRepository;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SettingEntityRepositoryInterface;
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
 * Represents the action to create or update a user's setting.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingAction extends AbstractWriteAction
{
	/**
	 * Stores the setting entity repository.
	 * @var SettingEntityRepositoryInterface
	 */
	private SettingEntityRepositoryInterface $settingEntityRepository;

	/**
	 * Gets the setting entity repository.
	 * @return SettingEntityRepositoryInterface
	 */
	public function getSettingEntityRepository(): SettingEntityRepositoryInterface
	{
		return $this->settingEntityRepository ??
			   $this->settingEntityRepository = new SettingEntityRepository(
				   $this->getPersistenceConnector()
			   );
	}

	/**
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The setting entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the setting entity class.
	 * @throws ReflectionException An error occurred during the creation of the setting entity.
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
					'setting'
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
		 * @var SettingEntityInterface $submittedSetting
		 */
		$submittedSetting  = SettingEntity::fromObject( $inputData[ 'setting' ] );
		$authenticatedUser = $this->getAuthenticatedUser();
		$existingSetting   = $this->readSettingByUserId( $authenticatedUser );

		if ( null === $existingSetting )
		{
			$settingWithRecordId = $this->createSettingByUserId( $submittedSetting, $authenticatedUser );
		}
		else
		{
			$settingWithRecordId = $this->updateSettingByRecordId( $submittedSetting, $existingSetting );
			var_dump( $settingWithRecordId );
			die();
		}

		$persistedSetting = $this->readSettingByRecordId( $settingWithRecordId );
		$this->extendUris( $persistedSetting );

		( new RedirectResponder(
			$persistedSetting->getCanonicalUri(),
			StatusCodes::SEE_OTHER
		) )
			->respond();
	}

	/**
	 * Extends the URIs of a setting.
	 * @param SettingEntityInterface $setting The setting to extend its URIs.
	 */
	private function extendUris( SettingEntityInterface $setting ): void
	{
		( new SettingApiUriExtender(
			new ApiUriBuilder(
				FrontendConfigurationRegistry
					::_()
					->getApiUriBuilderConfiguration()
			),
			$setting
		) )
			->extend();
	}

	/**
	 * Reads a setting by its specific record ID.
	 * @param UserEntityInterface $user The user with the ID to find.
	 * @return ?SettingEntityInterface The setting, if found, null otherwise.
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSettingByUserId( UserEntityInterface $user ): ?SettingEntityInterface
	{
		return $this->getSettingEntityRepository()
					->readByUserId( $user );
	}

	/**
	 * Reads a setting by its specific record ID.
	 * @param SettingEntityInterface $setting The setting with the record ID to find.
	 * @return ?SettingEntityInterface The setting, if found, null otherwise.
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSettingByRecordId( SettingEntityInterface $setting ): ?SettingEntityInterface
	{
		return $this->getSettingEntityRepository()
					->readByRecordId( $setting );
	}

	/**
	 * Creates or updates a setting by a specific user ID.
	 * @param SettingEntityInterface $setting The setting to create or update.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 * @return SettingEntityInterface The setting with the record ID of the created setting.
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The setting entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the setting entity class.
	 * @throws ReflectionException An error occurred during the creation of the setting entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function createSettingByUserId( SettingEntityInterface $setting, UserEntityInterface $userWithUserId ): SettingEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $setting, $userWithUserId ): SettingEntityInterface
				{
					return $this
						->getSettingEntityRepository()
						->createByUserId( $setting, $userWithUserId );
				}
			);
	}

	/**
	 * Updates a setting by a specific user ID.
	 * @param SettingEntityInterface $setting The setting to create or update.
	 * @param SettingEntityInterface $setting The setting with the setting record ID.
	 * @return SettingEntityInterface The setting with the record ID of the update setting.
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The setting entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the setting entity class.
	 * @throws ReflectionException An error occurred during the creation of the setting entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function updateSettingByRecordId( SettingEntityInterface $setting, SettingEntityInterface $settingWithRecordId ): SettingEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $setting, $settingWithRecordId ): SettingEntityInterface
				{
					return $this
						->getSettingEntityRepository()
						->updateByRecordId( $setting, $settingWithRecordId );
				}
			);
	}
}
