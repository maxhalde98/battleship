const shipFactory = require('./ship');

test('ensures that ships are given a valid length as input arg', () => {
    expect(shipFactory(1)).toEqual('Invalid ship'),
    expect(shipFactory('Banana Boat')).toEqual('Invalid ship'),
    expect(shipFactory('Carrier').length).toBe(5);
});

test('ensures that ships have an array property that marks where theyve been hit', () => {
    expect(shipFactory('Patrol Boat').hitMarks).toEqual([false, false]),
    expect(shipFactory('Carrier').hitMarks).toEqual([false,false,false,false,false]);
});

test('ensures that ships have a hit function that takes a position and marks it as hit', () => {
    let battleship = shipFactory('Battleship');
    battleship.hit(3);
    expect(battleship.hitMarks[3]).toEqual(true);
    expect(battleship.hitMarks[2]).toEqual(false);
    expect(battleship.hit(-1)).toEqual('Invalid hit position');
    expect(battleship.hit(6)).toEqual('Invalid hit position');
});

test('ensures that ships have a isSunk function that checks whether ship is sunk or not', () => {
    let sunkShip = shipFactory('Patrol Boat');
    sunkShip.hit(0);
    sunkShip.hit(1);
    expect(sunkShip.isSunk()).toEqual(true);
    expect(shipFactory('Battleship').isSunk()).toEqual(false);
});

