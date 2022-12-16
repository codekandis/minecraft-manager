<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories;

use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\Persistence\Repositories\RepositoryInterface;

/**
 * Represents the interface of any repository of the user entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface UserEntityRepositoryInterface extends RepositoryInterface
{
	/**
	 * Reads a user by a specific e-mail.
	 * @param UserEntityInterface $userWithEMail The user with the user's e-mail.
	 * @return UserEntityInterface The read user.
	 */
	public function readUserByEMail( UserEntityInterface $userWithEMail ): ?UserEntityInterface;
}
