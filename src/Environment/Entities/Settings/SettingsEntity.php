<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\Settings;

use CodeKandis\MinecraftManager\Environment\Entities\AbstractPersistableUserBasedEntity;

/**
 * Represents a settings entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingsEntity extends AbstractPersistableUserBasedEntity implements SettingsEntityInterface
{
	/**
	 * Stores the chunk size.
	 * @var int
	 */
	public int $chunkSize = 0;

	/**
	 * Stores the initial position X.
	 * @var int
	 */
	public int $initialPositionX = 0;

	/**
	 * Stores the initial position Y.
	 * @var int
	 */
	public int $initialPositionY = 0;

	/**
	 * Stores the initial position Z.
	 * @var int
	 */
	public int $initialPositionZ = 0;

	/**
	 * @inheritDoc
	 */
	public function getChunkSize(): int
	{
		return $this->chunkSize;
	}

	/**
	 * @inheritDoc
	 */
	public function setChunkSize( int $chunkSize ): void
	{
		$this->chunkSize = $chunkSize;
	}

	/**
	 * @inheritDoc
	 */
	public function getInitialPositionX(): int
	{
		return $this->initialPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function setInitialPositionX( int $initialPositionX ): void
	{
		$this->initialPositionX = $initialPositionX;
	}

	/**
	 * @inheritDoc
	 */
	public function getInitialPositionY(): int
	{
		return $this->initialPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function setInitialPositionY( int $initialPositionY ): void
	{
		$this->initialPositionY = $initialPositionY;
	}

	/**
	 * @inheritDoc
	 */
	public function getInitialPositionZ(): int
	{
		return $this->initialPositionZ;
	}

	/**
	 * @inheritDoc
	 */
	public function setInitialPositionZ( int $initialPositionZ ): void
	{
		$this->initialPositionZ = $initialPositionZ;
	}
}
