<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities;

/**
 * Represents the interface of any subway rails mapper entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface SubwayRailsMapperEntityInterface extends PersistableEntityInterface
{
	/**
	 * Gets the user ID of the subway rails mapper.
	 * @return string The user ID of the subway rails mapper.
	 */
	public function getUserId(): string;

	/**
	 * Sets the user ID of the subway rails mapper.
	 * @param string $userId The user ID of the subway rails mapper.
	 */
	public function setUserId( string $userId ): void;

	/**
	 * Gets the chunk start position X.
	 * @return int The chunk start position X.
	 */
	public function getStartPositionX(): int;

	/**
	 * Sets the start position X.
	 * @param int $startPositionX The start position X.
	 */
	public function setStartPositionX( int $startPositionX ): void;

	/**
	 * Gets the chunk start position Y.
	 * @return int The chunk start position Y.
	 */
	public function getStartPositionY(): int;

	/**
	 * Sets the start position Y.
	 * @param int $startPositionY The start position Y.
	 */
	public function setStartPositionY( int $startPositionY ): void;

	/**
	 * Gets the chunk start position Z.
	 * @return int The chunk start position Z.
	 */
	public function getStartPositionZ(): int;

	/**
	 * Sets the start position Z.
	 * @param int $startPositionZ The start position Z.
	 */
	public function setStartPositionZ( int $startPositionZ ): void;
}
