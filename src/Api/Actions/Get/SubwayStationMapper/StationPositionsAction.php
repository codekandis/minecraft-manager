<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions\Get\SubwayStationMapper;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Api\Actions\AbstractAction;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayStationMapper\StationPositionsApiUriExtender;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Enumerations\Orientations;
use CodeKandis\MinecraftManager\Environment\Http\UriBuilders\UriBuilderBuilder;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayStationMapper\MariaDb\StationPositionsEntityRepository;
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
 * Represents the action to get a users' station positions.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class StationPositionsAction extends AbstractAction
{
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
		$user             = $this->getAuthenticatedUser();
		$stationPositions = $this->readStationPositionsByUserId( $user );

		if ( null === $stationPositions )
		{
			$stationPositions = StationPositionsEntity::fromArray(
				[
					'userId'          => $user->getId(),
					'orientation'     => Orientations::NORTH,
					'structureBlockX' => 0,
					'structureBlockY' => 0,
					'structureBlockZ' => 0
				]
			);
		}

		$this->extendUris( $stationPositions );

		( new JsonResponder(
			StatusCodes::OK,
			[
				'stationPositions' => $stationPositions
			]
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
	 * Reads a station positions by its specific user ID.
	 * @param UserEntityInterface $requestedUser The user with the user ID to find.
	 * @return ?StationPositionsEntityInterface The station positions, if found, null otherwise.
	 * @throws ReflectionException The station positions entity class to reflect does not exist.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function readStationPositionsByUserId( UserEntityInterface $requestedUser ): ?StationPositionsEntityInterface
	{
		return ( new StationPositionsEntityRepository(
			$this->getPersistenceConnector()
		) )
			->readByUserId( $requestedUser );
	}
}
