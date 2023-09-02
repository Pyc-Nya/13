"use strict";

let table = document.querySelector('.table');
let refreshButton = document.querySelector('.text__refresh span');
let moveInfo = document.querySelector('.text__item');

let map = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

table.addEventListener("click", handler);
refreshButton.addEventListener("click", refresh);

function handler(e) {
    if (e.target.tagName != 'TD') return;

    let rowIndex = e.target.parentNode.rowIndex;
    let cellIndex = e.target.cellIndex;
    if (map[rowIndex][cellIndex] != " ") return;

    let target = e.target.querySelector('.cross');


    target.style.display = "inline-block";
    map[rowIndex][cellIndex] = "x";
    if (game()) return;

    moveInfo.innerHTML = 'Ход Компьютера';

    setTimeout(() => {
        makeMoveComputer(map);
        moveInfo.innerHTML = 'Ваш ход';
        setTimeout(() => {
            if (game()) return;
        }, 5);
    }, 500);
    
}


function refresh() {
    let spans = document.querySelectorAll('td span');
    for (let span of spans) {
        span.style.display = "none";
    }
    moveInfo.innerHTML = 'Ваш ход';
    
    map = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
}

function game() {
    let gameStatus = checkEndGame(map);
    if (gameStatus[0]) {
        setTimeout(() => {
            alert(gameStatus[1]);
            refresh();
        }, 5);
    }
    return gameStatus[0];
}
