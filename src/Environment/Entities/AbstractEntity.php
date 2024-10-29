<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities;

use CodeKandis\Entities\AbstractEntity as OriginAbstractEntity;

/**
 * Represents the base class of any entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class AbstractEntity extends OriginAbstractEntity implements EntityInterface
{
	/**
	 * Stores the canonical URI of the entity.
	 * @var string
	 */
	public string $canonicalUri = '';

	/**
	 * Stores the ID of the entity.
	 * @var ?string
	 */
	public ?string $id = null;

	/**
	 * @inheritDoc
	 */
	public function getCanonicalUri(): string
	{
		return $this->canonicalUri;
	}

	/**
	 * @inheritDoc
	 */
	public function setCanonicalUri( string $canonicalUri ): void
	{
		$this->canonicalUri = $canonicalUri;
	}

	/**
	 * @inheritDoc
	 */
	public function getId(): ?string
	{
		return $this->id;
	}

	/**
	 * @inheritDoc
	 */
	public function setId( ?string $id ): void
	{
		$this->id = $id;
	}
}
