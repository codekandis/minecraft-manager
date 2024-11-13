<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SubwayRailsMapper;

use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\Persistence\Repositories\RepositoryInterface;

/**
 * Represents the interface of any repository of the lantern positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface LanternPositionsEntityRepositoryInterface extends RepositoryInterface
{
	/**
	 * Reads a lantern positions by a specific user ID.
	 * @param LanternPositionsEntityInterface $lanternPositionsWithRecordId The lantern positions with the lantern positionsusers' record ID.
	 * @return LanternPositionsEntityInterface The read lantern positions.
	 */
	public function readByRecordId( LanternPositionsEntityInterface $lanternPositionsWithRecordId ): ?LanternPositionsEntityInterface;

	/**
	 * Reads a lantern positions by a specific user ID.
	 * @param UserEntityInterface $userWithUserId The user with the users' ID.
	 * @return LanternPositionsEntityInterface The read lantern positions.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?LanternPositionsEntityInterface;

	/**
	 * Creates a lantern positions by a specific user ID.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions to create.
	 * @param UserEntityInterface $userWithUserId The user with the users' ID.
	 */
	public function createByUserId( LanternPositionsEntityInterface $lanternPositions, UserEntityInterface $userWithUserId ): LanternPositionsEntityInterface;

	/**
	 * Updates a lantern positions by a specific record ID.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions to update.
	 * @param LanternPositionsEntityInterface $lanternPositionsWithRecordId The lantern positions with the lantern positionsusers' record ID.
	 */
	public function updateByRecordId( LanternPositionsEntityInterface $lanternPositions, LanternPositionsEntityInterface $lanternPositionsWithRecordId ): LanternPositionsEntityInterface;
}
