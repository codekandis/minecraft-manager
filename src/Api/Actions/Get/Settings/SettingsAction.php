<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Get\Settings;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractAction;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\Settings\SettingsApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Http\UriBuilders\UriBuilderBuilder;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\Settings\MariaDb\SettingsEntityRepository;
use CodeKandis\Persistence\FetchingResultFailedException;
use CodeKandis\Persistence\SettingFetchModeFailedException;
use CodeKandis\Persistence\StatementExecutionFailedException;
use CodeKandis\Persistence\StatementPreparationFailedException;
use CodeKandis\Persistence\TransactionCommitFailedException;
use CodeKandis\Persistence\TransactionRollbackFailedException;
use CodeKandis\Persistence\TransactionStartFailedException;
use CodeKandis\Tiphy\Http\Responses\JsonResponder;
use CodeKandis\Tiphy\Http\Responses\StatusCodes;
use JsonException;
use ReflectionException;

/**
 * Represents the action to get a user's settings.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingsAction extends AbstractAction
{
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
	 * @throws SettingFetchModeFailedException The settings of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 * @throws JsonException An error occurred during the serialization of the response.
	 */
	public function execute(): void
	{
		$user     = $this->getAuthenticatedUser();
		$settings = $this->readSettingByUserId( $user );

		if ( null === $settings )
		{
			$settings = SettingsEntity::fromArray(
				[
					'userId'    => $user->getId(),
					'chunksize' => 16
				]
			);
		}

		$this->extendUris( $settings );

		( new JsonResponder(
			StatusCodes::OK,
			[
				'settings' => $settings
			]
		) )
			->respond();
	}

	/**
	 * Extends the URIs of a settings.
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
	 * Reads a settings by its specific user ID.
	 * @param UserEntityInterface $requestedUser The user with the user ID to find.
	 * @return ?SettingsEntityInterface The settings, if found, null otherwise.
	 * @throws ReflectionException The settings entity class to reflect does not exist.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSettingByUserId( UserEntityInterface $requestedUser ): ?SettingsEntityInterface
	{
		return ( new SettingsEntityRepository(
			$this->getPersistenceConnector()
		) )
			->readByUserId( $requestedUser );
	}
}
