const container = document.querySelector('.container');

function generateRandomColor() {
	return Math.floor(Math.random() * 255);
}

const size = 16;

for (let i = 1; i <= size * size; i++) {
	const box = document.createElement('div');
	box.setAttribute(
		'style',
		`width: ${600 / size}px; height: ${600 / size}px; border: 1px solid black;`,
	);

	const color = `rgb(${generateRandomColor()},${generateRandomColor()},${generateRandomColor()})`;

	box.addEventListener('mouseenter', (event) => {
		event.target.style.backgroundColor = color;
	});

	container.appendChild(box);
}
