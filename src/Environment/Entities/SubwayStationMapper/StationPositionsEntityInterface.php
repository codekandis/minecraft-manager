<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper;

use CodeKandis\MinecraftManager\Environment\Entities\PersistableUserBasedEntityInterface;

/**
 * Represents the interface of any station positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface StationPositionsEntityInterface extends PersistableUserBasedEntityInterface
{
	/**
	 * Gets the orientation.
	 * @return string The orientation.
	 */
	public function getOrientation(): string;

	/**
	 * Sets the orientation.
	 * @param string $orientation The orientation.
	 */
	public function setOrientation( string $orientation ): void;

	/**
	 * Gets the position structure block X.
	 * @return int The position structure block X.
	 */
	public function getStructureBlockX(): int;

	/**
	 * Sets the position structure block X.
	 * @param int $structureBlockX The position structure block X.
	 */
	public function setStructureBlockX( int $structureBlockX ): void;

	/**
	 * Gets the position structure block Y.
	 * @return int The position structure block Y.
	 */
	public function getStructureBlockY(): int;

	/**
	 * Sets the position structure block Y.
	 * @param int $structureBlockY The position structure block Y.
	 */
	public function setStructureBlockY( int $structureBlockY ): void;

	/**
	 * Gets the position structure block Z.
	 * @return int The position structure block Z.
	 */
	public function getStructureBlockZ(): int;

	/**
	 * Sets the position structure block Z.
	 * @param int $structureBlockZ The position structure block Z.
	 */
	public function setStructureBlockZ( int $structureBlockZ ): void;
}
