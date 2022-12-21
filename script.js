const workspace = document.querySelector('.workspace');

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