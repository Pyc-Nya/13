function verticalWin(map, character) {
    /* 
    indexes reference:
    0 [0, 1, 2]
    1 [0, 1, 2]
    2 [0, 1, 2]
    */

    let flag;
    for (let column = 0; column < 3; column++) {

        flag = true;
        for (let row = 0; row < 3; row++) {
            if (map[row][column] != character) {
                flag = false;
                break;
            }
        }
        if (flag) return true;

    }

    return false;
}


function horizontalWin(map, character) {
    /* 
    indexes reference:
    0 [0, 1, 2]
    1 [0, 1, 2]
    2 [0, 1, 2]
    */

    let flag;
    for (let row = 0; row < 3; row++) {

        flag = true;
        for (let column = 0; column < 3; column++) {
            if (map[row][column] != character) {
                flag = false;
                break;
            }
        }
        if (flag) return true;

    }
    
    return false;
}


function diagonalWin(map, character) {
    /* 
    indexes reference:
    0 [0, 1, 2]
    1 [0, 1, 2]
    2 [0, 1, 2]
    */
   
    return map[0][0] == map[1][1] && map[1][1] == map[2][2] && map[2][2] == character ||
           map[0][2] == map[1][1] && map[1][1] == map[2][0] && map[2][0] == character
}


function draw(map) {
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (map[row][column] == " ") {
                return false;
            }
        }
    }
    return true;
}


function checkEndGame(map) {
    
    if (verticalWin(map, "x")){
        return [true, "Game over: you win - vertical row"]
    }
    if (verticalWin(map, "0")){
        return [true, "Game over: you lose - vertical row"]
    }
    
    if (horizontalWin(map, "x")){
        return [true, "Game over: you win - horizontal row"]
    }
    if (horizontalWin(map, "0")){
        return [true, "Game over: you lose - horizontal row"]
    }
    
    if (diagonalWin(map, "x")){
        return [true, "Game over: you win - diagonal row"]
    }
    if (diagonalWin(map, "0")){
        return [true, "Game over: you lose - diagonal row"]
    }
    
    if (draw(map)) {
        return [true, "Game over: draw"]
    }

    return [false]

}
