<?php declare( strict_types = 1 );
namespace CodeKandis\MinecraftManager\Frontend\Actions\Get;

use CodeKandis\MinecraftManager\Configurations\FrontendConfigurationRegistry;
use CodeKandis\MinecraftManager\Frontend\Actions\AbstractAction;
use CodeKandis\Tiphy\Http\Responses\HtmlTemplateResponder;
use CodeKandis\Tiphy\Http\Responses\StatusCodes;

/**
 * Represents the action to show the list of jobs.
 * @package codekandis/minecraft-manager
 * @author Christian Ramelow <info@codekandis.net>
 */
class IndexAction extends AbstractAction
{
	/**
	 * {@inheritDoc}
	 */
	public function execute(): void
	{
		( new HtmlTemplateResponder(
			FrontendConfigurationRegistry
				::_()
				->getTemplateRendererConfiguration(),
			StatusCodes::OK,
			[],
			null,
			'index.phtml'
		) )
			->respond();
	}
}
