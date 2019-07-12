/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	 config.toolbar_Full = [
	                        ['Source','-','Save','NewPage','Preview','Print','-','Templates'],
	                        ['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'SpellChecker', 'Scayt'],
	                        ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	                        ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
	                        //'/',
	                        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
	                         ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],
	                         ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl'],
	                         ['Link','Unlink','Anchor'],
	                         ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe'],
	                         ['Styles','Format','Font','FontSize'],
	                         ['TextColor','BGColor'],
	                         ['Maximize','ShowBlocks']
	                     ];
	 
	 config.toolbar_Standard = [
	                        ['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'SpellChecker', 'Scayt'],
	                        ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	                        //'/',
	                        ['Bold','Italic','Underline','Strike'],
	                         ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl'],
	                         ['Link','Unlink','Anchor'],
	                         ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
	                         ['Styles','Format','Font','FontSize'],
	                         ['TextColor','BGColor'],
	                         ['Maximize'],['Source']
	                     ];
	 
	 config.toolbar_Basic = [
		                        ['Cut','Copy','Paste'],
		                        ['Undo','Redo','-','Find','Replace'],
		                        ['Bold','Italic','Underline','Strike'],
		                         ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl'],
		                         ['Link','Unlink','Anchor'],
		                     ];
	
};
