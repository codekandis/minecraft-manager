<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings;

use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapper;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapperInterface;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\EntityPropertyMappings\SettingsPersistableEntityPropertyMappings;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntity;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\EntityPropertyMappings\LanternPositionsPersistableEntityPropertyMappings;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntity;
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
	 * @inheritDoc
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 */
	public function buildUserEntityPropertyMapper(): EntityPropertyMapperInterface
	{
		return new EntityPropertyMapper( UserEntity::class, new UserPersistableEntityPropertyMappings() );
	}

	/**
	 * @inheritDoc
	 * @throws ReflectionException The settings settings entity class to reflect does not exist.
	 */
	public function buildSettingsSettingsEntityPropertyMapper(): EntityPropertyMapperInterface
	{
		return new EntityPropertyMapper( SettingsEntity::class, new SettingsPersistableEntityPropertyMappings() );
	}

	/**
	 * @inheritDoc
	 * @throws ReflectionException The subway rails mapper lantern positions entity class to reflect does not exist.
	 */
	public function buildSubwayRailsMapperLanternPositionsEntityPropertyMapper(): EntityPropertyMapperInterface
	{
		return new EntityPropertyMapper( LanternPositionsEntity::class, new LanternPositionsPersistableEntityPropertyMappings() );
	}
}
