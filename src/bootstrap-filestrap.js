/*! FileStrap v1.1.0 | (c) 3S Suchorski | Created with Bootstrap v3.3.6 and jQuery 1.12.3 */
(function($) {'use strict';

	$.fn.filestrap = function(option, value) {
		return this.each(function() {
			var $this = $(this);
			var filestraped = ($this.prop('filestrap') == true);
			if (filestraped) {
				switch (option) {
				case 'enable':
					var $trash = $this.parents().eq(1).children('[data-fs-id="buttonTrash"]');
					$this.parent().removeClass('disabled');
					$trash.prop('disabled', false).removeClass('disabled');
					break;
				case 'disable':
					var $trash = $this.parents().eq(1).children('[data-fs-id="buttonTrash"]');
					$this.parent().addClass('disabled');
					$trash.prop('disabled', true).addClass('disabled');
					break;
				case 'addClass':
					$this.parents().eq(2).children('[data-fs-id="inputFilename"]').parent().addClass(value);
					break;
				case 'removeClass':
					$this.parents().eq(2).children('[data-fs-id="inputFilename"]').parent().removeClass(value);
					break;
				case 'placeholder':
					$this.parents().eq(2).children('[data-fs-id="inputFilename"]').attr('placeholder', value);
					break;
				case 'clear':
					$this.val('');
					$this.parents().eq(2).children('[data-fs-id="inputFilename"]').val('');
					$this.parents().eq(1).children('[data-fs-id="buttonTrash"]').hide();
					break;
				default:
				}
			} else {
				var options = $.extend({}, $.fn.filestrap.defaults, option);
				var $div = $('<div>', { class: 'input-group' });
				var $textInput = $('<input>', { type: 'text', id: $this.data('id'), class: 'form-control', placeholder: $this.attr('placeholder') }).prop('readonly', true).attr('data-fs-id', 'inputFilename');
				var $groupSpan = $('<span>', { class: 'input-group-btn' });
				var $label = $('<label>', { class: 'btn btn-primary', 'for': $this.attr('id') });
				var $fileInput = $('<input>', { type: 'file', id: $this.attr('id') }).hide().attr('data-fs-id', 'inputFile').prop('filestrap', true);
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
				}).prop('disabled', $this.is('[disabled]'));
				$(this).replaceWith($div.append($textInput).append($groupSpan.append($label.append($fileInput).append($fileSpan.html(' ' + options.browserText)))));
			}
		});
	};
	
	$.fn.filestrap.defaults = {
		browserText: '', 
		hasTrash: true,
		trashText: ''
	};
	
})(jQuery);
