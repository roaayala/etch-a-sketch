const container = document.querySelector('.container');

function generateRandomColor() {
	return Math.floor(Math.random() * 255);
}

const size = 32;

for (let i = 1; i <= size * size; i++) {
	const box = document.createElement('div');
	box.setAttribute(
		'style',
		`background-color: grey; width: ${600 / size}px; height: ${600 / size}px;`,
	);

	box.addEventListener('mouseenter', (event) => {
		event.target.style.backgroundColor = `rgb(${generateRandomColor()},${generateRandomColor()},${generateRandomColor()})`;
	});

	container.appendChild(box);
}
