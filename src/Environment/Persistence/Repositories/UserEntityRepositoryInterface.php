<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories;

use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;

/**
 * Represents the interface of any repository for the user entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface UserEntityRepositoryInterface
{
	/**
	 * Reads a user by its e-mail.
	 * @return UserEntityInterface The read user.
	 */
	public function readUserByEMail( UserEntityInterface $user ): ?UserEntityInterface;
}
