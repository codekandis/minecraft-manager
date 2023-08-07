<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Post\Settings;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractWriteAction;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\Settings\SettingsApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Http\UriBuilders\UriBuilderBuilder;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\Settings\MariaDb\SettingsEntityRepository;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\Settings\SettingsEntityRepositoryInterface;
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
 * Represents the action to create or update a user's settings.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingsAction extends AbstractWriteAction
{
	/**
	 * Stores the settings entity repository.
	 * @var SettingsEntityRepositoryInterface
	 */
	private SettingsEntityRepositoryInterface $settingsEntityRepository;

	/**
	 * Gets the settings entity repository.
	 * @return SettingsEntityRepositoryInterface
	 */
	public function getSettingEntityRepository(): SettingsEntityRepositoryInterface
	{
		return $this->settingEntityRepository ??
			   $this->settingEntityRepository = new SettingsEntityRepository(
				   $this->getPersistenceConnector()
			   );
	}

	/**
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The settings entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the settings entity class.
	 * @throws ReflectionException An error occurred during the creation of the settings entity.
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
					'settings'
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
		 * @var SettingsEntityInterface $submittedSetting
		 */
		$submittedSetting  = SettingsEntity::fromObject( $inputData[ 'settings' ] );
		$authenticatedUser = $this->getAuthenticatedUser();
		$existingSetting   = $this->readSettingByUserId( $authenticatedUser );

		if ( null === $existingSetting )
		{
			$settingsWithRecordId = $this->createSettingByUserId( $submittedSetting, $authenticatedUser );
		}
		else
		{
			$settingsWithRecordId = $this->updateSettingByRecordId( $submittedSetting, $existingSetting );
		}

		$persistedSetting = $this->readSettingByRecordId( $settingsWithRecordId );
		$this->extendUris( $persistedSetting );

		( new RedirectResponder(
			$persistedSetting->getCanonicalUri(),
			StatusCodes::SEE_OTHER
		) )
			->respond();
	}

	/**
	 * Extends the URIs of a setting.
	 * @param SettingsEntityInterface $settings The settings to extend its URIs.
	 */
	private function extendUris( SettingsEntityInterface $settings ): void
	{
		( new SettingsApiUriExtender(
			( new UriBuilderBuilder(
				ConfigurationRegistry
					::_()
					->getUriBuilderConfiguration()
			) )
				->buildApiUriBuilder(),
			$settings
		) )
			->extend();
	}

	/**
	 * Reads a settings by its specific record ID.
	 * @param UserEntityInterface $user The user with the ID to find.
	 * @return ?SettingsEntityInterface The setting, if found, null otherwise.
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSettingByUserId( UserEntityInterface $user ): ?SettingsEntityInterface
	{
		return $this->getSettingEntityRepository()
					->readByUserId( $user );
	}

	/**
	 * Reads a settings by its specific record ID.
	 * @param SettingsEntityInterface $settings The settings with the record ID to find.
	 * @return ?SettingsEntityInterface The setting, if found, null otherwise.
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSettingByRecordId( SettingsEntityInterface $settings ): ?SettingsEntityInterface
	{
		return $this->getSettingEntityRepository()
					->readByRecordId( $settings );
	}

	/**
	 * Creates or updates a settings by a specific user ID.
	 * @param SettingsEntityInterface $settings The settings to create or update.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 * @return SettingsEntityInterface The settings with the record ID of the created setting.
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The settings entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the settings entity class.
	 * @throws ReflectionException An error occurred during the creation of the settings entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function createSettingByUserId( SettingsEntityInterface $settings, UserEntityInterface $userWithUserId ): SettingsEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $settings, $userWithUserId ): SettingsEntityInterface
				{
					return $this
						->getSettingEntityRepository()
						->createByUserId( $settings, $userWithUserId );
				}
			);
	}

	/**
	 * Updates a settings by a specific user ID.
	 * @param SettingsEntityInterface $settings The settings to create or update.
	 * @param SettingsEntityInterface $settingsWithRecordId The settings with the settings record ID.
	 * @return SettingsEntityInterface The settings with the record ID of the update setting.
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The settings entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the settings entity class.
	 * @throws ReflectionException An error occurred during the creation of the settings entity.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 */
	private function updateSettingByRecordId( SettingsEntityInterface $settings, SettingsEntityInterface $settingsWithRecordId ): SettingsEntityInterface
	{
		return $this
			->getPersistenceConnector()
			->asTransaction(
				function () use ( $settings, $settingsWithRecordId ): SettingsEntityInterface
				{
					return $this
						->getSettingEntityRepository()
						->updateByRecordId( $settings, $settingsWithRecordId );
				}
			);
	}
}
