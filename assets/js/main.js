(function($){
	'use strict';

	var slider = $('.home_slider');
	slider.owlCarousel({
		items: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		loop: true,
		autoplay: true,
		nav: true,
		dots: false,
		nav: true,
		navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]
	});

	slider.on('translate.owl.carousel', function(){
		var layer = $("[data-animation]");
		layer.each(function(){
			var anim_name = $(this).data('animation');
			$(this).removeClass('animated ' + anim_name).css('opacity', '0');
		});
	});

	$("[data-delay]").each(function(){
		var anim_del = $(this).data('delay');
		$(this).css('animation-delay', anim_del);		
	});
	var anim_dur = $(this).data('duration');




	slider.on('translated.owl.carousel', function(){
		var layer = slider.find('.owl-item.active').find("[data-animation]");
		layer.each(function(){
			var anim_name = $(this).data('animation');
			$(this).addClass('animated ' + anim_name).css('opacity', '1');
		});
	});


// portfolio owlCarousel active
	var portfolio = $('.portfolio');
	portfolio.owlCarousel({
		items: 3,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		loop: true,
		autoplay: true,
		nav: false,
		dots: false,
	});



})(jQuery);
