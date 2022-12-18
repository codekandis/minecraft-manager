<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Actions;

use CodeKandis\Entities\EntityPropertyMappings\EntityDoesNotMatchClassNameException;
use CodeKandis\Entities\EntityPropertyMappings\PublicPropertyNotFoundException;
use CodeKandis\MinecraftManager\Configurations\FrontendConfigurationRegistry;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntity;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb\UserEntityRepository;
use CodeKandis\Persistence\Connector;
use CodeKandis\Persistence\ConnectorInterface;
use CodeKandis\Persistence\FetchingResultFailedException;
use CodeKandis\Persistence\SettingFetchModeFailedException;
use CodeKandis\Persistence\StatementExecutionFailedException;
use CodeKandis\Persistence\StatementPreparationFailedException;
use CodeKandis\Persistence\TransactionCommitFailedException;
use CodeKandis\Persistence\TransactionRollbackFailedException;
use CodeKandis\Persistence\TransactionStartFailedException;
use CodeKandis\Session\SessionHandler;
use CodeKandis\Tiphy\Actions\AbstractAction as OriginAbstractAction;
use ReflectionException;

/**
 * Represents the base class of any API action.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
abstract class AbstractAction extends OriginAbstractAction
{
	/**
	 * Stores the persistence connector of the action.
	 * @var ConnectorInterface
	 */
	private ConnectorInterface $persistenceConnector;

	/**
	 * Gets the persistence connector of the action.
	 * @return ConnectorInterface The persistence connector of the action.
	 */
	protected function getPersistenceConnector(): ConnectorInterface
	{
		return $this->persistenceConnector ??
			   $this->persistenceConnector = new Connector(
				   FrontendConfigurationRegistry
					   ::_()
					   ->getPersistenceConfiguration()
			   );
	}

	/**
	 * Gets the current authenticated user.
	 * @return ?UserEntityInterface The current authenticated user.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 * @throws EntityDoesNotMatchClassNameException The user entity does not match the entity class name of the entity property mapper.
	 * @throws PublicPropertyNotFoundException A public property does not exist in the user entity class.
	 * @throws ReflectionException An error occurred during the creation of the user entity.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statment result failed.
	 */
	protected function getAuthenticatedUser(): ?UserEntityInterface
	{
		$registeredClientSessionKey = FrontendConfigurationRegistry
			::_()
			->getSessionAuthenticatorConfiguration()
			->getRegisteredClientSessionKey();

		$sessionHandler = new SessionHandler(
			FrontendConfigurationRegistry::_()->getSessionsConfiguration()
		);
		$sessionHandler->start();
		$registeredClient = $sessionHandler->get( $registeredClientSessionKey );
		$sessionHandler->writeClose();

		return ( new UserEntityRepository(
			$this->getPersistenceConnector()
		) )
			->readUserByEMail(
				UserEntity::fromArray(
					[
						'eMail' => $registeredClient->getId()
					]
				)
			);
	}
}
