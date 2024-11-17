<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper;

use CodeKandis\MinecraftManager\Environment\Entities\AbstractPersistableUserBasedEntity;

/**
 * Represents a lantern positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class LanternPositionsEntity extends AbstractPersistableUserBasedEntity implements LanternPositionsEntityInterface
{
	/**
	 * Stores the position current X.
	 * @var int
	 */
	public int $currentX = 0;

	/**
	 * Stores the position current Y.
	 * @var int
	 */
	public int $currentY = 0;

	/**
	 * Stores the position current Z.
	 * @var int
	 */
	public int $currentZ = 0;

	/**
	 * @inheritDoc
	 */
	public function getCurrentX(): int
	{
		return $this->currentX;
	}

	/**
	 * @inheritDoc
	 */
	public function setCurrentX( int $currentX ): void
	{
		$this->currentX = $currentX;
	}

	/**
	 * @inheritDoc
	 */
	public function getCurrentY(): int
	{
		return $this->currentY;
	}

	/**
	 * @inheritDoc
	 */
	public function setCurrentY( int $currentY ): void
	{
		$this->currentY = $currentY;
	}

	/**
	 * @inheritDoc
	 */
	public function getCurrentZ(): int
	{
		return $this->currentZ;
	}

	/**
	 * @inheritDoc
	 */
	public function setCurrentZ( int $currentZ ): void
	{
		$this->currentZ = $currentZ;
	}
}
