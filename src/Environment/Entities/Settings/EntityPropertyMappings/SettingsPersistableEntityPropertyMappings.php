<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\Settings\EntityPropertyMappings;

use CodeKandis\Converters\BiDirectionalConverters\IntToStringBiDirectionalConverter;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapping;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMappingExistsException;
use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\AbstractPersistableEntityPropertyMappings;

/**
 * Represents the entity property mappings of the settings entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingsPersistableEntityPropertyMappings extends AbstractPersistableEntityPropertyMappings
{
	/**
	 * Constructor method.
	 * @throws EntityPropertyMappingExistsException An entity property mapping with a specific property name already exists.
	 */
	public function __construct()
	{
		parent::__construct(
			new EntityPropertyMapping( 'userId', null ),
			new EntityPropertyMapping( 'chunksize', new IntToStringBiDirectionalConverter() )
		);
	}
}
