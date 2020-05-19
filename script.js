// Div for grid
const container = document.querySelector('#container')
const grid = document.createElement('div');
i = 0;

function makeGrid() {
    grid.classList.add('grid');
    container.appendChild(grid);
}

function addGridRow() {
    const gridRow = document.createElement('div');
    grid.appendChild(gridRow);
    for (x = 0; x < i; x++) {
        const gridSquare = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridSquare.classList.add('gridSquare');
        gridSquare.addEventListener('mouseenter', colorGrid);
        //gridSquare.textContent = i;
        gridRow.appendChild(gridSquare);
    }
}

function fillGrid() {
    grid.innerHTML = '';
    i = prompt('Select grid size!');
    if (i > 0 && i <= 64) {        
        makeGrid();
        for (y = 0; y < i; y++) {
            addGridRow();
        }
    }   else if (i <= 0) {
        alert('Not so low!');
    }   else {
        alert('Not so high!');
    }
}

function colorGrid() {
    this.style.backgroundColor = 'black';
}
