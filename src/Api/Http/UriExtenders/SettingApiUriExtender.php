<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriExtenders;

use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilderInterface;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntityInterface;

/**
 * Represents an API URI extender of any setting.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingApiUriExtender extends AbstractApiUriExtender
{
	/**
	 * Stores the setting to extend its URIs.
	 * @var SettingEntityInterface
	 */
	private SettingEntityInterface $setting;

	/**
	 * Constructor method.
	 * @param ApiUriBuilderInterface $apiUriBuilder The API URI builder the API URI extender depends on.
	 * @param SettingEntityInterface $setting The setting to extend its URIs.
	 */
	public function __construct( ApiUriBuilderInterface $apiUriBuilder, SettingEntityInterface $setting )
	{
		parent::__construct( $apiUriBuilder );

		$this->setting = $setting;
	}

	/**
	 * {@inheritDoc}
	 */
	public function extend(): void
	{
		$this->addCanonicalUri();
	}

	/**
	 * Adds the canonical URI of the setting.
	 */
	private function addCanonicalUri(): void
	{
		$this->setting->setCanonicalUri(
			$this->apiUriBuilder->buildSettingUri()
		);
	}
}
