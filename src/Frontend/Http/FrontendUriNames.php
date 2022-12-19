<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Http;

/**
 * Represents an enumeration of frontend URI names.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class FrontendUriNames
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
