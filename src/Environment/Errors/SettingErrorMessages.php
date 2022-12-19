<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Errors;

/**
 * Represents an enumeration of error messages of setting errors.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class SettingErrorMessages
{
	/**
	 * Represents an error if a setting does not exist.
	 * @var string
	 */
	public const SETTING_UNKNOWN = 'The requested setting does not exist.';
}
