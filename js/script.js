$(document).ready(function(){
	
	$('.roll9').click(function(){
		$('#roll9').modal(function(){
			$(this).show()
			});
		});
	
	$('.roll8').click(function(){
		$('#roll8').modal(function(){
			$(this).show()
			});
		});
	
	$('.roll7').click(function(){
		$('#roll7').modal(function(){
			$(this).show()
			});
		});

	$('.roll6').click(function(){
		$('#roll6').modal(function(){
			$(this).show()
			});
		});
	
	$('.roll5').click(function(){
		$('#roll5').modal(function(){
			$(this).show()
			});
		});
	
	$('.roll4').click(function(){
		$('#roll4').modal(function(){
			$(this).show()
			});
		});
	
	$('.roll3').click(function(){
		$('#roll3').modal(function(){
			$(this).show()
			});
		});

	$('.roll2').click(function(){
		$('#roll2').modal(function(){
			$(this).show()
			});
		});
	
	$('.roll1').click(function(){
		$('#roll1').modal(function(){
			$(this).show()
			});
		});
	/*descriptions*/	
	$('#sprialRaw').tooltip();
	$('#scallopRaw').tooltip();
	$('#banzaiRaw').tooltip();
	$('#spiral').tooltip();
	$('#nori').tooltip();
	$('#tunaSpicy').tooltip();
	$('#tempura').tooltip();
	$('#tempura2').tooltip();
	$('#sheilaSpicy').tooltip();
	$('#volcanoSpicy').tooltip();
	$('#spiderRaw').tooltip();
	$('#tempura3').tooltip();
	$('#masago2').tooltip();
	
	/*Prices*/	
	$('#bigTemp').tooltip();	
	$('#tobiko').tooltip();
	$('#banzai').tooltip();
	$('#scallop').tooltip();
	$('#tuna').tooltip();
	$('#sheila').tooltip();
	$('#volcano').tooltip();
	$('#spider').tooltip();
		
	$('#all').click(function(){
		$(".raw").fadeOut('slow'),
		$(".normal").fadeOut('slow'),
		$(".spicy").fadeOut('slow'),
		$('.spider').removeClass("alpha"),
		$('.banzai').addClass('alpha');
		$('.tuna').addClass('alpha')
		$(".spicy").fadeIn('slow'),
		$(".normal").fadeIn('slow'),
		$(".raw").fadeIn('slow')
		});
		
	$('#spicy').click(function(){
		$(".raw").fadeOut('slow'),
		$(".normal").fadeOut('slow'),
		$(".spicy").fadeOut('slow'),
		$(".spicy").fadeIn('slow'),
		$('.tuna').removeClass('alpha')
		});
		
	$('#raw').click(function(){
		$(".spicy").fadeOut('slow'),
		$(".normal").fadeOut('slow'),
		$(".raw").fadeOut('slow'),
		$(".raw").fadeIn('slow'),
		$('.spider').addClass("alpha"),
		$('.banzai').removeClass('alpha');
		});
	
});