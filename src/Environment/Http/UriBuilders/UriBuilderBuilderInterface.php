<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Http\UriBuilders;

use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilderInterface;
use CodeKandis\MinecraftManager\Frontend\Http\UriBuilders\FrontendUriBuilderInterface;

/**
 * Represents the interface of any URI builder builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface UriBuilderBuilderInterface
{
	/**
	 * Builds an API URI builder.
	 * @return ApiUriBuilderInterface The API URI builder.
	 */
	public function buildApiUriBuilder(): ApiUriBuilderInterface;

	/**
	 * Builds a frontend URI builder.
	 * @return FrontendUriBuilderInterface The frontend URI builder.
	 */
	public function buildFrontendUriBuilder(): FrontendUriBuilderInterface;
}
