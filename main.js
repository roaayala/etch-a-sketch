const container = document.querySelector('.container');

function generateRandomColor() {
	return Math.floor(Math.random() * 255);
}

const size = 16;

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
			console.log(defaultOpacity);
		}
	});

	container.appendChild(box);
}
