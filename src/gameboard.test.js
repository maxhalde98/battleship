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

test('check that the gameboard can place ships horizontally on board', () => {
    let board = gameboardFactory();
    board.placeShip(board.myShips[4], [2,5], 'Horizontal');
    expect(board.grid[2][5]).toEqual(['Patrol Boat', 0]);
    expect(board.grid[2][6]).toEqual(['Patrol Boat', 1]);
    expect(board.grid[1][5]).toEqual(undefined);
    expect(board.grid[2][7]).toEqual(undefined);
})

test('check that the gameboard can place ships vertically on board', () => {
    let board = gameboardFactory();
    board.placeShip(board.myShips[4], [2,5], 'Vertical');
    expect(board.grid[2][5]).toEqual(['Patrol Boat', 0]);
    expect(board.grid[3][5]).toEqual(['Patrol Boat', 1]);
    expect(board.grid[1][5]).toEqual(undefined);
    expect(board.grid[2][7]).toEqual(undefined);
})

test('check that the gameboard has a receiveAttack function that marks missed attacks as missed on board', () => {
    let board = gameboardFactory();
    board.receiveAttack([2,5]);
    expect(board.grid[2][5]).toEqual('missed');
})

test('check that the gameboard has a receiveAttack function that hits the appropriate ship when needed', () => {
    let board = gameboardFactory()
    board.placeShip(board.myShips[4], [2,5], 'Vertical');
    board.receiveAttack([2,5]);
    expect(board.myShips[4].hitMarks[0]).toEqual(true);
    expect(board.myShips[4].hitMarks[1]).toEqual(false);
})