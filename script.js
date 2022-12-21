const workspace = document.querySelector('.workspace');
const btnColor = document.querySelector('#btn-color');
const btnEraser = document.querySelector('#btn-eraser');

let gridSize = 16;

for (y = 0; y < gridSize; y++) {

  const gridY = document.createElement('div');

  for (x = 0; x < gridSize; x++) {

    const gridX = document.createElement('div');
    gridX.classList.add('grid-box');
    gridX.textContent = x;

    gridY.appendChild(gridX);
  }

  workspace.appendChild(gridY);
}

let colorMode = true;

document.addEventListener('click', (e) => {
  if (e.target.tagName != 'BUTTON') return;

  switch (e.target.textContent) {
    case 'Color':
      colorMode = true;
      break;
    case 'Eraser':
      colorMode = false;
      break;
    case 'Clear':
      clearGrid();
    default:
      return;
  }
});


function clearGrid() {
  const boxes = document.querySelectorAll('.grid-box');

  boxes.forEach((element) => {
    element.classList.remove('color-box');
  });
}

document.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('grid-box')) return;
  console.log(e.target.classList.contains('grid-box'));

  if (colorMode)
    e.target.classList.add('color-box');
  else
    e.target.classList.remove('color-box');
});