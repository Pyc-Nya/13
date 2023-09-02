function randRange(range) {
    return Math.floor(Math.random() * (range - 1));
}


function makeMoveComputer(map) {
    let freeCells = [];

    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (map[row][column] == " ") {
                freeCells.push([row, column]);
            }
        }
    }

    let n = randRange(freeCells.length);
    let row = freeCells[n][0];
    let column = freeCells[n][1];

    map[row][column] = "0";
    let cell = table.rows[row].cells[column];
    cell.querySelector('span').style.display = "inline-block";
}

