<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Actions\Get;

use CodeKandis\Authentication\CommonSessionAuthenticator;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Http\UriBuilders\UriBuilderBuilder;
use CodeKandis\Session\SessionHandler;
use CodeKandis\Tiphy\Actions\AbstractAction;
use CodeKandis\Tiphy\Http\Responses\RedirectResponder;
use CodeKandis\Tiphy\Http\Responses\StatusCodes;

/**
 * Represents the action to sign out a user.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SignoutAction extends AbstractAction
{
	/**
	 * @inheritDoc
	 */
	public function execute(): void
	{
		$configurationRegistry = ConfigurationRegistry::_();

		$sessionsConfiguration = $configurationRegistry->getSessionsConfiguration();
		$sessionHandler        = new SessionHandler( $sessionsConfiguration );

		$sessionAuthenticatorConfiguration = $configurationRegistry->getSessionAuthenticatorConfiguration();
		( new CommonSessionAuthenticator( $sessionAuthenticatorConfiguration, $sessionHandler ) )
			->revokePermission();

		$uriBuilderConfiguration = $configurationRegistry->getUriBuilderConfiguration();
		$uriBuilder              = ( new UriBuilderBuilder( $uriBuilderConfiguration ) )
			->buildFrontendUriBuilder();
		$indexUri                = $uriBuilder->buildIndexUri();

		( new RedirectResponder( $indexUri, StatusCodes::FOUND ) )
			->respond();
	}
}
