<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Api\Http\UriExtenders;

use CodeKandis\MinecraftManager\Api\Http\UriBuilders\ApiUriBuilderInterface;
use CodeKandis\MinecraftManager\Environment\Entities\SubwayRailsMapperEntityInterface;

/**
 * Represents an API URI extender of any subwayRailsMapper.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class SubwayRailsMapperApiUriExtender extends AbstractApiUriExtender
{
	/**
	 * Stores the subwayRailsMapper to extend its URIs.
	 * @var SubwayRailsMapperEntityInterface
	 */
	private SubwayRailsMapperEntityInterface $subwayRailsMapper;

	/**
	 * Constructor method.
	 * @param ApiUriBuilderInterface $apiUriBuilder The API URI builder the API URI extender depends on.
	 * @param SubwayRailsMapperEntityInterface $subwayRailsMapper The subwayRailsMapper to extend its URIs.
	 */
	public function __construct( ApiUriBuilderInterface $apiUriBuilder, SubwayRailsMapperEntityInterface $subwayRailsMapper )
	{
		parent::__construct( $apiUriBuilder );

		$this->subwayRailsMapper = $subwayRailsMapper;
	}

	/**
	 * {@inheritDoc}
	 */
	public function extend(): void
	{
		$this->addCanonicalUri();
	}

	/**
	 * Adds the canonical URI of the subwayRailsMapper.
	 */
	private function addCanonicalUri(): void
	{
		$this->subwayRailsMapper->setCanonicalUri(
			$this->apiUriBuilder->buildSubwayRailsMapperUri()
		);
	}
}
