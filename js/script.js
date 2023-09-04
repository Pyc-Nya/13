"use strict";

let table = document.querySelector('.table');
let refreshButton = document.querySelector('.text__refresh span');
let moveInfo = document.querySelector('.text__item');
let endGameScreen = document.querySelector('.endgame');
let endGameRefreshButton = document.querySelector('.endgame__button');
let endGameText = document.querySelector('.endgame__text');


let map = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

table.addEventListener("click", handler);
refreshButton.addEventListener("click", refresh);
endGameRefreshButton.addEventListener("click", newGame);
let computerMove = true;
let isRefreshed;

function handler(e) {
    if (e.target.tagName != 'TD') return;

    let rowIndex = e.target.parentNode.rowIndex;
    let cellIndex = e.target.cellIndex;
    if (map[rowIndex][cellIndex] != " ") return;

    let target = e.target.querySelector('.cross');

    if (computerMove) {
        target.style.display = "inline-block";
        map[rowIndex][cellIndex] = "x";
        computerMove = false;
        if (game()) return;

        moveInfo.innerHTML = 'Ход Компьютера';
        isRefreshed = false;

        setTimeout(() => {
            if (!isRefreshed) {
                makeMoveComputer(map);
                moveInfo.innerHTML = 'Ваш ход';
                computerMove = true;
                setTimeout(() => {
                    if (game()) return;
                }, 50);
            }
        }, 500);
    }
}


function refresh() {
    let spans = document.querySelectorAll('td span');
    isRefreshed = true;
    for (let span of spans) {
        span.style.display = "none";
    }
    moveInfo.innerHTML = 'Ваш ход';
    
    map = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
    computerMove = true;
}

function game() {
    let gameStatus = checkEndGame(map);
    if (gameStatus[0]) {
        setTimeout(() => {
            endGameText.innerHTML = gameStatus[1];

            endGameScreen.style.display = 'flex';
            setTimeout(() => {
                endGameScreen.style.opacity = 1;
            }, 30);
        }, 50);
    }
    return gameStatus[0];
}

function newGame() {

    endGameScreen.style.opacity = 0;
    setTimeout(() => {
        endGameScreen.style.display = 'none';
    }, 500);
    
    refresh();
}

