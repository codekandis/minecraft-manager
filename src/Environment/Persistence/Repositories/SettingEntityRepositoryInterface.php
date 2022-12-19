<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories;

use CodeKandis\MinecraftManager\Environment\Entities\SettingEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\Persistence\Repositories\RepositoryInterface;

/**
 * Represents the interface of any repository of the setting entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface SettingEntityRepositoryInterface extends RepositoryInterface
{
	/**
	 * Reads a setting by a specific user ID.
	 * @param SettingEntityInterface $settingWithRecordId The setting with the setting's record ID.
	 * @return SettingEntityInterface The read setting.
	 */
	public function readByRecordId( SettingEntityInterface $settingWithRecordId ): ?SettingEntityInterface;

	/**
	 * Reads a setting by a specific user ID.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 * @return SettingEntityInterface The read setting.
	 */
	public function readByUserId( UserEntityInterface $userWithUserId ): ?SettingEntityInterface;

	/**
	 * Creates a setting by a specific user ID.
	 * @param SettingEntityInterface $setting The setting to create.
	 * @param UserEntityInterface $userWithUserId The user with the user's ID.
	 */
	public function createByUserId( SettingEntityInterface $setting, UserEntityInterface $userWithUserId ): SettingEntityInterface;

	/**
	 * Updates a setting by a specific record ID.
	 * @param SettingEntityInterface $setting The setting to update.
	 * @param SettingEntityInterface $settingWithRecordId The setting with the setting's record ID.
	 */
	public function updateByRecordId( SettingEntityInterface $setting, SettingEntityInterface $settingWithRecordId ): SettingEntityInterface;
}
