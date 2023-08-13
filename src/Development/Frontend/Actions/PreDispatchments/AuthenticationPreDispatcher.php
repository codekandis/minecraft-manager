<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Development\Frontend\Actions\PreDispatchments;

use CodeKandis\Authentication\CommonSessionAuthenticator;
use CodeKandis\Authentication\Permission;
use CodeKandis\Authentication\RegisteredCommonClient;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Frontend\Actions\PreDispatchments\AuthorizedAction;
use CodeKandis\Session\SessionHandler;
use CodeKandis\Session\SessionHandlerInterface;
use CodeKandis\Tiphy\Actions\PreDispatchment\PreDispatcherInterface;
use CodeKandis\Tiphy\Actions\PreDispatchment\PreDispatchmentStateInterface;

/**
 * Represents an authentication pre-distpatcher for development purposes.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class AuthenticationPreDispatcher implements PreDispatcherInterface
{
	/**
	 * Represents the ID of the authorized development client.
	 * @var string
	 */
	protected const AUTHORIZED_DEVELOPMENT_CLIENT_ID = 'developer';

	/**
	 * Persists the authorized client in the session.
	 * @param SessionHandlerInterface $sessionHandler The session handler to store the registered client.
	 * @param string $registeredClientSessionKey The session key to use to store the registered client.
	 */
	private function persistAuthorizedClientInSession( SessionHandlerInterface $sessionHandler, string $registeredClientSessionKey ): void
	{
		$sessionHandler->start();
		$sessionHandler->set(
			$registeredClientSessionKey,
			new RegisteredCommonClient(
				'',
				static::AUTHORIZED_DEVELOPMENT_CLIENT_ID,
				'',
				Permission::GRANTED
			)
		);
	}

	/**
	 * Redirects to the requested URI.
	 * @param PreDispatchmentStateInterface $dispatchmentState The state of the pre-dispatchment.
	 * @param string $redirectUri The clients requested URI.
	 */
	private function respondAuthorized( PreDispatchmentStateInterface $dispatchmentState, string $redirectUri ): void
	{
		$dispatchmentState->setPreventDispatchment( true );
		( new AuthorizedAction( $redirectUri ) )
			->execute();
	}

	/**
	 * {@inheritDoc}
	 */
	public function preDispatch( string $requestedUri, PreDispatchmentStateInterface $dispatchmentState ): void
	{
		$sessionHandler = new SessionHandler(
			ConfigurationRegistry
				::_()
				->getSessionsConfiguration()
		);

		$sessionAuthenticatorConfiguration = ConfigurationRegistry
			::_()
			->getSessionAuthenticatorConfiguration();

		$authenticator = new CommonSessionAuthenticator( $sessionAuthenticatorConfiguration, $sessionHandler );

		if ( true === $authenticator->isClientGranted() )
		{
			return;
		}

		$this->persistAuthorizedClientInSession( $sessionHandler, $sessionAuthenticatorConfiguration->getRegisteredClientSessionKey() );
		$this->respondAuthorized( $dispatchmentState, $requestedUri );
	}
}
