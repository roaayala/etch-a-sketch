const container = document.querySelector('.container');

const size = 16;

for (let i = 1; i <= size * size; i++) {
	const box = document.createElement('div');
	box.setAttribute(
		'style',
		`background-color: black; width: ${600 / size}px; height: ${600 / size}px;`,
	);

	box.addEventListener('mouseenter', (event) => {
		event.target.style.backgroundColor = `white`;
	});

	container.appendChild(box);
}
