<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Entities;

/**
 * Represents the interface of any user entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
interface UserEntityInterface extends PersistableEntityInterface
{
	/**
	 * Gets whether the user is active or not.
	 * @return bool True if the user is active, otherwise false.
	 */
	public function getIsActive(): bool;

	/**
	 * Sets whether the user is active or not.
	 * @param bool $isActive True if the user is active, otherwise false.
	 */
	public function setIsActive( bool $isActive ): void;

	/**
	 * Gets the name.
	 * @return string The name.
	 */
	public function getName(): string;

	/**
	 * Sets the name.
	 * @param string $name The name.
	 */
	public function setName( string $name ): void;

	/**
	 * Gets the e-mail.
	 * @return string The e-mail.
	 */
	public function getEMail(): string;

	/**
	 * Sets the e-mail.
	 * @param string $eMail The e-mail.
	 */
	public function setEMail( string $eMail ): void;

	/**
	 * Gets the password.
	 * @return string The password.
	 */
	public function getPassword(): string;

	/**
	 * Sets the password.
	 * @param string $password The password.
	 */
	public function setPassword( string $password ): void;
}
