$(document).ready(function(){

	// Opening animation
	$(".launcher-btns button").on("webkitAnimationEnd mozAnimationEnd animationend", function(){
		$(this).removeClass("is-hidden");
	});
	$("h1").on("webkitAnimationEnd mozAnimationEnd animationend", function(){
		$(this).removeClass("is-hidden");
	});

	// Switch from launch mode to posting mode
	$(".launcher-btns button").click(function(){
		$("body").addClass("is-posting");
	});

	// Show text form
	$(".launcher-btns .text").click(function(){
		$(".post-text").show();
	});

	// Show image form
	$(".launcher-btns .image").click(function(){
		$(".post-image").show();
	});

	// Show quote form
	$(".launcher-btns .quote").click(function(){
		$(".post-quote").show();
	});

	// Show link form
	$(".launcher-btns .link").click(function(){
		$(".post-link").show();
	});

	// Show video form
	$(".launcher-btns .video").click(function(){
		$(".post-video").show();
	});

	// Switch back from posting mode to launch mode
	$(".post-back").click(function(){
		$(".post-box form").hide();
		$("body").removeClass("is-posting");
		$("body").addClass("is-returning").on("webkitAnimationEnd mozAnimationEnd animationend", function(){
			$(this).removeClass();
		});
	});
});