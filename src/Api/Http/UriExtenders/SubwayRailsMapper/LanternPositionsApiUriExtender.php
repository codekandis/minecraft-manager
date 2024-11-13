<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriExtenders\SubwayRailsMapper;

use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilderInterface;
use CodeKandis\MinecraftManager\Api\Http\UriExtenders\AbstractApiUriExtender;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapper\LanternPositionsEntityInterface;

/**
 * Represents an API URI extender of any lantern positions.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class LanternPositionsApiUriExtender extends AbstractApiUriExtender
{
	/**
	 * Stores the lantern positions to extend its URIs.
	 * @var LanternPositionsEntityInterface
	 */
	private LanternPositionsEntityInterface $lanternPositions;

	/**
	 * Constructor method.
	 * @param ApiUriBuilderInterface $apiUriBuilder The API URI builder the API URI extender depends on.
	 * @param LanternPositionsEntityInterface $lanternPositions The lantern positions to extend its URIs.
	 */
	public function __construct( ApiUriBuilderInterface $apiUriBuilder, LanternPositionsEntityInterface $lanternPositions )
	{
		parent::__construct( $apiUriBuilder );

		$this->lanternPositions = $lanternPositions;
	}

	/**
	 * @inheritDoc
	 */
	public function extend(): void
	{
		$this->addCanonicalUri();
	}

	/**
	 * Adds the canonical URI of the lantern positions.
	 */
	private function addCanonicalUri(): void
	{
		$this->lanternPositions->setCanonicalUri(
			$this->apiUriBuilder->buildSubwayRailsMapperLanternPositionsUri()
		);
	}
}
