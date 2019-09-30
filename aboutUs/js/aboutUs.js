var child1 = document.querySelectorAll(".circle__text");
var Circle = function (sel) {
	var circles = document.querySelectorAll(sel);
	[].forEach.call(circles, function (el) {
		var valEl = parseFloat(child1[0].innerText);
		valEl = valEl * 507 / 100;
		el.innerHTML = '<svg width="200" height="200"><circle transform="rotate(-90)" r="80" cx="-100" cy="100" /><circle transform="rotate(-90)" style="stroke-dasharray:' + valEl + 'px 520px;" r="80" cx="-100" cy="100" /></svg>';
	});
};

function animateDiagram(elem, numb) {
	var i = 0;
	let test = setInterval(function(e){
		elem[0].innerText =i+"%";
		i++;
		Circle('.circle');
		if(i>numb)clearTimeout(test)
	}, 30)
}


var child2 = document.querySelectorAll(".circle__text1");
var Circle1 = function (sel, elem) {
	var circles = document.querySelectorAll(sel);
	[].forEach.call(circles, function (el) {
		var valEl = parseFloat(elem[0].innerText);
		valEl = valEl * 507 / 100;
		el.innerHTML = '<svg width="200" height="200"><circle transform="rotate(-90)" r="80" cx="-100" cy="100" /><circle transform="rotate(-90)" style="stroke-dasharray:' + valEl + 'px 520px;" r="80" cx="-100" cy="100" /></svg>';
	});
};
function animateDiagram1(elem, numb, block) {
	var i = 0;
	let test = setInterval(function(e){
		elem[0].innerText =i+"%";
		i++;
		Circle1(block, child2);
		if(i>numb)clearTimeout(test)
	}, 30)
}

var elem = document.getElementsByClassName("visElem");
var Visible = function (target) {
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
			animateDiagram(child1, 70)
			animateDiagram1(child2, 30, '.circle1')
    }
};
var xx = false;
window.addEventListener('scroll', function() {
	if (!xx){
		Visible(elem[0])
		xx = true
	}
	console.log(xx)

});

for(var i = 0; i<elem.length; i++){
	Visible(elem[i])

}