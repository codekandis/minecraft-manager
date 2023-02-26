<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriExtenders\Settings;

use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilderInterface;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\AbstractApiUriExtender;
use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntityInterface;

/**
 * Represents an API URI extender of any settings.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingsApiUriExtender extends AbstractApiUriExtender
{
	/**
	 * Stores the settings to extend its URIs.
	 * @var SettingsEntityInterface
	 */
	private SettingsEntityInterface $settings;

	/**
	 * Constructor method.
	 * @param ApiUriBuilderInterface $apiUriBuilder The API URI builder the API URI extender depends on.
	 * @param SettingsEntityInterface $settings The settings to extend its URIs.
	 */
	public function __construct( ApiUriBuilderInterface $apiUriBuilder, SettingsEntityInterface $settings )
	{
		parent::__construct( $apiUriBuilder );

		$this->settings = $settings;
	}

	/**
	 * {@inheritDoc}
	 */
	public function extend(): void
	{
		$this->addCanonicalUri();
	}

	/**
	 * Adds the canonical URI of the settings.
	 */
	private function addCanonicalUri(): void
	{
		$this->settings->setCanonicalUri(
			$this->apiUriBuilder->buildSettingsSettingsUri()
		);
	}
}
