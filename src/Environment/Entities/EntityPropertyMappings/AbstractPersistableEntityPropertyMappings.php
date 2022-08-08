<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings;

use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMapping;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMappingExistsException;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMappingInterface;
use CodeKandis\Entities\EntityPropertyMappings\EntityPropertyMappings;

/**
 * Represents the base class of any persistable entity property mappings.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class AbstractPersistableEntityPropertyMappings extends EntityPropertyMappings
{
	/**
	 * Constructor method.
	 * @param EntityPropertyMappingInterface ...$entityPropertyMappings The additional entity property mappings.
	 * @throws EntityPropertyMappingExistsException An entity property mapping with a specific property name already exists.
	 */
	public function __construct( EntityPropertyMappingInterface ...$entityPropertyMappings )
	{
		parent::__construct(
			new EntityPropertyMapping( 'id', null ),
			...$entityPropertyMappings
		);
	}
}
