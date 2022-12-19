<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Configurations;

use CodeKandis\Tiphy\Configurations\ConfigurationRegistryInterface;
use CodeKandis\Tiphy\Configurations\UriBuilderConfigurationInterface;
use CodeKandis\TiphyAuthenticationIntegration\Configurations\SessionAuthenticatorConfigurationRegistryInterface as SessionAuthenticatorConfigurationRegistryInterface;
use CodeKandis\TiphyPersistenceIntegration\Configurations\ConfigurationRegistryInterface as PersistenceConfigurationRegistryInterface;
use CodeKandis\TiphySentryClientIntegration\Configurations\ConfigurationRegistryInterface as SentryClientConfigurationRegistryInterface;
use CodeKandis\TiphySessionIntegration\Configurations\ConfigurationRegistryInterface as SessionConfigurationRegistryInterface;

/**
 * Represents the interface of any frontend configuration registry.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface FrontendConfigurationRegistryInterface extends ConfigurationRegistryInterface, PersistenceConfigurationRegistryInterface, SentryClientConfigurationRegistryInterface, SessionAuthenticatorConfigurationRegistryInterface, SessionConfigurationRegistryInterface
{
	/**
	 * Gets the API URI builder configuration.
	 * @return ?UriBuilderConfigurationInterface The API URI builder configuration.
	 */
	public function getApiUriBuilderConfiguration(): ?UriBuilderConfigurationInterface;
}
