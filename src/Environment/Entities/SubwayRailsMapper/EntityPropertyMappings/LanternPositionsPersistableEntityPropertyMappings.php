<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\EntityPropertyMappings;

use CodeKandis\Converters\BiDirectionalConverters\IntToStringBiDirectionalConverter;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapping;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMappingExistsException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\AbstractUserBasedEntityPropertyMappings;

/**
 * Represents the entity property mappings of the lantern positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class LanternPositionsPersistableEntityPropertyMappings extends AbstractUserBasedEntityPropertyMappings
{
	/**
	 * Constructor method.
	 * @throws EntityPropertyMappingExistsException An entity property mapping with a specific property name already exists.
	 */
	public function __construct()
	{
		parent::__construct(
			new EntityPropertyMapping( 'startPositionX', new IntToStringBiDirectionalConverter() ),
			new EntityPropertyMapping( 'startPositionY', new IntToStringBiDirectionalConverter() ),
			new EntityPropertyMapping( 'startPositionZ', new IntToStringBiDirectionalConverter() )
		);
	}
}
