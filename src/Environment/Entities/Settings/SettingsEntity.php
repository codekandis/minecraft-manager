<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\Settings;

use CodeKandis\MinecraftManager\Environment\Entities\AbstractPersistableEntity;

/**
 * Represents a settings entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingsEntity extends AbstractPersistableEntity implements SettingsEntityInterface
{
	/**
	 * Stores the user ID of the settings.
	 * @var string
	 */
	public string $userId = '';

	/**
	 * Stores the chunk size.
	 * @var int
	 */
	public int $chunksize = 0;

	/**
	 * {@inheritDoc}
	 */
	public function getUserId(): string
	{
		return $this->userId;
	}

	/**
	 * {@inheritDoc}
	 */
	public function setUserId( string $userId ): void
	{
		$this->userId = $userId;
	}

	/**
	 * {@inheritDoc}
	 */
	public function getChunkSize(): int
	{
		return $this->chunksize;
	}

	/**
	 * {@inheritDoc}
	 */
	public function setChunkSize( int $chunksize ): void
	{
		$this->chunksize = $chunksize;
	}
}
