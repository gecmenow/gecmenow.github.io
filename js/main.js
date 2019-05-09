$(document).ready(function(){
	
	$(".fourth-screen-right-size").click(function()
	{
		$(".fourth-screen-right-size").removeClass("size-active");
		$(this).addClass("size-active");
	})

	$(".sixth-screen-right-size").click(function()
	{
		$(".sixth-screen-right-size").removeClass("sixth-screen-right-active");
		$(this).addClass("sixth-screen-right-active");
	})

	$(".case-color-container").click(function()
	{
		$(".case-color-active").remove();
		$(this).prepend("<div class='case-color-active'><i class='fas fa-check'></i></div>");
	})

	var catalogPosition = $(".fourth-screen").position();
	var tenScreenPosition = $(".ten-screen").position();
	var aboutPosition = $(".about").position();

	$(".navigation a").click(function(event)
	{
		event.preventDefault();
		var href = $(this).attr('href');
		if(href == "catalog")
		{
			$("html, body").animate({
				scrollTop:catalogPosition.top
			},1250);
		}
		else
		{
			$("html, body").animate({
				scrollTop:aboutPosition.top + tenScreenPosition.top
			},2500);
		}
	})
})