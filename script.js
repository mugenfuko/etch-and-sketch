// Div for grid
const container = document.querySelector('#container')
const grid = document.querySelector('.grid');

function addBreak() {
    const br = document.createElement('div');
    br.classList.add('break');
    grid.appendChild(br);
}
function addGridRow() {
    for (i = 0; i < 16; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.textContent = i;
        grid.appendChild(gridSquare);
    }
}

for (x = 0; x < 16; x++) {
    addGridRow();
    addBreak();
}

