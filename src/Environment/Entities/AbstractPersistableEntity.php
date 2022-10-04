<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities;

/**
 * Represents the base class of any entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class AbstractPersistableEntity extends AbstractEntity implements PersistableEntityInterface
{
	/**
	 * Stores the ID of the entity.
	 * @var string
	 */
	public string $id = '';

	/**
	 * {@inheritDoc}
	 */
	public function getId(): string
	{
		return $this->id;
	}

	/**
	 * {@inheritDoc}
	 */
	public function setId( string $id ): void
	{
		$this->id = $id;
	}
}
