;let targetsBookmarks = {
	b1: document.getElementById('bookmark1'),
	b2: document.getElementById('bookmark2'),
	b3: document.getElementById('bookmark3')
};
let targetsContaniers = {
	c1: document.getElementById('contanier1'),
	c2: document.getElementById('contanier2'),
	c3: document.getElementById('contanier3')
};

for (let key in targetsBookmarks) {
	targetsBookmarks[key].addEventListener('click', (ev) => {
		switch (ev.target.parentNode.id) {
			case "bookmark1":
				togglePage('b1', 'c1');
			break;
			case "bookmark2":
				togglePage('b2', 'c2');
			break;
			case "bookmark3":
				togglePage('b3', 'c3');
			break;
		}
	});
}
function togglePage(bookmark, contanier) {
	for (let key in targetsBookmarks) {
		targetsBookmarks[key].classList.remove("active");
	}
	for (let key in targetsContaniers) {
		targetsContaniers[key].classList.remove("active");
	}
	targetsBookmarks[bookmark].classList.add("active");
	targetsContaniers[contanier].classList.add("active");
}