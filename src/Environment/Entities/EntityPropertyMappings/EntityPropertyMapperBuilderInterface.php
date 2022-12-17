<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings;

use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapperInterface;

/**
 * Represents the interface of any entity property mapper builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface EntityPropertyMapperBuilderInterface
{
	/**
	 * Builds the entity property mapper of the user entity.
	 * @return EntityPropertyMapperInterface The entity property mapper of the user entity.
	 */
	public function buildUserEntityPropertyMapper(): EntityPropertyMapperInterface;

	/**
	 * Builds the entity property mapper of the setting entity.
	 * @return EntityPropertyMapperInterface The entity property mapper of the setting entity.
	 */
	public function buildSettingEntityPropertyMapper(): EntityPropertyMapperInterface;
}
