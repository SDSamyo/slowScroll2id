$(function() {
	$('a[href^="#"]').on('click', function(){
		var el = $(this).attr('href');
		$('html, body').animate({
		scrollTop: $(el).offset().top}, 'slow');
		return false;
		});
});