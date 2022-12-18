<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Http\UriBuilders;

use CodeKandis\MinecraftManager\Frontend\Http\FrontendUriNames;
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
		return $this->build( FrontendUriNames::INDEX );
	}

	/**
	 * {@inheritDoc}
	 */
	public function buildSignoutUri(): string
	{
		return $this->build( FrontendUriNames::SIGNOUT );
	}
}
