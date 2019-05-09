$(document).ready(function(){
	$('.sixth-screen-left-content').slick(
		{
			prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>',
			arrows: true,
			dots: true,
		}
	);

	$('.center').slick({
		prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        arrows: true,
		lazyLoad: 'ondemand',
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        arrows: true,
	       	lazyLoad: 'ondemand',
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 800,
	      settings: {
	        arrows: false,
	       	lazyLoad: 'ondemand',
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 450,
	      settings: {
	        arrows: false,
	       	lazyLoad: 'ondemand',
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	var htmlWidth = document.body.offsetWidth;

	if(htmlWidth > 1000)
		document.getElementById('center').getElementsByClassName('slick-active')[1].classList.add('center-active');

	var styleChanging = $('.slick-arrow');
	styleChanging.click(function()
	{
		$('.slick-slide').removeClass('center-active');
		document.getElementById('center').getElementsByClassName('slick-active')[1].classList.add('center-active');
	});

	$('.ten-screen-slider-for').slick({
		prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
	  	slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		infinite: true,
		asNavFor: '.ten-screen-slider-nav',
		responsive:
		[
		    {
		      breakpoint: 1024,
		      settings:
		      {
		        arrows: false,
		      }
		    }
	    ]
	});

	$('.ten-screen-slider-nav').slick({
		prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
	 	slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.ten-screen-slider-for',
		dots: true,
		focusOnSelect: true,
		customPaging : function() {
    		return '<a class="dot">'+'</a>';
            },
		responsive:
		[
			{
		      breakpoint: 768,
		      settings:
		      {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 450,
		      settings:
		      {
		        slidesToShow: 2,
		      }
		    }
	    ]
	});

	$('.slick-dots button').html('');

	$(window).resize(function()
	{
		$('.slick-dots button').html('');
	});

	
})