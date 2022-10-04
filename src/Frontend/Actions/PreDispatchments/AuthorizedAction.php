<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Actions\PreDispatchments;

use CodeKandis\Tiphy\Http\Responses\RedirectResponder;
use CodeKandis\Tiphy\Http\Responses\StatusCodes;

/**
 * Represents the default action if the client is authorized.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class AuthorizedAction extends AbstractAuthorizationAction
{
	/**
	 * {@inheritDoc}
	 */
	public function execute(): void
	{
		( new RedirectResponder( $this->redirectUri, StatusCodes::SEE_OTHER ) )
			->respond();
	}
}
