<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Enumerations;

/**
 * Represents an enumeration of orientations.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class Orientations
{
	/**
	 * Represents the orientation `north`.
	 * @var string
	 */
	public const NORTH = 'NORTH';

	/**
	 * Represents the orientation `east`.
	 * @var string
	 */
	public const EAST = 'EAST';

	/**
	 * Represents the orientation `south`.
	 * @var string
	 */
	public const SOUTH = 'SOUTH';

	/**
	 * Represents the orientation `west`.
	 * @var string
	 */
	public const WEST = 'WEST';
}
