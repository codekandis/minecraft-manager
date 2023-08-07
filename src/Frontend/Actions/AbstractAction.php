<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Actions;

use CodeKandis\MinecraftManager\Configurations\ConfigurationRegistry;
use CodeKandis\Persistence\Connector;
use CodeKandis\Persistence\ConnectorInterface;
use CodeKandis\Tiphy\Actions\AbstractAction as OriginAbstractAction;

/**
 * Represents the base class of all actions.
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
				   ConfigurationRegistry
					   ::_()
					   ->getPersistenceConfiguration()
			   );
	}
}
