<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities;

/**
 * Represents the interface of any user based entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface UserBasedEntityInterface extends EntityInterface
{
	/**
	 * Gets the ID of the user the entity belongs to.
	 * @return string The ID of the user the entity belongs to.
	 */
	public function getUserId(): string;

	/**
	 * Sets the ID of the user the entity belongs to.
	 * @param string $userId The ID of the user the entity belongs to.
	 */
	public function setUserId( string $userId ): void;
}
