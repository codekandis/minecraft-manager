<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories;

use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\Persistence\Repositories\RepositoryInterface;

/**
 * Represents the interface of any repository of the subway rails mapper entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface SubwayRailsMapperEntityRepositoryInterface extends RepositoryInterface
{
	/**
	 * Reads a subway rails mapper by a specific user ID.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapperWithRecordId The subway rails mapper with the subway rails mapper's record ID.
	 * @return SubwayRailsMapperEntityInterface The read subway rails mapper.
	 */
	public function readByRecordId( SubwayRailsMapperEntityInterface $subwayRailsMapperWithRecordId ): ?SubwayRailsMapperEntityInterface;

	/**
	 * Reads a subway rails mapper by a specific user ID.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 * @return SubwayRailsMapperEntityInterface The read subway rails mapper.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?SubwayRailsMapperEntityInterface;

	/**
	 * Creates a subway rails mapper by a specific user ID.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subway rails mapper to create.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 */
	public function createByUserId( SubwayRailsMapperEntityInterface $subwayRailsMapper, UserEntityInterface $userWithUserId ): SubwayRailsMapperEntityInterface;

	/**
	 * Updates a subway rails mapper by a specific record ID.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subway rails mapper to update.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapperWithRecordId The subway rails mapper with the subway rails mapper's record ID.
	 */
	public function updateByRecordId( SubwayRailsMapperEntityInterface $subwayRailsMapper, SubwayRailsMapperEntityInterface $subwayRailsMapperWithRecordId ): SubwayRailsMapperEntityInterface;
}
