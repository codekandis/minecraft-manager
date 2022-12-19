<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings;

use CodeKandis\Converters\BiDirectionalConverters\IntToStringBiDirectionalConverter;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapping;

/**
 * Represents the entity property mappings of the subway rails mapper entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SubwayRailsMapperEntityPropertyMappings extends AbstractPersistableEntityPropertyMappings
{
	/**
	 * Constructor method.
	 */
	public function __construct()
	{
		parent::__construct(
			new EntityPropertyMapping( 'userId', null ),
			new EntityPropertyMapping( 'startPositionX', new IntToStringBiDirectionalConverter() ),
			new EntityPropertyMapping( 'startPositionY', new IntToStringBiDirectionalConverter() ),
			new EntityPropertyMapping( 'startPositionZ', new IntToStringBiDirectionalConverter() )
		);
	}
}
