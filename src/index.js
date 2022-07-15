const playerFactory = require('./player');

const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => {
    launchGame();
})

const launchGame = () => {
    const player = playerFactory(document.getElementById('player-name').value);
    const computer = playerFactory('Computer');

    const playerFleet = player.playerBoard.myShips;
    const playerGrid = player.playerBoard.grid;

    const computerFleet = computer.playerBoard.myShips;
    const computerGrid = computer.playerBoard.grid;

    let row = 0;
    playerFleet.forEach(ship => {
        player.playerBoard.placeShip(ship, [row, 0], 'Horizontal');
        row += 1;
    })

    let col = 0;
    computerFleet.forEach(ship => {
        computer.playerBoard.placeShip(ship, [0, col], 'Vertical');
        col += 1;
    })

    startDOM(player, computer);

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            let cell = document.getElementById(i + '' + j);
            if (playerGrid[i][j] !== undefined) {
                cell.style.backgroundColor = 'orange';
                cell.addEventListener('click', () => {
                    if (computer.isTurn) {
                        cell.style.backgroundColor = 'red';
                        // something
                        computer.isTurn = false;
                        player.isTurn = true;
                    }
                })
            }
            else {
                cell.addEventListener('click', () => {
                    if (computer.isTurn) {
                        cell.style.backgroundColor = 'lightblue';
                        // something
                        computer.isTurn = false;
                        player.isTurn = true;
                    }
                })
            }
        }
    }

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            let cell = document.getElementById('c' + i + j);
            if (computerGrid[i][j] !== undefined) {
                cell.addEventListener('click', () => {
                    if (player.isTurn) {
                        cell.style.backgroundColor = 'red';
                        // something
                        player.isTurn = false;
                        computer.isTurn = true;
                    }
                })
            }
            else {
                cell.addEventListener('click', () => {
                    if (player.isTurn) {
                        cell.style.backgroundColor = 'lightblue';
                        // something
                        player.isTurn = false;
                        computer.isTurn = true;
                    }
                })
            }
        }
    }

    

}

const startDOM = (player, computer) => {
    const playDiv = document.getElementById('play-div');
    playDiv.innerHTML = '';
    
    const playerDiv = document.createElement('div');
    playerDiv.id = 'player-div';
    playerDiv.classList.add('game');
    playerDiv.textContent = player.name.toUpperCase();

    const playerTable = document.createElement('table');
    playerTable.id = 'player-table';
    for (i = 0; i < 10; i++) {
        let row = document.createElement('tr');
        for (j = 0; j < 10; j++) {
            let cell = document.createElement('td');
            cell.id = i + '' + j;
            cell.classList.add('cell');
            
            row.appendChild(cell);
        }
        playerTable.appendChild(row);
    }
    playerDiv.appendChild(playerTable);

    const computerDiv = document.createElement('div');
    computerDiv.id = 'computer-div';
    computerDiv.classList.add('game');
    computerDiv.textContent = computer.name.toUpperCase();

    const computerTable = document.createElement('table');
    computerTable.id = 'computer-table';
    for (i = 0; i < 10; i++) {
        let row = document.createElement('tr');
        for (j = 0; j < 10; j++) {
            let cell = document.createElement('td');
            cell.id = 'c' + i + '' + j;
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        computerTable.appendChild(row);
    }
    computerDiv.appendChild(computerTable);

    playDiv.appendChild(playerDiv);
    playDiv.appendChild(computerDiv);
}