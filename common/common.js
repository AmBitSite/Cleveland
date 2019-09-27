$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('nav_scroll');
        $(".toTop").fadeIn();   
    } else {
        $('nav').removeClass('nav_scroll');
        $('.toTop').fadeOut();
    }
});
$('.toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});

// header burger

$(".online-bank__btn").click(function(){
	$(".hide-menu").fadeIn()
})
$(".hide-menu-close").click(function(){
	$(".hide-menu").fadeOut()
	$(".registration").fadeOut();
})
$(".nav-btn").click(function(){
	if(!$(".nav").hasClass("changeHeight")){
			$(".nav").addClass("changeHeight")
			$(".nav-block").addClass("changeHeight")
			$(".nav-wrapp").fadeToggle()
			$(".nav-btn__line:nth-child(1)").addClass("nav-btn__line-1st")
			$(".nav-btn__line:nth-child(2)").addClass("nav-btn__line-2st")
			$(".nav-btn__line:nth-child(3)").addClass("hide")
	}
	else if($(".nav").hasClass("changeHeight")){
			$(".nav").removeClass("changeHeight")
			$(".nav-block").removeClass("changeHeight")
			$(".nav-wrapp").fadeToggle()
			$(".nav-btn__line:nth-child(1)").removeClass("nav-btn__line-1st")
			$(".nav-btn__line:nth-child(2)").removeClass("nav-btn__line-2st")
			$(".nav-btn__line:nth-child(3)").removeClass("hide")
	}  
})
$(".Registration__btn").click(function(){
	$(".hide-menu").fadeOut();
	$(".registration").fadeIn();
})
$(".registration__btn-close").click(function(){
	$(".registration").fadeOut();
})