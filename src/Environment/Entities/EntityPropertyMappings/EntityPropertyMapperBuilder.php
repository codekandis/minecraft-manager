<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings;

use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapper;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapperInterface;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntity;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntity;
use ReflectionException;

/**
 * Represents an entity property mapper builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class EntityPropertyMapperBuilder implements EntityPropertyMapperBuilderInterface
{
	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 */
	public function buildUserEntityPropertyMapper(): EntityPropertyMapperInterface
	{
		return new EntityPropertyMapper( UserEntity::class, new UserEntityPropertyMappings() );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 */
	public function buildSettingEntityPropertyMapper(): EntityPropertyMapperInterface
	{
		return new EntityPropertyMapper( SettingEntity::class, new SettingEntityPropertyMappings() );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The subway rails mapper entity class to reflect does not exist.
	 */
	public function buildSubwayRailsMapperEntityPropertyMapper(): EntityPropertyMapperInterface
	{
		return new EntityPropertyMapper( SubwayRailsMapperEntity::class, new SubwayRailsMapperEntityPropertyMappings() );
	}
}
