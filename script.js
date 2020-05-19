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
        //gridSquare.textContent = i;
        gridRow.appendChild(gridSquare);
    }
}

function fillGrid() {
    i = prompt('big chungus');
    if (i > 0 && i <= 64) {
        grid.innerHTML = '';
        makeGrid();
        for (y = 0; y < i; y++) {
            addGridRow();
        }
    }   else if (i == 0) {
        alert('Not so low!');
    }   else {
        alert('Not so high!');
    }
}