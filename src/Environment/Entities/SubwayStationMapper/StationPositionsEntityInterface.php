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
	 * Gets the structure blocks' position X.
	 * @return int The structure blocks' position X.
	 */
	public function getStructureBlockPositionX(): int;

	/**
	 * Sets the structure blocks' position X.
	 * @param int $structureBlockPositionX The structure blocks' position X.
	 */
	public function setStructureBlockPositionX( int $structureBlockPositionX ): void;

	/**
	 * Gets the structure blocks' position Y.
	 * @return int The structure blocks' position Y.
	 */
	public function getStructureBlockPositionY(): int;

	/**
	 * Sets the structure blocks' position Y.
	 * @param int $structureBlockPositionY The structure blocks' position Y.
	 */
	public function setStructureBlockPositionY( int $structureBlockPositionY ): void;

	/**
	 * Gets the structure blocks' position Z.
	 * @return int The structure blocks' position Z.
	 */
	public function getStructureBlockPositionZ(): int;

	/**
	 * Sets the structure blocks' position Z.
	 * @param int $structureBlockPositionZ The structure blocks' position Z.
	 */
	public function setStructureBlockPositionZ( int $structureBlockPositionZ ): void;
}
