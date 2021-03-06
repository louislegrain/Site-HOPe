const otherAmountField = document.getElementById('other-amount-field');
const otherAmountButton = document.querySelector('label[for="other-amount"]');
const validate = document.getElementById('validate');
const choices = document.querySelectorAll('input[name="price"]');
const container = document.querySelector('.container');
const paymentContainer = document.querySelector('.payment-container');
const displayChosenPrice = document.querySelector('.display-chosen-price');
const cancelError = document.getElementById('cancel');
var chosenChoice = [];
var chosenAmount;

otherAmountField.oninput = function (e) {
	let value = e.target.value;
	if (!e.target.checkValidity()) {
		e.target.value = value.substring(0, value.length - 1);
	}
};

otherAmountField.onkeydown = function (e) {
	if (e.keyCode === 69 || e.keyCode === 188 || e.keyCode === 190) {
		return false;
	}
};

otherAmountField.onfocus = function () {
	paymentContainer.style.display = 'none';
};

validate.onclick = function () {
	cancelError.style.display = 'none';
	chosenChoice = [];
	for (let choice of choices) {
		if (choice.checked) {
			chosenChoice.push(choice);
		}
	}
	if (chosenChoice.length === 1) {
		chosenAmount = chosenChoice[0];
	} else {
		alert('Une erreur est survenue, veuillez réessayer !');
		return false;
	}
	chosenAmount = chosenAmount.id;
	if (chosenAmount === "other-amount") {
		if (otherAmountField.value !== '') {
			chosenAmount = otherAmountField.value;
		} else {
			alert('Le champ est vide !');
			return false;
		}
	}
	if (isNaN(chosenAmount)) {
		alert('Une erreur est survenue, veuillez réessayer !');
		return false;
	}
	displayChosenPrice.textContent = chosenAmount;
	paymentContainer.style.display = 'block';
	window.location.href = "#payer";
}

for (let choice of choices) {
	choice.onclick = function () {
		paymentContainer.style.display = 'none';
		cancelError.style.display = 'none';
	};
}

const svg = document.querySelector('.svg');
const paths = svg.querySelectorAll('g');
const popup = document.querySelector('.popup');
const popupH3 = popup.querySelector('h3');
const popupP = popup.querySelector('p');

paths.forEach((path) => {
	path.addEventListener('mouseenter', () => {
		popupH3.textContent = path.dataset.title;
		popupP.textContent = `${path.dataset.number}%`;
		popup.style.display = 'block';
	});
	path.addEventListener('mousemove', (e) => {
		popup.style.top = `${e.clientY - svg.getBoundingClientRect().top}px`;
		popup.style.left = `${e.clientX - svg.getBoundingClientRect().left}px`;
	});
	path.addEventListener('mouseleave', () => {
		popup.style.display = 'none';
	});
});