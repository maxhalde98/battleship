const shipFactory = require("./ship");

const NAMES = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];

const gameboardFactory = () => {
    return {
        grid: [[],[],[],[],[],[],[],[],[],[]],
        myShips: initializeShips(),
        placeShip(ship, coordinates, direction) {
            let rowIndex = coordinates[0];
            let colIndex = coordinates[1];
            let shipName = ship.name;
            let length = ship.length;
            if (direction === 'Horizontal') {
                for (i=0; i<length; i++) {
                    this.grid[rowIndex][colIndex+i] = [shipName, i];
                }
            }
            else {
                for (i=0; i<length; i++) {
                    this.grid[rowIndex+i][colIndex] = [shipName, i];
                }
            }

        },
        receiveAttack(coordinates) {
            let rowIndex = coordinates[0];
            let colIndex = coordinates[1];
            if (this.grid[rowIndex][colIndex] === undefined) {
                this.grid[rowIndex][colIndex] = 'missed';
            }
            else {
                for (i=0; i<this.myShips.length; i++) {
                    if (this.grid[rowIndex][colIndex][0] === this.myShips[i].name) {
                        this.myShips[i].hit(this.grid[rowIndex][colIndex][1]);
                    }
                }
            }
        },
        checkIfAllSunk() {
            let isOver = true;
            this.myShips.forEach(ship => {
                if (!ship.isSunk()) {
                    isOver = false;
                }
            });
            return isOver;
        }
    };

}

const initializeShips = () => {
    const myShips = new Array(5);
    for (i=0; i<NAMES.length; i++) {
        myShips[i] = shipFactory(NAMES[i]);
    }
    return myShips;
}

module.exports = gameboardFactory;