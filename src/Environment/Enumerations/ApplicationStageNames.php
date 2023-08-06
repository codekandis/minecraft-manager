<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Enumerations;

/**
 * Represents an enumeration of application stage names.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class ApplicationStageNames
{
	/**
	 * Represents the application stage name `api`.
	 * @var string
	 */
	public const API = 'api';

	/**
	 * Represents the application stage name `frontend`.
	 * @var string
	 */
	public const FRONTEND = 'frontend';
}
