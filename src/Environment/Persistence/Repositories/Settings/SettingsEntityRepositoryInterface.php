<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\Settings;

use CodeKandis\MinecraftManager\Environment\Entities\Settings\SettingsEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\Persistence\Repositories\RepositoryInterface;

/**
 * Represents the interface of any repository of the settings entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface SettingsEntityRepositoryInterface extends RepositoryInterface
{
	/**
	 * Reads a settings by a specific user ID.
	 * @param SettingsEntityInterface $settingsWithRecordId The settings with the settingusers' record ID.
	 * @return SettingsEntityInterface The read settings.
	 */
	public function readByRecordId( SettingsEntityInterface $settingsWithRecordId ): ?SettingsEntityInterface;

	/**
	 * Reads a settings by a specific user ID.
	 * @param UserEntityInterface $userWithUserId The user with the users' ID.
	 * @return SettingsEntityInterface The read settings.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?SettingsEntityInterface;

	/**
	 * Creates a settings by a specific user ID.
	 * @param SettingsEntityInterface $settings The settings to create.
	 * @param UserEntityInterface $userWithUserId The user with the users' ID.
	 */
	public function createByUserId( SettingsEntityInterface $settings, UserEntityInterface $userWithUserId ): SettingsEntityInterface;

	/**
	 * Updates a settings by a specific record ID.
	 * @param SettingsEntityInterface $settings The settings to update.
	 * @param SettingsEntityInterface $settingsWithRecordId The settings with the settings' record ID.
	 */
	public function updateByRecordId( SettingsEntityInterface $settings, SettingsEntityInterface $settingsWithRecordId ): SettingsEntityInterface;
}
