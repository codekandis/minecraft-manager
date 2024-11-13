<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayStationMapper;

use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\Persistence\Repositories\RepositoryInterface;

/**
 * Represents the interface of any repository of the station positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface StationPositionsEntityRepositoryInterface extends RepositoryInterface
{
	/**
	 * Reads a station positions by a specific user ID.
	 * @param StationPositionsEntityInterface $stationPositionsWithRecordId The station positions with the station positions' record ID.
	 * @return StationPositionsEntityInterface The read station positions.
	 */
	public function readByRecordId( StationPositionsEntityInterface $stationPositionsWithRecordId ): ?StationPositionsEntityInterface;

	/**
	 * Reads a station positions by a specific user ID.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 * @return StationPositionsEntityInterface The read station positions.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?StationPositionsEntityInterface;

	/**
	 * Creates a station positions by a specific user ID.
	 * @param StationPositionsEntityInterface $stationPositions The station positions to create.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 */
	public function createByUserId( StationPositionsEntityInterface $stationPositions, UserEntityInterface $userWithUserId ): StationPositionsEntityInterface;

	/**
	 * Updates a station positions by a specific record ID.
	 * @param StationPositionsEntityInterface $stationPositions The station positions to update.
	 * @param StationPositionsEntityInterface $stationPositionsWithRecordId The station positions with the station positions' record ID.
	 */
	public function updateByRecordId( StationPositionsEntityInterface $stationPositions, StationPositionsEntityInterface $stationPositionsWithRecordId ): StationPositionsEntityInterface;
}
