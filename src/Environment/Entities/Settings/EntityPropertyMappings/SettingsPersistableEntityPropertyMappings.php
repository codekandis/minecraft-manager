<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\Settings\EntityPropertyMappings;

use CodeKandis\Converters\BiDirectionalConverters\IntToStringBiDirectionalConverter;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapping;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMappingInterface;
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
	 */
	public function __construct( EntityPropertyMappingInterface ...$entityPropertyMappings )
	{
		parent::__construct(
			new EntityPropertyMapping( 'userId', null ),
			new EntityPropertyMapping( 'chunksize', new IntToStringBiDirectionalConverter() ),
			...$entityPropertyMappings
		);
	}
}
