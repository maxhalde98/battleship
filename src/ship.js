const NAMES = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];

const shipFactory = (name) => {

    if (!NAMES.includes(name)) {
        return 'Invalid ship';
    }

    let length = 0;
    if (name === 'Carrier') {
        length = 5;
    }
    else if (name === 'Battleship') {
        length = 4;
    }
    else if (name === 'Patrol Boat') {
        length = 2;
    }
    else {
        length = 3;
    }
    
    return {
        length, 
        name,
        hitMarks: Array(length).fill(false), 
        hit(position) {
            if (position > this.length || position < 1) {
                return 'Invalid hit position'
            }
            this.hitMarks[position-1] = true;
        },
        isSunk() {
            let sunk = true;
            for (i=0; i<this.length; i++) {
                if (this.hitMarks[i] === false) {
                    sunk = false;
                }
            }
            return sunk;
        }
    };
    
};

module.exports = shipFactory;