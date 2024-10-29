<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\Settings;

use CodeKandis\MinecraftManager\Environment\Entities\PersistableUserBasedEntityInterface;

/**
 * Represents the interface of any settings entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface SettingsEntityInterface extends PersistableUserBasedEntityInterface
{
	/**
	 * Gets the chunk size.
	 * @return int The chunk size.
	 */
	public function getChunkSize(): int;

	/**
	 * Sets the chunk size.
	 * @param int $chunksize The chunk size.
	 */
	public function setChunkSize( int $chunksize ): void;
}
