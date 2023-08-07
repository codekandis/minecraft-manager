<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Get\SubwayRailsMapper;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractAction;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayRailsMapper\LanternPositionsApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Http\UriBuilders\UriBuilderBuilder;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapper\MariaDb\LanternPositionsEntityRepository;
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
 * Represents the action to get a user's lantern positions.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class LanternPositionsAction extends AbstractAction
{
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
		$user             = $this->getAuthenticatedUser();
		$lanternPositions = $this->readLanternPositionsByUserId( $user );

		if ( null === $lanternPositions )
		{
			$lanternPositions = LanternPositionsEntity::fromArray(
				[
					'userId'         => $user->getId(),
					'startPositionX' => 0,
					'startPositionY' => 0,
					'startPositionZ' => 0
				]
			);
		}

		$this->extendUris( $lanternPositions );

		( new JsonResponder(
			StatusCodes::OK,
			[
				'lanternPositions' => $lanternPositions
			]
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
	 * Reads a lantern positions by its specific user ID.
	 * @param UserEntityInterface $requestedUser The user with the user ID to find.
	 * @return ?LanternPositionsEntityInterface The lantern positions, if found, null otherwise.
	 * @throws ReflectionException The lantern positions entity class to reflect does not exist.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readLanternPositionsByUserId( UserEntityInterface $requestedUser ): ?LanternPositionsEntityInterface
	{
		return ( new LanternPositionsEntityRepository(
			$this->getPersistenceConnector()
		) )
			->readByUserId( $requestedUser );
	}
}
