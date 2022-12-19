<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Errors;

/**
 * Represents an enumeration of error codes of setting errors.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class SettingErrorCodes
{
	/**
	 * Represents an error if a setting does not exist.
	 * @var int
	 */
	public const SETTING_UNKNOWN = 10001;
}
