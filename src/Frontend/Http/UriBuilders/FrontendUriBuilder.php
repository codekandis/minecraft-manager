<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Http\UriBuilders;

use CodeKandis\MinecraftManager\Environment\Enumerations\UriNames;
use CodeKandis\Tiphy\Http\UriBuilders\AbstractUriBuilder;

/**
 * Represents a frontend URI builder.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class FrontendUriBuilder extends AbstractUriBuilder implements FrontendUriBuilderInterface
{
	/**
	 * {@inheritDoc}
	 */
	public function buildIndexUri(): string
	{
		return $this->build( UriNames::INDEX );
	}

	/**
	 * {@inheritDoc}
	 */
	public function buildSignoutUri(): string
	{
		return $this->build( UriNames::SIGNOUT );
	}
}
