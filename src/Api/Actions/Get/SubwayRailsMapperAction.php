<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Get;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractAction;
use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilder;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayRailsMapperApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\FrontendConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb\SubwayRailsMapperEntityRepository;
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
 * Represents the action to get a user's subway rails mapper.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SubwayRailsMapperAction extends AbstractAction
{
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
		$user              = $this->getAuthenticatedUser();
		$subwayRailsMapper = $this->readSubwayRailsMapperByUserId( $user );

		if ( null === $subwayRailsMapper )
		{
			$subwayRailsMapper = SubwayRailsMapperEntity::fromArray(
				[
					'userId'         => $user->getId(),
					'startPositionX' => 0,
					'startPositionY' => 0,
					'startPositionZ' => 0
				]
			);
		}

		$this->extendUris( $subwayRailsMapper );

		( new JsonResponder(
			StatusCodes::OK,
			[
				'subwayRailsMapper' => $subwayRailsMapper
			]
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
	 * Reads a subway rails mapper by its specific user ID.
	 * @param UserEntityInterface $requestedUser The user with the user ID to find.
	 * @return ?SubwayRailsMapperEntityInterface The subway rails mapper, if found, null otherwise.
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readSubwayRailsMapperByUserId( UserEntityInterface $requestedUser ): ?SubwayRailsMapperEntityInterface
	{
		return ( new SubwayRailsMapperEntityRepository(
			$this->getPersistenceConnector()
		) )
			->readByUserId( $requestedUser );
	}
}
