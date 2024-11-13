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
	 * Builds the entity property mapper of the settings settings entity.
	 * @return EntityPropertyMapperInterface The entity property mapper of the settings settings entity.
	 */
	public function buildSettingsSettingsEntityPropertyMapper(): EntityPropertyMapperInterface;

	/**
	 * Builds the entity property mapper of the subway rails mapper lantern positions entity.
	 * @return EntityPropertyMapperInterface The entity property mapper of the subway rails mapper lantern positions entity.
	 */
	public function buildSubwayRailsMapperLanternPositionsEntityPropertyMapper(): EntityPropertyMapperInterface;

	/**
	 * Builds the entity property mapper of the subway station mapper station positions entity.
	 * @return EntityPropertyMapperInterface The entity property mapper of the subway station mapper station positions entity.
	 */
	public function buildSubwayStationMapperStationPositionsEntityPropertyMapper(): EntityPropertyMapperInterface;
}
