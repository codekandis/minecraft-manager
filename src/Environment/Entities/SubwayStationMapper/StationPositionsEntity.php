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
	 * Stores the structure blocks' position X.
	 * @var int
	 */
	public int $structureBlockPositionX = 0;

	/**
	 * Stores the structure blocks' position Y.
	 * @var int
	 */
	public int $structureBlockPositionY = 0;

	/**
	 * Stores the structure blocks' position Z.
	 * @var int
	 */
	public int $structureBlockPositionZ = 0;

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
	public function getStructureBlockPositionX(): int
	{
		return $this->structureBlockPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function setStructureBlockPositionX( int $structureBlockPositionX ): void
	{
		$this->structureBlockPositionX = $structureBlockPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function getStructureBlockPositionY(): int
	{
		return $this->structureBlockPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function setStructureBlockPositionY( int $structureBlockPositionY ): void
	{
		$this->structureBlockPositionY = $structureBlockPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function getStructureBlockPositionZ(): int
	{
		return $this->structureBlockPositionZ;
	}

	/**
	 * @inheritDoc
	 */
	public function setStructureBlockPositionZ( int $structureBlockPositionZ ): void
	{
		$this->structureBlockPositionZ = $structureBlockPositionZ;
	}
}
