<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Actions\PreDispatchments;

use CodeKandis\Authentication\CommonClientCredentials;
use CodeKandis\Authentication\CommonSessionAuthenticator;
use CodeKandis\Authentication\RegisteredCommonClient;
use CodeKandis\Authentication\RegisteredCommonClientInterface;
use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntity;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb\UserEntityRepository;
use CodeKandis\Persistence\Connector;
use CodeKandis\Persistence\FetchingResultFailedException;
use CodeKandis\Persistence\SettingFetchModeFailedException;
use CodeKandis\Persistence\StatementExecutionFailedException;
use CodeKandis\Persistence\StatementPreparationFailedException;
use CodeKandis\Persistence\TransactionCommitFailedException;
use CodeKandis\Persistence\TransactionRollbackFailedException;
use CodeKandis\Persistence\TransactionStartFailedException;
use CodeKandis\Session\SessionHandler;
use CodeKandis\Session\SessionHandlerInterface;
use CodeKandis\Tiphy\Actions\PreDispatchment\PreDispatcherInterface;
use CodeKandis\Tiphy\Actions\PreDispatchment\PreDispatchmentStateInterface;
use ReflectionException;
use function array_key_exists;

/**
 * Represents an authentication pre-distpatcher.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class AuthenticationPreDispatcher implements PreDispatcherInterface
{
	/**
	 * Gets the registered clients matching a specific e-mail.
	 * @param string $id The id of the registered client.
	 * @return RegisteredCommonClientInterface[] The registered common clients.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	private function getRegisteredClients( string $id ): array
	{
		$persistenceConnector = ( new Connector(
			ConfigurationRegistry
				::_()
				->getPersistenceConfiguration()
		) );

		$registeredUser = $persistenceConnector->asTransaction(
			function () use ( $persistenceConnector, $id )
			{
				return ( new UserEntityRepository( $persistenceConnector ) )
					->readUserByEMail(
						UserEntity::fromArray(
							[
								'eMail' => $id
							]
						)
					);
			}
		);

		$registeredClients = [];
		if ( null !== $registeredUser )
		{
			$registeredClients[] = new RegisteredCommonClient( '', $registeredUser->getEMail(), $registeredUser->getPassword(), (int) $registeredUser->getIsActive() );
		}

		return $registeredClients;
	}

	/**
	 * Persists the authorized client in the session.
	 * @param SessionHandlerInterface $sessionHandler The session handler to store the registered client.
	 * @param string $registeredClientSessionKey The session key to use to store the registered client.
	 * @param RegisteredCommonClientInterface $authorizedClient The authorized client.
	 */
	private function persistAuthorizedClientInSession( SessionHandlerInterface $sessionHandler, string $registeredClientSessionKey, RegisteredCommonClientInterface $authorizedClient ): void
	{
		$sessionHandler->start();
		$sessionHandler->set(
			$registeredClientSessionKey,
			new RegisteredCommonClient(
				'',
				$authorizedClient->getId(),
				'',
				$authorizedClient->getPermission()
			)
		);
	}

	/**
	 * Responds with a `401 Unauthorized`.
	 * @param PreDispatchmentStateInterface $dispatchmentState The state of the pre-dispatchment.
	 * @param string $requestedUri The clients requested URI.
	 */
	private function respondUnauthorized( PreDispatchmentStateInterface $dispatchmentState, string $requestedUri ): void
	{
		$dispatchmentState->setPreventDispatchment( true );
		( new UnauthorizedAction( $requestedUri ) )
			->execute();
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
	 * @inheritDoc
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
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

		if ( false === array_key_exists( 'id', $_POST ) || false === array_key_exists( 'password', $_POST ) )
		{
			$this->respondUnauthorized( $dispatchmentState, $requestedUri );

			return;
		}

		$clientCredentials = new CommonClientCredentials( $_POST[ 'id' ], $_POST[ 'password' ] );
		$registeredClients = $this->getRegisteredClients( $clientCredentials->getId() );

		if ( false === $authenticator->requestPermission( $registeredClients, $clientCredentials ) )
		{
			$this->respondUnauthorized( $dispatchmentState, $requestedUri );

			return;
		}

		$this->persistAuthorizedClientInSession( $sessionHandler, $sessionAuthenticatorConfiguration->getRegisteredClientSessionKey(), $registeredClients[ 0 ] );
		$this->respondAuthorized( $dispatchmentState, $requestedUri );
	}
}
