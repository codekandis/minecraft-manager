<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\EntityPropertyMappings;

use CodeKandis\Converters\BiDirectionalConverters\IntToStringBiDirectionalConverter;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapping;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMappingExistsException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\AbstractUserBasedEntityPropertyMappings;

/**
 * Represents the entity property mappings of the station positions entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class StationPositionsPersistableEntityPropertyMappings extends AbstractUserBasedEntityPropertyMappings
{
	/**
	 * Constructor method.
	 * @throws EntityPropertyMappingExistsException An entity property mapping with a specific property name already exists.
	 */
	public function __construct()
	{
		parent::__construct(
			new EntityPropertyMapping( 'orientation', null ),
			new EntityPropertyMapping( 'structureBlockPositionX', new IntToStringBiDirectionalConverter() ),
			new EntityPropertyMapping( 'structureBlockPositionY', new IntToStringBiDirectionalConverter() ),
			new EntityPropertyMapping( 'structureBlockPositionZ', new IntToStringBiDirectionalConverter() )
		);
	}
}
