const swiper = new Swiper('.hotel__swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	navigation: {
		nextEl: '.hotel-slider__button--next',
		prevEl: '.hotel-slider__button--prev',
	},
})

const swiperRew = new Swiper('.reviews__swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	navigation: {
		nextEl: '.reviews-slider__button--next',
		prevEl: '.reviews-slider__button--prev',
	},
})

var menuButton = document.querySelector(".menu-button")

menuButton.addEventListener("click", function (e) {
	document.querySelector(".header-navbar").classList.toggle("header-navbar--active")
})