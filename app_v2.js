var mobile = false;
const header = document.querySelector('header');
const divHeader = document.getElementById('div-header');
let divHeaderHeight = divHeader.offsetHeight;
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
			header.style.transform = 'translateY(-' + divHeaderHeight + 'px)';
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
			header.style.transform = 'translateY(-' + divHeaderHeight + 'px)';
			bigContainer.style.marginTop = '247px';
		}
	} else {
		let currentScroll = scrollY;
		if (currentScroll > header.offsetHeight && !document.getElementById('hamburger-btn').checked) {
			if (currentScroll > initialScroll) {
				header.style.transform = 'translateY(-' + (header.offsetHeight + 20) + 'px)';
			} else {
				header.style.transform = 'translateY(0px)';
			}
			initialScroll = currentScroll;
		}
	}
});

for (let li of lisNavbar) {
	li.addEventListener('mouseenter', function () {
		var underlineWidth = li.offsetWidth - 80;
		let underlineMinWidth = li.querySelector('a').querySelector('span').offsetWidth;
		if (underlineMinWidth > underlineWidth) {
			underlineWidth = underlineMinWidth;
		}
		underline.style.width = underlineWidth + 'px';
		underline.style.marginLeft = li.offsetLeft + ((li.offsetWidth - underlineWidth) / 2) + 'px';
	});
}