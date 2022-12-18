<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriBuilders;

/**
 * Represents the interface of any API URI builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface ApiUriBuilderInterface
{
	/**
	 * Builds the URI of the settings.
	 * @return string The URI of the settings.
	 */
	public function buildSettingsUri(): string;

	/**
	 * Builds the URI of the setting.
	 * @return string The URI of the setting.
	 */
	public function buildSettingUri(): string;
}
