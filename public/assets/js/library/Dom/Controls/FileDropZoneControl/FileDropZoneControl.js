'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { Abstract } from '../../../Types/Abstract.js';
import { BooleanString } from '../../../Types/BooleanString.js';
import { EventManager } from '../../../Types/EventManager.js';
import { DomHelper } from '../../DomHelper.js';
import { FileEventArguments } from './FileEventArguments.js';
import { InvalidFileSelectedEvent } from './InvalidFileSelectedEvent.js';
import { MultipleFileRejectedEvent } from './MultipleFileRejectedEvent.js';
import { ValidFileSelectedEvent } from './ValidFileSelectedEvent.js';

/**
 * Represents a file drop zone control to drop or select files.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileDropZoneControl extends Abstract
{
	/**
	 * Stores the drop zone.
	 * @type {HTMLElement}
	 */
	#_dropZone;

	/**
	 * Stores the multiple files dropped on or selected with the file drop zone while multiple files are disallowed.
	 * @type {Collection<File>}
	 */
	#_rejectedMultipleFiles = new Collection();

	/**
	 * Stores the invalid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	#_invalidSelectedFiles = new Collection();

	/**
	 * Stores the valid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	#_validSelectedFiles = new Collection();

	/**
	 * Stores the accepted file and types. If empty any file is accepted.
	 * @type {Array<String>}
	 */
	#_acceptedFileTypes;

	/**
	 * Stores true if multiple files can be dropped or selected, otherwise false.
	 * @type {Boolean}
	 */
	#_isMultipleFile;

	/**
	 * Stores the file selection dialog.
	 * @type {HTMLInputElement}
	 */
	#_fileSelectionDialog = null;

	/**
	 * Constructor method.
	 * @param {HTMLElement} dropZone The drop zone of the control.
	 */
	constructor( dropZone )
	{
		super();

		this.#_dropZone = dropZone;

		this.#initialize();
	}

	/**
	 * Gets the wrapped drop zone.
	 * @returns {HTMLElement} The wrapped drop zone.
	 */
	get dropZone()
	{
		return this.#_dropZone;
	}

	/**
	 * Gets the multiple files dropped on or selected with the file drop zone while multiple files are disallowed.
	 * @type {Collection<File>}
	 */
	get rejectedMultipleFiles()
	{
		return this.#_rejectedMultipleFiles;
	}

	/**
	 * Gets the invalid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	get invalidSelectedFiles()
	{
		return this.#_invalidSelectedFiles;
	}

	/**
	 * Gets the valid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	get validSelectedFiles()
	{
		return this.#_validSelectedFiles;
	}

	/**
	 * Gets the accepted file types.
	 * @returns {Array<String>} The accepted file types.
	 */
	get acceptedFileTypes()
	{
		return this.#_acceptedFileTypes;
	}

	/**
	 * Gets if multiple files can be dropped or selected.
	 * @returns {Boolean} True if multiple files can be dropped or selected, otherwise false.
	 */
	get isMultipleFile()
	{
		return this.#_isMultipleFile;
	}

	/**
	 * Gets the multiple file rejected event.
	 * @returns {Function} The multiple file rejected event.
	 */
	get multipleFileRejectedEvent()
	{
		return new EventManager( MultipleFileRejectedEvent, this );
	}

	/**
	 * Gets the invalid file selected event.
	 * @returns {Function} The invalid file selected event.
	 */
	get invalidFileSelectedEvent()
	{
		return new EventManager( InvalidFileSelectedEvent, this );
	}

	/**
	 * Gets the multiple file rejected event.
	 * @returns {Function} The multiple file rejected event.
	 */
	get validFileSelectedEvent()
	{
		return new EventManager( ValidFileSelectedEvent, this );
	}

	/**
	 * Initializes the control.
	 */
	#initialize()
	{
		this.#addAdditionalDefaultAttributes();
		this.#determineAcceptedFileTypes();
		this.#determineIsMultipleFile();
		this.#createFileSelectionDialog();
		this.#addFileSelectionDialog();
		this.#addEventHandlers();
	}

	/**
	 * Adds additional default attributes.
	 */
	#addAdditionalDefaultAttributes()
	{
		this.#_dropZone.setAttribute( 'data-is-dragover', BooleanString.FALSE );
	}

	/**
	 * Determines the valid droppable and selectable file types.
	 */
	#determineAcceptedFileTypes()
	{
		const acceptedFileTypes  = this.#_dropZone.getAttribute( 'data-accepted-file-types' );
		this.#_acceptedFileTypes = null === acceptedFileTypes || '' === acceptedFileTypes
			? []
			: acceptedFileTypes
				.toLowerCase()
				.split( ', ' );
	}

	/**
	 * Determines if multiple files can be dropped or selected.
	 */
	#determineIsMultipleFile()
	{
		this.#_isMultipleFile = BooleanString.TRUE === this.#_dropZone.getAttribute( 'data-is-multiple-file' );
	}

	/**
	 * Creates the file selection dialog.
	 */
	#createFileSelectionDialog()
	{
		this.#_fileSelectionDialog =
			/** @type HTMLInputElement */
			DomHelper.createElementFromString(
				'<input data-control-type="FILE_DROP_ZONE_SELECTION_DIALOG" type="file"/>'
			);

		if ( [] !== this.#_acceptedFileTypes )
		{
			this.#_fileSelectionDialog.accept = this.#_acceptedFileTypes.join( ', ' );
		}

		this.#_fileSelectionDialog.multiple = this.#_isMultipleFile;

		this.#_fileSelectionDialog.style.display = 'none';
	}

	/**
	 * Attaches all necessary event handlers.
	 */
	#addEventHandlers()
	{
		const propagationStoppingEventHandler     = ( event ) =>
		{
			event.preventDefault();
			event.stopPropagation();
		};
		const settingIsDraggedOverEventHandler    = ( event ) =>
		{
			this.#_dropZone.setAttribute( 'data-is-dragover', BooleanString.TRUE );
		};
		const settingIsNotDraggedOverEventHandler = ( event ) =>
		{
			this.#_dropZone.setAttribute( 'data-is-dragover', BooleanString.FALSE );
		};
		const openSelectionDialogEventHandler     = ( event ) =>
		{
			this.#_fileSelectionDialog.clickEvent.dispatch();
		};
		const determineDroppedFilesEventHandler   = ( event ) =>
		{
			this.#addSelectedFiles( event.dataTransfer.files );
		};
		const determineDialogFilesEventHandler    = ( event ) =>
		{
			this.#addSelectedFiles( event.target.files );
		};

		this.#_dropZone.dragEvent( propagationStoppingEventHandler );
		this.#_dropZone.dragStartEvent( propagationStoppingEventHandler );
		this.#_dropZone.dragEndEvent( propagationStoppingEventHandler, settingIsNotDraggedOverEventHandler );
		this.#_dropZone.dragOverEvent( propagationStoppingEventHandler, settingIsDraggedOverEventHandler );
		this.#_dropZone.dragEnterEvent( propagationStoppingEventHandler, settingIsDraggedOverEventHandler );
		this.#_dropZone.dragLeaveEvent( propagationStoppingEventHandler, settingIsNotDraggedOverEventHandler );
		this.#_dropZone.dropEvent( propagationStoppingEventHandler, settingIsNotDraggedOverEventHandler, determineDroppedFilesEventHandler );
		this.#_dropZone.clickEvent( propagationStoppingEventHandler, openSelectionDialogEventHandler );
		this.#_fileSelectionDialog.changeEvent( determineDialogFilesEventHandler );
	}

	/**
	 * Adds the file selection dialog to the control.
	 */
	#addFileSelectionDialog()
	{
		DomHelper.appendChildren( this.#_dropZone, this.#_fileSelectionDialog );
	}

	/**
	 * Adds the selected files to the file drop zone.
	 * @param {FileList} files The files to add.
	 */
	#addSelectedFiles( files )
	{
		this.#_rejectedMultipleFiles = new Collection();
		this.#_invalidSelectedFiles  = new Collection();
		this.#_validSelectedFiles    = new Collection();

		/**
		 * @type {Collection<File>}
		 */
		const preparedFiles = new Collection();

		if ( false === this.#_isMultipleFile )
		{
			preparedFiles.add( files[ 0 ] );

			for ( let n = files.length - 1; n < files.length; n++ )
			{
				this.#_rejectedMultipleFiles.add( files[ n ] );
				this.multipleFileRejectedEvent.dispatch(
					new FileEventArguments( files[ n ] )
				);
			}
		}
		else
		{
			preparedFiles.add( ...files );
		}

		preparedFiles.forEach(
			( file ) =>
			{
				const isFileValid = [] === this.#_acceptedFileTypes ||
					this.#_acceptedFileTypes.includes(
						file.type.toLowerCase()
					);

				const eventArguments = new FileEventArguments( file );

				let event;
				if ( false === isFileValid )
				{
					this.#_invalidSelectedFiles.add( file );
					this.invalidFileSelectedEvent.dispatch( eventArguments );
				}
				else
				{
					this.#_validSelectedFiles.add( file );
					this.validFileSelectedEvent.dispatch( eventArguments );
				}

				return isFileValid;
			}
		);
	}
}
