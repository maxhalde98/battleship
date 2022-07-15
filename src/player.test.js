const playerFactory = require('./player');

test('Checks that player has name', () => {
    expect(playerFactory('Max').name).toEqual('Max');
})

test('Checks that real player starts first (isTurn = true)', () => {
    expect(playerFactory('Max').isTurn).toEqual(true);
    expect(playerFactory('Computer').isTurn).toEqual(false);
})

test('Checks that players have a board attribute', () => { 
    let player = playerFactory('Max');
    player.playerBoard.placeShip(player.playerBoard.myShips[0], [2,5], 'Vertical');
    expect(player.playerBoard.grid[2][5]).toEqual(['Carrier', 0]);
})