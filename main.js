const container = document.querySelector('.container');
const boardSizeInfo = document.querySelector('.board-size');
const resizeButton = document.querySelector('.resize-button');

let size = 16;
boardSizeInfo.textContent = `Current board size is ${size}x${size}`;
resizeButton.addEventListener('click', resizeBoard);

function generateBoxes() {
	for (let i = 1; i <= size * size; i++) {
		const box = document.createElement('div');
		box.setAttribute(
			'style',
			`width: ${400 / size}px; height: ${400 / size}px; border: 1px solid black;`,
		);

		const color = `rgb(${generateRandomColor()},${generateRandomColor()},${generateRandomColor()})`;
		let defaultOpacity = 0.1;

		box.addEventListener('mouseenter', (event) => {
			event.target.style.backgroundColor = color;
			if (defaultOpacity < 1.0) {
				event.target.style.opacity = `${defaultOpacity}`;
				defaultOpacity += 0.1;
			}
		});

		container.appendChild(box);
	}
}

generateBoxes();

function generateRandomColor() {
	return Math.floor(Math.random() * 255);
}

function resizePrompt() {
	const newSize = Number(
		prompt('Enter new board size! Minimum is 8 and the maximum is 64'),
	);
	return isNaN(newSize) ? 0 : newSize;
}

function resizeBoard() {
	let newSize;
	do {
		newSize = resizePrompt();
	} while (newSize < 8 || newSize > 64);

	size = newSize;
	container.innerHTML = '';
	boardSizeInfo.textContent = `Current board size is ${size}x${size}`;
	generateBoxes();
}
