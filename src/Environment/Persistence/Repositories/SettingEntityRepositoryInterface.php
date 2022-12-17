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
	 * @param UserEntityInterface $user The user with the ID.
	 * @return SettingEntityInterface The read setting.
	 */
	public function readSettingByUserId( UserEntityInterface $user ): ?SettingEntityInterface;

	/**
	 * Creates or updates a setting by a specific user ID.
	 * @param SettingEntityInterface $setting The setting to create or update.
	 * @param UserEntityInterface $user The user with the ID.
	 */
	public function createOrUpdateByUserId( SettingEntityInterface $setting, UserEntityInterface $user ): void;
}
