<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper;

use CodeKandis\MinecraftManager\Environment\Entities\AbstractPersistableEntity;

/**
 * Represents a lantern positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class LanternPositionsEntity extends AbstractPersistableEntity implements LanternPositionsEntityInterface
{
	/**
	 * Stores the user ID of the lantern positions.
	 * @var string
	 */
	public string $userId = '';

	/**
	 * Stores the start position X.
	 * @var int
	 */
	public int $startPositionX = 0;

	/**
	 * Stores the start position Y.
	 * @var int
	 */
	public int $startPositionY = 0;

	/**
	 * Stores the start position Z.
	 * @var int
	 */
	public int $startPositionZ = 0;

	/**
	 * @inheritDoc
	 */
	public function getUserId(): string
	{
		return $this->userId;
	}

	/**
	 * @inheritDoc
	 */
	public function setUserId( string $userId ): void
	{
		$this->userId = $userId;
	}

	/**
	 * @inheritDoc
	 */
	public function getStartPositionX(): int
	{
		return $this->startPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function setStartPositionX( int $startPositionX ): void
	{
		$this->startPositionX = $startPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function getStartPositionY(): int
	{
		return $this->startPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function setStartPositionY( int $startPositionY ): void
	{
		$this->startPositionY = $startPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function getStartPositionZ(): int
	{
		return $this->startPositionZ;
	}

	/**
	 * @inheritDoc
	 */
	public function setStartPositionZ( int $startPositionZ ): void
	{
		$this->startPositionZ = $startPositionZ;
	}
}
