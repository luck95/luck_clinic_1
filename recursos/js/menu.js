$(document).ready(function(){
	var altura = $('#header').offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
});
$('#open_menu').click(function(){
	$('#menu').slideToggle();
})
$('.submenu > i').click(function(){
	$(this).next('ul').slideToggle();		
});
