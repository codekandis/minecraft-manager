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
	 * @param int $chunkSize The chunk size.
	 */
	public function setChunkSize( int $chunkSize ): void;

	/**
	 * Gets the initial position X.
	 * @return int The initial position X.
	 */
	public function getInitialPositionX(): int;

	/**
	 * Sets the initial position X.
	 * @param int $initialPositionX The initial position X.
	 */
	public function setInitialPositionX( int $initialPositionX ): void;

	/**
	 * Gets the initial position Y.
	 * @return int The initial position Y.
	 */
	public function getInitialPositionY(): int;

	/**
	 * Sets the initial position Y.
	 * @param int $initialPositionY The initial position Y.
	 */
	public function setInitialPositionY( int $initialPositionY ): void;

	/**
	 * Gets the initial position Z.
	 * @return int The initial position Z.
	 */
	public function getInitialPositionZ(): int;

	/**
	 * Sets the initial position Z.
	 * @param int $initialPositionZ The initial position Z.
	 */
	public function setInitialPositionZ( int $initialPositionZ ): void;
}
