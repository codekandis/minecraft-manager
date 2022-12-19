<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Get;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractAction;
use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilder;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SettingApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\FrontendConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb\SettingEntityRepository;
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
 * Represents the action to get a user's setting.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingAction extends AbstractAction
{
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
		$user    = $this->getAuthenticatedUser();
		$setting = $this->readSettingByUserId( $user );

		if ( null === $setting )
		{
			$setting = SettingEntity::fromArray(
				[
					'userId'    => $user->getId(),
					'chunksize' => 16
				]
			);
		}

		$this->extendUris( $setting );

		( new JsonResponder(
			StatusCodes::OK,
			[
				'setting' => $setting
			]
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
	 * Reads a setting by its specific user ID.
	 * @param UserEntityInterface $requestedUser The user with the user ID to find.
	 * @return ?SettingEntityInterface The setting, if found, null otherwise.
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSettingByUserId( UserEntityInterface $requestedUser ): ?SettingEntityInterface
	{
		return ( new SettingEntityRepository(
			$this->getPersistenceConnector()
		) )
			->readByUserId( $requestedUser );
	}
}
