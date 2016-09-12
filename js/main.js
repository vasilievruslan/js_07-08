$(function () {
	$('.tabs__item').on('click', function () {
		var tab_id = $(this).attr('data-tab');

		$('.tabs__item').removeClass('active');
		$('.tabs__content').removeClass('active');

		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	});

	$('.input').on('focus', function () {
		var hint_id = $(this).attr('data-hint');

		$('#' + hint_id).addClass('active');
	});
	$('.input').on('focusout', function() {
		$('.helpmassage').removeClass('active');
	});
});