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

animateDiagram(child1, 50)