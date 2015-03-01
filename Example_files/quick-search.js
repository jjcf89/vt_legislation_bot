$(function() {

	$search = $('.quick-search');
	$selected = $search.find('input[checked]','.search-type');
	type = $selected.val();

	$search.find('input[type=radio]').hide();

	$selected.parents('.radio-inline').addClass('active');
	$('.form-control','.search-field').hide();
	$('.input-'+type,'.search-field').show();

	$search.on('change','input[type=radio]', function() {
		$('.active','.quick-search').removeClass('active');
		$(this).parents('.radio-inline').addClass('active');

		$('.form-control','.search-field').hide();
		$('.input-'+$(this).val(),'.search-field').show();
	});

	$('.popover-item').popover();

});