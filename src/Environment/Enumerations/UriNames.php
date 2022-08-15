<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Enumerations;

/**
 * Represents an enumeration of URI names.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class UriNames
{
	/**
	 * Represents the URI name of the index.
	 * @var string
	 */
	public const INDEX = 'index';

	/**
	 * Represents the URI name of the signout.
	 * @var string
	 */
	public const SIGNOUT = 'signout';
}
