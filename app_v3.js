var mobile = false;
const header = document.querySelector('header');
const divHeader = document.getElementById('div-header');
let divHeaderHeight = 193;
const bigContainer = document.querySelector('.big-container');
var initialScroll = scrollY;
const lisNavbar = document.getElementById('navbar').querySelectorAll('li');
const underline = document.querySelector('.underline');

if (window.matchMedia('(max-width: 1150px)').matches) {
	mobile = true;
}

window.addEventListener('resize', function () {
	divHeaderHeight = divHeader.offsetHeight;
	if (window.matchMedia('(max-width: 1150px)').matches) {
		mobile = true;
		header.style.position = 'fixed';
		bigContainer.removeAttribute('style');
	} else {
		mobile = false;
		if (scrollY < divHeaderHeight) {
			header.style.position = 'static';
			header.style.transform = 'translateY(0px)';
			bigContainer.style.marginTop = '0px';
		} else {
			header.style.position = 'fixed';
			header.style.transform = `translateY(-${divHeaderHeight}px)`;
			bigContainer.style.marginTop = '247px';
		}
	}
});

document.addEventListener('scroll', function () {
	if (!mobile) {
		if (scrollY < divHeaderHeight) {
			header.style.position = 'static';
			header.style.transform = 'translateY(0px)';
			bigContainer.style.marginTop = '0px';
		} else {
			header.style.position = 'fixed';
			header.style.transform = `translateY(-${divHeaderHeight}px)`;
			bigContainer.style.marginTop = '247px';
		}
	} else {
		let currentScroll = scrollY;
		if (currentScroll > header.offsetHeight && !document.getElementById('hamburger-btn').checked) {
			if (currentScroll > initialScroll) {
				header.style.transform = `translateY(-${header.offsetHeight + 20}px)`;
			} else {
				header.style.transform = 'translateY(0px)';
			}
			initialScroll = currentScroll;
		}
	}
});

for (let li of lisNavbar) {
	li.addEventListener('mouseenter', function () {
		let underlineMaxWidth = li.offsetWidth - 80;
		let underlineMinWidth = li.querySelector('a span').offsetWidth;
		let underlineWidth = underlineMinWidth > underlineMaxWidth ? underlineMinWidth : underlineMaxWidth;
		underline.style.width = `${underlineWidth}px`;
		underline.style.left = `${li.offsetLeft + ((li.offsetWidth - underlineWidth) / 2)}px`;
	});
}