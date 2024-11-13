<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayStationMapper;

use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilderInterface;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\AbstractApiUriExtender;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayStationMapper\StationPositionsEntityInterface;

/**
 * Represents an API URI extender of any station positions.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class StationPositionsApiUriExtender extends AbstractApiUriExtender
{
	/**
	 * Stores the station positions to extend its URIs.
	 * @var StationPositionsEntityInterface
	 */
	private StationPositionsEntityInterface $stationPositions;

	/**
	 * Constructor method.
	 * @param ApiUriBuilderInterface $apiUriBuilder The API URI builder the API URI extender depends on.
	 * @param StationPositionsEntityInterface $stationPositions The station positions to extend its URIs.
	 */
	public function __construct( ApiUriBuilderInterface $apiUriBuilder, StationPositionsEntityInterface $stationPositions )
	{
		parent::__construct( $apiUriBuilder );

		$this->stationPositions = $stationPositions;
	}

	/**
	 * @inheritDoc
	 */
	public function extend(): void
	{
		$this->addCanonicalUri();
	}

	/**
	 * Adds the canonical URI of the station positions.
	 */
	private function addCanonicalUri(): void
	{
		$this->stationPositions->setCanonicalUri(
			$this->apiUriBuilder->buildSubwayStationMapperStationPositionsUri()
		);
	}
}
