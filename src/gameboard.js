const shipFactory = require("./ship");

const NAMES = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];

const gameboardFactory = () => {
    return {
        grid: new Array(10).fill(new Array(10)),
        myShips: initializeShips(),
        placeShip(ship, coordinates, direction) {
            let rowIndex = coordinates[0];
            let colIndex = coordinates[1];
            let shipName = ship.name;
            let length = ship.length;
            if (direction === 'Horizontal') {
                for (i=0; i<length; i++) {
                    this.grid[rowIndex][colIndex+i] = shipName;
                }
            }
            else {
                // let col = this.gridcolIndex;
                // for (i=0; i<length; i++) {
                //     this.grid[rowIndex+icolIndex] = shipName;
                // }
                // console.log(this.grid);
            }

        },
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