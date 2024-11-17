<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper;

use CodeKandis\MinecraftManager\Environment\Entities\AbstractPersistableUserBasedEntity;
use CodeKandis\MinecraftManager\Environment\Enumerations\Orientations;

/**
 * Represents a station positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class StationPositionsEntity extends AbstractPersistableUserBasedEntity implements StationPositionsEntityInterface
{
	/**
	 * Stores the orientation.
	 * @var string
	 */
	public string $orientation = Orientations::NORTH;

	/**
	 * Stores the position structure block X.
	 * @var int
	 */
	public int $structureBlockX = 0;

	/**
	 * Stores the position structure block Y.
	 * @var int
	 */
	public int $structureBlockY = 0;

	/**
	 * Stores the position structure block Z.
	 * @var int
	 */
	public int $structureBlockZ = 0;

	/**
	 * @inheritDoc
	 */
	public function getOrientation(): string
	{
		return $this->orientation;
	}

	/**
	 * @inheritDoc
	 */
	public function setOrientation( string $orientation ): void
	{
		$this->orientation = $orientation;
	}

	/**
	 * @inheritDoc
	 */
	public function getStructureBlockX(): int
	{
		return $this->structureBlockX;
	}

	/**
	 * @inheritDoc
	 */
	public function setStructureBlockX( int $structureBlockX ): void
	{
		$this->structureBlockX = $structureBlockX;
	}

	/**
	 * @inheritDoc
	 */
	public function getStructureBlockY(): int
	{
		return $this->structureBlockY;
	}

	/**
	 * @inheritDoc
	 */
	public function setStructureBlockY( int $structureBlockY ): void
	{
		$this->structureBlockY = $structureBlockY;
	}

	/**
	 * @inheritDoc
	 */
	public function getStructureBlockZ(): int
	{
		return $this->structureBlockZ;
	}

	/**
	 * @inheritDoc
	 */
	public function setStructureBlockZ( int $structureBlockZ ): void
	{
		$this->structureBlockZ = $structureBlockZ;
	}
}
