<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper;

use CodeKandis\MinecraftManager\Environment\Entities\PersistableUserBasedEntityInterface;

/**
 * Represents the interface of any lantern positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface LanternPositionsEntityInterface extends PersistableUserBasedEntityInterface
{
	/**
	 * Gets the chunk start position X.
	 * @return int The chunk start position X.
	 */
	public function getStartPositionX(): int;

	/**
	 * Sets the start position X.
	 * @param int $startPositionX The start position X.
	 */
	public function setStartPositionX( int $startPositionX ): void;

	/**
	 * Gets the chunk start position Y.
	 * @return int The chunk start position Y.
	 */
	public function getStartPositionY(): int;

	/**
	 * Sets the start position Y.
	 * @param int $startPositionY The start position Y.
	 */
	public function setStartPositionY( int $startPositionY ): void;

	/**
	 * Gets the chunk start position Z.
	 * @return int The chunk start position Z.
	 */
	public function getStartPositionZ(): int;

	/**
	 * Sets the start position Z.
	 * @param int $startPositionZ The start position Z.
	 */
	public function setStartPositionZ( int $startPositionZ ): void;
}
