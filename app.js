const container = document.querySelector('.container');

const gridSizes = prompt('How many pixel-grid do you want!');

const randomizeColor = () => Math.floor(Math.random() * 255 + 1);

for (let i = 0; i < gridSizes ** 2; i++) {
  const colorBoxes = document.createElement('div');
  colorBoxes.style.backgroundColor = `rgb(${randomizeColor()}, ${randomizeColor()},${randomizeColor()})`;
  colorBoxes.setAttribute('class', 'color-box');
  colorBoxes.style.width = '16px';
  colorBoxes.style.height = '16px';
  container.append(colorBoxes);
}

container.style.width = ` ${+gridSizes * 16}px`;
container.style.height = ` ${+gridSizes * 16}px`;

const colorBoxesAll = document.querySelectorAll('.color-box');
