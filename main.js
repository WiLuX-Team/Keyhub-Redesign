var hero_s = $('.hero__slider');
	hero_s.owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		dots: true,
		nav: true,
		navText: ['<span class=\'fa fa-angle-left\'></span>', '<span class=\'fa fa-angle-right\'></span>'],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		mouseDrag: false
	});

	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});