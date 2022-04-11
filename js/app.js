import colors from './ntc.js';

// UI
const bg = document.querySelector('.container');
const chgBtn = document.querySelector('.btn');
const colorSpan = document.querySelector('.color');
const form = document.querySelector('form');
const simpleOpt = document.querySelector('#simple');

let colorCode = '';

chgBtn.addEventListener('click', () => {
	colorCode = `#${randColorCode()}`;
	bg.style.backgroundColor = colorCode;

    whoChecked();
});

form.addEventListener('change', whoChecked);

function randColorCode() {
	return Math.floor(Math.random() * 1000000);
}

function whoChecked() {
	if (simpleOpt.checked) {
		// console.log('Simple is checked');
		colorSpan.textContent = colors.name(colorCode)[1];
	} else {
		// console.log('Simple is not checked');
		colorSpan.textContent = colorCode;
	}
}

