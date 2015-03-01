/* Main nav dropdowns */


+function ($) {
	'use strict';

	// MEGA DROPDOWN CLASS DEFINITION
	// ==============================

	var backdrop = '.dropdown-backdrop'
	var toggle   = '[data-toggle="megadropdown"]'
	var MegaDropdown = function (element) {
		$(element).on('click.mn.megadropdown', this.toggle)
	}

	MegaDropdown.VERSION = '0.0.2'

	MegaDropdown.prototype.toggle = function (e) {
		var $this = $(this)

		if ($this.is('.disabled, :disabled')) return

		var $parent  = getParent($this)
		var isActive = $parent.hasClass('open')

		clearMenus()

		if (!isActive) {
			if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
				// if mobile we use a backdrop because click events don't delegate
				$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
			}

			var relatedTarget = { relatedTarget: this }
			$parent.trigger(e = $.Event('show.mn.megadropdown', relatedTarget))

			if (e.isDefaultPrevented()) return

			$this.trigger('focus')

			$parent
				.toggleClass('open')
				.trigger('shown.mn.megadropdown', relatedTarget)
		}

		return false
	}

	MegaDropdown.prototype.keydown = function (e) {
		if (!/(38|40|27)/.test(e.keyCode)) return

		var $this = $(this)

		e.preventDefault()
		e.stopPropagation()

		if ($this.is('.disabled, :disabled')) return

		var $parent  = getParent($this)
		var isActive = $parent.hasClass('open')

		if (!isActive || (isActive && e.keyCode == 27)) {
			if (e.which == 27) $parent.find(toggle).trigger('focus')
			return $this.trigger('click')
		}

		var desc = ' li:not(.divider):visible a'
		var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

		if (!$items.length) return

		var index = $items.index($items.filter(':focus'))

		if (e.keyCode == 38 && index > 0)                 index--                        // up
		if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
		if (!~index)                                      index = 0

		$items.eq(index).trigger('focus')
	}

	function clearMenus(e) {
		if (e && e.which === 3) return
		$(backdrop).remove()
		$(toggle).each(function () {
			var $parent = getParent($(this))
			var relatedTarget = { relatedTarget: this }
			if (!$parent.hasClass('open')) return
			$parent.trigger(e = $.Event('hide.mn.megadropdown', relatedTarget))
			if (e.isDefaultPrevented()) return
			$parent.removeClass('open').trigger('hidden.mn.megadropdown', relatedTarget)
		})
	}

	function getParent($this) {
		var selector = $this.attr('data-target')

		if (!selector) {
			selector = $this.attr('href')
			selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
		}

		var $parent = selector && $(selector)

		return $parent && $parent.length ? $parent : $this.parent()
	}



	// DROPDOWN PLUGIN DEFINITION
	// ==========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this)
			var data  = $this.data('mn.megadropdown')

			if (!data) $this.data('mn.megadropdown', (data = new MegaDropdown(this)))
			if (typeof option == 'string') data[option].call($this)
		})
	}

	var old = $.fn.megadropdown

	$.fn.megadropdown             = Plugin
	$.fn.megadropdown.Constructor = MegaDropdown


	// DROPDOWN NO CONFLICT
	// ====================

	$.fn.megadropdown.noConflict = function () {
		$.fn.megadropdown = old
		return this
	}


	// APPLY TO STANDARD DROPDOWN ELEMENTS
	// ===================================

	$(document)
		.on('click.mn.megadropdown.data-api', function(e) {
			if (!$(this).is(e.target) && $('.mega-dropdown').has(e.target).length === 0) { clearMenus(e)
			}
		})
		.on('click.mn.megadropdown.data-api', '.megadropdown form', function (e) { e.stopPropagation() })
		.on('click.mn.megadropdown.data-api', toggle, MegaDropdown.prototype.toggle)
		.on('keydown.mn.megadropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', MegaDropdown.prototype.keydown)

}(jQuery);
