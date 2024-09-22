const container = document.querySelector('.container');
container.style.width = `80vw`;
container.style.margin = '0 auto';

const gridSizes = prompt('How many grid do you want!');

const randomizeColor = () => Math.floor(Math.random() * 255 + 1);

for (let i = 0; i < gridSizes ** 2; i++) {
  const colorBoxes = document.createElement('div');
  colorBoxes.style.backgroundColor = `rgb(${randomizeColor()}, ${randomizeColor()},${randomizeColor()})`;
  colorBoxes.setAttribute('class', 'color-box');
  colorBoxes.style.width = `calc(${container.style.width}
     / ${+gridSizes}
  )`;
  colorBoxes.style.height = colorBoxes.style.width;
  container.append(colorBoxes);
}

const colorBoxesAll = document.querySelectorAll('.color-box');
