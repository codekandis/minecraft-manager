<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities;

/**
 * Represents the interface of any setting entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface SettingEntityInterface extends PersistableEntityInterface
{
	/**
	 * Gets the user ID of the setting.
	 * @return string The user ID of the setting.
	 */
	public function getUserId(): string;

	/**
	 * Sets the user ID of the setting.
	 * @param string $userId The user ID of the setting.
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
