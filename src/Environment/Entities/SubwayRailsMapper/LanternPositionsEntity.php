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
	 * Stores the current position X.
	 * @var int
	 */
	public int $currentPositionX = 0;

	/**
	 * Stores the current position Y.
	 * @var int
	 */
	public int $currentPositionY = 0;

	/**
	 * Stores the current position Z.
	 * @var int
	 */
	public int $currentPositionZ = 0;

	/**
	 * @inheritDoc
	 */
	public function getCurrentPositionX(): int
	{
		return $this->currentPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function setCurrentPositionX( int $currentPositionX ): void
	{
		$this->currentPositionX = $currentPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function getCurrentPositionY(): int
	{
		return $this->currentPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function setCurrentPositionY( int $currentPositionY ): void
	{
		$this->currentPositionY = $currentPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function getCurrentPositionZ(): int
	{
		return $this->currentPositionZ;
	}

	/**
	 * @inheritDoc
	 */
	public function setCurrentPositionZ( int $currentPositionZ ): void
	{
		$this->currentPositionZ = $currentPositionZ;
	}
}
