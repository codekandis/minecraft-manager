<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Http\UriBuilders;

use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilder;
use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilderInterface;
use CodeKandis\MinecraftManager\Environment\Enumerations\ApplicationStageNames;
use CodeKandis\MinecraftManager\Frontend\Http\UriBuilders\FrontendUriBuilder;
use CodeKandis\MinecraftManager\Frontend\Http\UriBuilders\FrontendUriBuilderInterface;
use CodeKandis\Tiphy\Http\UriBuilders\AbstractUriBuilderBuilder;

/**
 * Represents a URI builder builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class UriBuilderBuilder extends AbstractUriBuilderBuilder implements UriBuilderBuilderInterface
{
	/**
	 * {@inheritDoc}
	 */
	public function buildApiUriBuilder(): ApiUriBuilderInterface
	{
		return new ApiUriBuilder(
			$this->uriBuilderConfiguration->getPreset( ApplicationStageNames::API )
		);
	}

	/**
	 * {@inheritDoc}
	 */
	public function buildFrontendUriBuilder(): FrontendUriBuilderInterface
	{
		return new FrontendUriBuilder(
			$this->uriBuilderConfiguration->getPreset( ApplicationStageNames::FRONTEND )
		);
	}
}
