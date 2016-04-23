/*! FileStrap v1.0.0 | (c) 3S Suchorski | Created with Bootstrap v3.3.6 and jQuery 1.12.3 */
(function($) {
	'use strict';	
	$.fn.filestrap = function(option, value) {
		switch (option) {
		case 'clear':
			$(this).val('');
			$(this).parents().eq(2).children('[data-fs-id="inputFilename"]').val('');
			$(this).parents().eq(1).children('[data-fs-id="buttonTrash"]').hide();
			break;
		case 'placeholder':
			$(this).parents().eq(2).children('[data-fs-id="inputFilename"]').attr('placeholder', value);
			break;
		default:
			var options = $.extend({}, $.fn.filestrap.defaults, option);
			return this.each(function() {
				var $div = $('<div>', { class: 'input-group' });
				var $textInput = $('<input>', { type: 'text', id: $(this).data('id'), class: 'form-control', placeholder: $(this).attr('placeholder') }).prop('readonly', true).attr('data-fs-id', 'inputFilename');
				var $groupSpan = $('<span>', { class: 'input-group-btn' });
				var $label = $('<label>', { class: 'btn btn-primary', 'for': $(this).attr('id') });
				var $fileInput = $('<input>', { type: 'file', id: $(this).attr('id') }).hide().attr('data-fs-id', 'inputFile').prop('filestrap', true);
				var $fileSpan = $('<span>', { class: 'glyphicon glyphicon-folder-open' });
				if (options.hasTrash) {
					var trashButton = $('<button>', { class: 'btn btn-danger' }).attr('data-fs-id', 'buttonTrash').click(function() {
						$(this).parent().find('label input[data-fs-id="inputFile"]').filestrap('clear');
					}).hide();
					var trashSpan = $('<span>', { class: 'glyphicon glyphicon-trash' }).html(' ' + options.trashText);
					$groupSpan.append(trashButton.append(trashSpan));
				}
				$fileInput.change(function() {
					$(this).parents().eq(2).children('[data-fs-id="inputFilename"]').val($(this).val());
					if (options.hasTrash) {
						$(this).parents().eq(1).children('[data-fs-id="buttonTrash"]').show();
					}
				}).prop('disabled', $(this).is('[disabled]'));
				$(this).replaceWith($div.append($textInput).append($groupSpan.append($label.append($fileInput).append($fileSpan.html(' ' + options.browserText)))));
			});
		}
	};
	$.fn.filestrap.defaults = {
		browserText: '', 
		hasTrash: true,
		trashText: ''
	};
})(jQuery);

$.propHooks.disabled = {
	set: function(element, value) {
		if ($(element).prop('filestrap')) {
			var $label = $(element).parent();
			var $trash = $(element).parents().eq(1).children('[data-fs-id="buttonTrash"]');
			if (value) {
				$label.addClass('disabled');
				$trash.prop('disabled', true).addClass('disabled');
			} else {
				$label.removeClass('disabled');
				$trash.prop('disabled', false).removeClass('disabled');
			}
		}
		return undefined;
	}	
};
