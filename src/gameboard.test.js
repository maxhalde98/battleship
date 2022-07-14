const gameboardFactory = require('./gameboard');

test('check if initialized with empty grid (2D array property)', () => {
    expect(gameboardFactory().grid).toEqual(new Array(10).fill(new Array(10)));
})

test('check that each gameboard has one ship of each type (5 total)', () => {
    expect(gameboardFactory().myShips.length).toBe(5);
    expect(gameboardFactory().myShips[0].name).toEqual('Carrier');
    expect(gameboardFactory().myShips[0].length).toBe(5);
    expect(gameboardFactory().myShips[1].name).toEqual('Battleship');
    expect(gameboardFactory().myShips[2].name).toEqual('Destroyer');
    expect(gameboardFactory().myShips[3].name).toEqual('Submarine');
    expect(gameboardFactory().myShips[4].name).toEqual('Patrol Boat');
})

test('check that the gameboard can place ships on board', () => {
    let board = gameboardFactory();
    board.placeShip(board.myShips[0], [2,5], 'Vertical');
    console.log(board.grid[2]);
    expect(board.grid[2][5]).toEqual('Carrier');
    expect(board.grid[3][5]).toEqual('Carrier');
    expect(board.grid[4][5]).toEqual('Carrier');
    expect(board.grid[5][5]).toEqual('Carrier');
    expect(board.grid[6][5]).toEqual('Carrier');
    expect(board.grid[8][5]).toEqual('Carrier');
})