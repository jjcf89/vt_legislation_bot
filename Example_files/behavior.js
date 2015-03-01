$(function() {

	// ENABLE POPOVERS
	// ===============
	$('.help-link').popover({
		'html' : true
	});

	$('.session-form').hide();
	$('.session-toggle').on('click',function(){
		if (!$('.session-form').hasClass('open')) {
			$('.session-form').addClass('open').slideDown();
		}
		return false;
	});

	// Responsive tab accordion behavior
	fakewaffle.responsiveTabs(['xs','sm']);

	$(".session-select .Actions input[type=submit]").hide();
	$(".session-select select").on('change',function() {
		this.form.submit();
	});

	$("body").on("click",".form-toggle", function() {
		$wrap = $(this).parents(".search-form");

		if ($wrap.hasClass('open')) {
			$('.search-form .toggle-content').slideUp(function() {
				$('.form-toggle').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
				$('.form-toggle').find('span span').html(' Show Search ');
				$wrap.removeClass("open");
			});
		}
		else {
			$wrap.addClass("open");
			$('.search-form .toggle-content').slideDown(function() {
				$('.form-toggle').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
				$('.form-toggle').find('span span').html(' Hide Search ');
			});
		}
	});

	$('.collapse').collapse({
		toggle: false
	});

	$("#quick-search").on("show.bs.collapse", function() {
		$("#mainnav").collapse('hide');
	});

	$("#mainnav").on("show.bs.collapse", function() {
		$("#quick-search").collapse('hide');
	});


	// Close popover on touch
	$('body').on('click', function(e) {
		$('.popover-item').each(function() {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');
			}
		});
		$('.help-link').each(function() {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');
			}
		});
	});

});