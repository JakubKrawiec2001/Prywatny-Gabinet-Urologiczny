const burgerNav = document.querySelector(".burger-nav");
const burgerBtn = document.querySelector(".burger-btn");
const burgerItem = document.querySelectorAll(".burger-nav-item");
const burgerBody = document.querySelectorAll(".burger-nav-text");
const burgerBtnClose = document.querySelector(".burger-btn-close");
const navBrand = document.querySelector(".nav-brand");
const logo = document.querySelector(".logo");
const navItems = document.querySelectorAll(".nav-link");
const lastNavItem = document.querySelector(".nav-link:last-child")

document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector("nav");

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg");
			burgerBtn.style.color = "#fff";
			navBrand.style.color = "#fff";
			logo.style.color = "#fff";
			navItems.forEach(function (navItems) {
				navItems.style.color = "#fff";
			});
		} else {
			nav.classList.remove("shadow-bg");
			burgerBtn.style.color = "#4B4C4D";
			navBrand.style.color = "#3071FF";
			logo.style.color = "#3071FF";
			
			navItems.forEach(function (navItems) {
				navItems.style.color = "#4b4c4d";
				lastNavItem.style.color = "#fff"
			});
		}
	}

	window.addEventListener("scroll", addShadow);
});

const show = () => {
	if (burgerNav.classList.contains("show")) {
		burgerNav.classList.remove("show");
	} else {
		burgerNav.classList.add("show");
	}
};

burgerBody.forEach(function (burgerItem) {
	burgerItem.addEventListener("click", show);
});

burgerBtn.addEventListener("click", show);
burgerBtnClose.addEventListener("click", show);
