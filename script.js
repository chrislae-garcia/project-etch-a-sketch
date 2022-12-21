const workspace = document.querySelector('.workspace');
const btnColor = document.querySelector('#btn-color');
const btnEraser = document.querySelector('#btn-eraser');

function drawGrid(gridSize) {

  for (y = 0; y < gridSize; y++) {

    const gridY = document.createElement('div');

    for (x = 0; x < gridSize; x++) {

      const gridX = document.createElement('div');
      gridX.classList.add('grid-box');

      gridY.appendChild(gridX);
    }

    workspace.appendChild(gridY);
  }
}
let colorMode = true;

document.addEventListener('click', (e) => {
  if (e.target.tagName != 'BUTTON') return;

  colorMode = true;
  switch (e.target.textContent) {
    case 'Eraser':
      colorMode = false;
      break;
    case 'Clear':
      clearGrid();
      break;
    case 'Edit Grid':
      let gridSize = prompt('Set Grid Size (2-100)');
      
      let child = workspace.lastElementChild

      while (child) {
        workspace.removeChild(child);
        child = workspace.lastElementChild;
      }

      drawGrid(gridSize);
      clearGrid();
      break;
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

drawGrid(16);