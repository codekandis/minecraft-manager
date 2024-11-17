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
	 * Gets the position current X.
	 * @return int The position current X.
	 */
	public function getCurrentX(): int;

	/**
	 * Sets the position current X.
	 * @param int $currentX The position current X.
	 */
	public function setCurrentX( int $currentX ): void;

	/**
	 * Gets the position current Y.
	 * @return int The position current Y.
	 */
	public function getCurrentY(): int;

	/**
	 * Sets the position current Y.
	 * @param int $currentY The position current Y.
	 */
	public function setCurrentY( int $currentY ): void;

	/**
	 * Gets the position current Z.
	 * @return int The position current Z.
	 */
	public function getCurrentZ(): int;

	/**
	 * Sets the position current Z.
	 * @param int $currentZ The position current Z.
	 */
	public function setCurrentZ( int $currentZ ): void;
}
