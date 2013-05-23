$(document).ready(function(){
		
	$('#element').tooltip();
	$('#element1').tooltip();
	$('#element2').tooltip();
	
	$('.temp').click(function(){
		$('#tempModal').modal(function(){
			$(this).show();
			});
		});
	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	})
	
});