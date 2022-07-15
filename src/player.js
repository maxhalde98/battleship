const gameboardFactory = require('./gameboard')

const playerFactory = (name) => {
    let isTurn = true;
    if (name === 'Computer') {
        isTurn = false;
    }
    return {
        name,
        isTurn, 
        playerBoard: gameboardFactory(),
        attack(player, coordinates) {

        } 
    }
}

module.exports = playerFactory;