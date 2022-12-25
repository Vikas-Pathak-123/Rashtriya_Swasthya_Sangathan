


;(function ($) {

	'use strict';

	$('.videoplay').modalVideo();
	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});


   $('.gallery-wrap').each(function () {
        $(this).find('.gallery-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(28.614490755309625, 77.31456042883983)
			// styles: style_array_here
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	var google_map_canvas = $('#map-canvas');

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	// Counter

	$('.counter-stat').counterUp({
	      delay: 10,
	      time: 1000
	  });


})(jQuery);
	// Governing body
	$(document).ready(function () {
		$('#btn1').click(function () {
			$('#Mymodal1').modal('show')
		});
	});

	$(document).ready(function () {
		$('#btn2').click(function () {
			$('#Mymodal2').modal('show')
		});
	});

	$(document).ready(function () {
		$('#btn3').click(function () {
			$('#Mymodal3').modal('show')
		});
	});

	$(document).ready(function () {
		$('#btn4').click(function () {
			$('#Mymodal4').modal('show')
		}); 6
	});

	$(document).ready(function () {
		$('#btn5').click(function () {
			$('#Mymodal5').modal('show')
		});
	});

	$(document).ready(function () {
		$('#btn6').click(function () {
			$('#Mymodal6').modal('show')
		});
	});
	$(document).ready(function () {
		$('#btn7').click(function () {
			$('#Mymodal7').modal('show')
		});
	});
	$(document).ready(function () {
		$('#btn8').click(function () {
			$('#Mymodal8').modal('show')
		});
	});

	//what we can do section
	function myFunction() {
		var dots = document.getElementById("dots");
		var moreText = document.getElementById("more");
		var btnText = document.getElementById("myBtn");
	  
		if (dots.style.display === "none") {
		  dots.style.display = "inline";
		  btnText.innerHTML = "Read more"; 
		  moreText.style.display = "none";
		} else {
		  dots.style.display = "none";
		  btnText.innerHTML = "Read less"; 
		  moreText.style.display = "inline";
		}
	  }

	  function myFunction1() {
		var dots = document.getElementById("dots1");
		var moreText = document.getElementById("more1");
		var btnText = document.getElementById("myBtn1");
	  
		if (dots.style.display === "none") {
		  dots.style.display = "inline";
		  btnText.innerHTML = "Read more"; 
		  moreText.style.display = "none";
		} else {
		  dots.style.display = "none";
		  btnText.innerHTML = "Read less"; 
		  moreText.style.display = "inline";
		}
	  }

	  function myFunction2() {
		var dots = document.getElementById("dots2");
		var moreText = document.getElementById("more2");
		var btnText = document.getElementById("myBtn2");
	  
		if (dots.style.display === "none") {
		  dots.style.display = "inline";
		  btnText.innerHTML = "Read more"; 
		  moreText.style.display = "none";
		} else {
		  dots.style.display = "none";
		  btnText.innerHTML = "Read less"; 
		  moreText.style.display = "inline";
		}
	  }

	  function myFunction3() {
		var dots = document.getElementById("dots3");
		var moreText = document.getElementById("more3");
		var btnText = document.getElementById("myBtn3");
	  
		if (dots.style.display === "none") {
		  dots.style.display = "inline";
		  btnText.innerHTML = "Read more"; 
		  moreText.style.display = "none";
		} else {
		  dots.style.display = "none";
		  btnText.innerHTML = "Read less"; 
		  moreText.style.display = "inline";
		}
	  }
	  // top utton
	
			//Get the button
			var mybutton = document.getElementById("myBtn4");

			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
			}

			// When the user clicks on the button, scroll to the top of the document
			function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			}
		
