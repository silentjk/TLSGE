jQuery(document).ready(function ($) {

	jQuery('.animated').each(function () {
		var $curr = jQuery(this);
		var $currOffset = $curr.attr('data-gen-offset');
		if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
			$currOffset = 'bottom-in-view';
		}
		$curr.waypoint(function () {
			$curr.trigger('animated');
		}, {
			triggerOnce: true,
			offset: $currOffset
		});
	});
	jQuery('.animated').each(function () {
		var $curr = jQuery(this);
		$curr.bind('animate', function () {
			$curr.css('opacity', '');
			$curr.addClass($curr.data('gen'));
		});
	});
	jQuery('.animated').each(function () {
		var $curr = jQuery(this);
		var $currOffset = $curr.attr('data-gen-offset');
		if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
			$currOffset = 'bottom-in-view';
		}
		$curr.waypoint(function () {
			$curr.trigger('animate');
		}, {
			triggerOnce: true,
			offset: $currOffset
		});
	});
});
