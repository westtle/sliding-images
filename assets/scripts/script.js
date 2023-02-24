const images = document.querySelectorAll("img");

function scroll(e) {
	images.forEach(img => {
		let slideAt = (window.scrollY + window.innerHeight) - img.height / 2;

		if (slideAt > img.offsetTop) {
			img.classList.add("slided-in__");
		};

		if (window.pageYOffset > img.offsetTop + img.height / 1.5 || img.offsetTop > (window.scrollY + window.innerHeight) - img.height / 1.5) {
			img.classList.remove("slided-in__");
		};
	});
};

window.addEventListener("scroll", scroll);
window.addEventListener("DOMContentLoaded", scroll);