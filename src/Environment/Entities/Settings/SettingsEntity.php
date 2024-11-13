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
}
