<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities;

/**
 * Represents the base class of any user based entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class AbstractUserBasedEntity extends AbstractEntity implements UserBasedEntityInterface
{
	/**
	 * Stores the ID of the user the entity belongs to.
	 * @var string
	 */
	public string $userId = '';

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
}
