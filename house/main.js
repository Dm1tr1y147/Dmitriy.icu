$(function() {
	$('#logo').click(function() {
		$('nav').toggleClass('opened')
	});
	$(".link").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top,
			time = Math.abs(window.pageYOffset - top) * 2;
		if(window.innerHeight > window.innerWidth){
    		time = 1500;
		}
		$('body,html').animate({scrollTop: top}, time);
	});
});