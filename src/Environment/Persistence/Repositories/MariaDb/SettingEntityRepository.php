<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Environment\Persistence\Repositories\MariaDb;

use CodeKandis\MinecraftManager\Environment\Entities\EntityPropertyMappings\EntityPropertyMapperBuilder;
use CodeKandis\MinecraftManager\Environment\Entities\SettingEntityInterface;
use CodeKandis\MinecraftManager\Environment\Entities\UserEntityInterface;
use CodeKandis\MinecraftManager\Environment\Persistence\Repositories\SettingEntityRepositoryInterface;
use CodeKandis\Persistence\FetchingResultFailedException;
use CodeKandis\Persistence\Repositories\AbstractRepository;
use CodeKandis\Persistence\SettingFetchModeFailedException;
use CodeKandis\Persistence\StatementExecutionFailedException;
use CodeKandis\Persistence\StatementPreparationFailedException;
use CodeKandis\Persistence\TransactionCommitFailedException;
use CodeKandis\Persistence\TransactionRollbackFailedException;
use CodeKandis\Persistence\TransactionStartFailedException;
use ReflectionException;

/**
 * Represents a MariaDB repository of the setting entity.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SettingEntityRepository extends AbstractRepository implements SettingEntityRepositoryInterface
{
	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws TransactionStartFailedException The transaction failed to start.
	 * @throws TransactionRollbackFailedException The transaction failed to roll back.
	 * @throws TransactionCommitFailedException The transaction failed to commit.
	 * @throws StatementPreparationFailedException The preparation of the statement failed.
	 * @throws StatementExecutionFailedException The execution of the statement failed.
	 * @throws SettingFetchModeFailedException The setting of the fetch mode of the statement failed.
	 * @throws FetchingResultFailedException The fetching of the statement result failed.
	 */
	public function readSettingByUserId( UserEntityInterface $user ): ?SettingEntityInterface
	{
		$query = <<< END
			SELECT
				`settings`.`id`,
				`settings`.`userId`,
				`settings`.`chunksize`
			FROM
				`settings`
			WHERE
				`settings`.`userId` = :userId
			LIMIT
				0, 1;
		END;

		$userEntityPropertyMapper    = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();
		$mappedUser                  = $userEntityPropertyMapper->mapToArray( $user );
		$settingEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingEntityPropertyMapper();

		$arguments = [
			'userId' => $mappedUser[ 'userId' ]
		];

		return $this->persistenceConnector->queryFirst( $query, $arguments, $settingEntityPropertyMapper );
	}

	/**
	 * {@inheritDoc}
	 * @throws ReflectionException The setting entity class to reflect does not exist.
	 * @throws ReflectionException The user entity class to reflect does not exist.
	 */
	public function createOrUpdateByUserId( SettingEntityInterface $setting, UserEntityInterface $user ): void
	{
		$query = <<< END
			INSERT INTO
				`settings`
				( `id`, `userId`, `chunkSize` )
			VALUES
			    ( UUID(), :userId, :chunksize )
			ON DUPLICATE KEY UPDATE
				`settings`.`chunksize` = :chunksize;
		END;

		$settingEntityPropertyMapper = ( new EntityPropertyMapperBuilder() )
			->buildSettingEntityPropertyMapper();
		$userEntityPropertyMapper    = ( new EntityPropertyMapperBuilder() )
			->buildUserEntityPropertyMapper();

		$mappedSetting = $settingEntityPropertyMapper->mapToArray( $setting );
		$mappedUser    = $userEntityPropertyMapper->mapToArray( $user );

		$arguments = [
			'userId'    => $mappedUser[ 'userId' ],
			'chunksize' => $mappedSetting[ 'chunksize' ]
		];

		$this->persistenceConnector->execute( $query, $arguments );
	}
}
