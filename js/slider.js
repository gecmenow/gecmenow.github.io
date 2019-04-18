$(document).ready(function(){
	$('.sixth-screen-left-content').slick(
		{
			prevArrow: '<div class="slick-prev"></div>',
            nextArrow: '<div class="slick-next"></div>',
			arrows: true,
			dots: true,
		}
		);
	$('.slick-dots button').html('');

	$('.center').slick({
		prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        arrows: true,
		lazyLoad: 'ondemand',
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	       	lazyLoad: 'ondemand',
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: true,
	       	lazyLoad: 'ondemand',
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	document.getElementsByClassName('slick-active')[3].classList.add('center-active');

	var styleChanging = $('.slick-arrow');
	styleChanging.click(function()
	{
		$('.slick-slide').removeClass('center-active');
		console.log('huj');
		document.getElementsByClassName('slick-active')[3].classList.add('center-active');
	})
})