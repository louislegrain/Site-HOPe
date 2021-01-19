document.head.innerHTML += '<style>#loader-container { display: flex; }</style>';

window.addEventListener('load', function () {
	document.getElementById('loader-container').style.display = 'none';
});