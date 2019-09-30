$(".online-bank__btn").click(function () {
    $(".hide-menu").fadeIn()
})
$(".hide-menu-close").click(function () {
    $(".hide-menu").fadeOut()
})
$(".nav-btn").click(function () {
    if (!$(".nav").hasClass("changeHeight")) {
        $(".nav").addClass("changeHeight")
        $(".nav-block").addClass("changeHeight")
        $(".nav-wrapp").fadeToggle()
        $(".nav-btn__line:nth-child(1)").addClass("nav-btn__line-1st")
        $(".nav-btn__line:nth-child(2)").addClass("nav-btn__line-2st")
        $(".nav-btn__line:nth-child(3)").addClass("hide")
    }
    else if ($(".nav").hasClass("changeHeight")) {
        $(".nav").removeClass("changeHeight")
        $(".nav-block").removeClass("changeHeight")
        $(".nav-wrapp").fadeToggle()
        $(".nav-btn__line:nth-child(1)").removeClass("nav-btn__line-1st")
        $(".nav-btn__line:nth-child(2)").removeClass("nav-btn__line-2st")
        $(".nav-btn__line:nth-child(3)").removeClass("hide")
    }
})
let urlAnchor = window.location.hash
if (urlAnchor !== undefined) {
    let arrUrlAnchor = urlAnchor.split('#')
    if (document.getElementById(`${arrUrlAnchor[1]}`) !== null) document.getElementById(`${arrUrlAnchor[1]}`).classList.add('show');
}
var leftHeader = document.getElementsByClassName("left-Header");
var rightHeader = document.getElementsByClassName("right-Header");
var element = document.querySelector('.visElem');
var element1 = document.querySelector('.visElem1')
var Visible = function (target, className) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {

        target.classList.add(className)
    }
};


window.addEventListener('scroll', function () {
    Visible(element, "fadeInRight");
    Visible(element1, "fadeInLeft");
    for (var i = 0; i < leftHeader.length; i++) {
        Visible(leftHeader[i], "fadeInLeftNow");
        Visible(rightHeader[i], "fadeInRight");
    }
});
Visible(element, "fadeInRight");
Visible(element1, "fadeInLeft");
for (var i = 0; i < leftHeader.length; i++) {
    Visible(leftHeader[i], "fadeInLeftNow");
    Visible(rightHeader[i], "fadeInRight");
}