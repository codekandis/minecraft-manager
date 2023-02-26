<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\Settings;

use CodeKandis\MinecraftManager\Environment\Entities\PersistableEntityInterface;

/**
 * Represents the interface of any settings entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface SettingsEntityInterface extends PersistableEntityInterface
{
	/**
	 * Gets the user ID of the settings.
	 * @return string The user ID of the settings.
	 */
	public function getUserId(): string;

	/**
	 * Sets the user ID of the settings.
	 * @param string $userId The user ID of the settings.
	 */
	public function setUserId( string $userId ): void;

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
