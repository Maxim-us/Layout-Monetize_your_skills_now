$(document).ready(function(){
	
	//owl
	$(".owl-carousel").owlCarousel({  	
		loop : true,
		autoplay : true,
		autoplayTimeout : 5000,
		items : 1,
		smartSpeed : 1000,
		center : true,
		autoplaySpeed : 2000,
		mouseDrag : false,
		nav : true,
		navText : '',
		dots : true
	});
	
	//select
	$('.scroll-pane').jScrollPane(); 
	/*
	if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){					
		$(".test-our_services_all").hide();
		$(".test-our_services_safari").show();
		$(".test-about_all").hide();
		$(".test-about_safari").show();			
	}
	*/
})
