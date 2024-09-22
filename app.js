const container = document.querySelector('.container');
container.style.width = `80vw`;
container.style.margin = '0 auto';

let gridSizes = parseInt(prompt('Choose grid size between 8 to 64'));
const min = 4;
const max = 48;

const randomizeColor = () => Math.floor(Math.random() * 255 + 1);
const createColorBoxes = (size, randomColor) => {
  if (size < min) {
    size = min;
  } else if (size > max) {
    size = max;
  } else {
    size = size;
  }

  for (let i = 0; i < size ** 2; i++) {
    const colorBoxes = document.createElement('div');
    colorBoxes.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
    colorBoxes.setAttribute('class', 'color-box');
    colorBoxes.style.width = `calc(${container.style.width}
       / ${+size}
    )`;
    colorBoxes.style.height = colorBoxes.style.width;
    container.append(colorBoxes);
  }
};

createColorBoxes(gridSizes, randomizeColor);
