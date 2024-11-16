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
	 * Gets the current position X.
	 * @return int The current position X.
	 */
	public function getCurrentPositionX(): int;

	/**
	 * Sets the current position X.
	 * @param int $currentPositionX The current position X.
	 */
	public function setCurrentPositionX( int $currentPositionX ): void;

	/**
	 * Gets the current position Y.
	 * @return int The current position Y.
	 */
	public function getCurrentPositionY(): int;

	/**
	 * Sets the current position Y.
	 * @param int $currentPositionY The current position Y.
	 */
	public function setCurrentPositionY( int $currentPositionY ): void;

	/**
	 * Gets the current position Z.
	 * @return int The current position Z.
	 */
	public function getCurrentPositionZ(): int;

	/**
	 * Sets the current position Z.
	 * @param int $currentPositionZ The current position Z.
	 */
	public function setCurrentPositionZ( int $currentPositionZ ): void;
}
