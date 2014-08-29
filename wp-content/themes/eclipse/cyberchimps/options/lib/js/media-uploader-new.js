/**
 * Title: media-uploader-new.js
 *
 * Description: Defines JS for media uploader for WP3.5 and later.
 *
 * Please do not edit this file. This file is part of the Cyber Chimps Framework and all modifications
 * should be made in a child theme.
 *
 * @category Cyber Chimps Framework
 * @package  Framework
 * @since    1.0
 * @author   CyberChimps
 * @license  http://www.opensource.org/licenses/gpl-license.php GPL v2.0 (or later)
 * @link     http://www.cyberchimps.com/
 */

jQuery(document).ready(function($){
	var _custom_media = true;
    var _orig_send_attachment = wp.media.editor.send.attachment;

	$('input.upload_button').click(function(e) {
		
	var url_id = $(this).prev('input').attr('id');
	
    var send_attachment_bkp = wp.media.editor.send.attachment;
    var button = $(this);
	
    _custom_media = true;
    wp.media.editor.send.attachment = function(props, attachment){
		if ( _custom_media ) {
			$( '#' + url_id ).val( attachment.url );
		}
		else {
			return _orig_send_attachment.apply( this, [props, attachment] );
		};
    }

    wp.media.editor.open(button);
    return false;
	});

  jQuery('.add_media').on('click', function(){
    _custom_media = false;
  });
});