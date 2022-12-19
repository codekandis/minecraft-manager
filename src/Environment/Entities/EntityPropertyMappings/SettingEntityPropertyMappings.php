<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings;

use CodeKandis\Converters\BiDirectionalConverters\IntToStringBiDirectionalConverter;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapping;

/**
 * Represents the entity property mappings of the setting entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingEntityPropertyMappings extends AbstractPersistableEntityPropertyMappings
{
	/**
	 * Constructor method.
	 */
	public function __construct()
	{
		parent::__construct(
			new EntityPropertyMapping( 'userId', null ),
			new EntityPropertyMapping( 'chunksize', new IntToStringBiDirectionalConverter() )
		);
	}
}
