import Character from '../Character';

test('create Character name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('a1234567890', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character type Error', () => {
  expect(() => new Character('Harry', 'Muggle')).toThrowError(new Error('Такого класса нет'));
});

test('create Character name ok', () => {
  const character = new Character('Harry', 'Magician');
  expect(character.name).toBe('Harry');
});

test('create Character type ok', () => {
  const character = new Character('Harry', 'Magician');
  expect(character.type).toBe('Magician');
});

test('create Character ok', () => {
  const character = new Character('Harry', 'Magician');
  const result = {
    name: 'Harry',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('create Character levelUp 0', () => {
  const character = new Character('Harry', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('create Character levelUp ok', () => {
  const character = new Character('Harry', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
});

test('create Character damage', () => {
  const character = new Character('Harry', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
});

test('create Character damage high', () => {
  const character = new Character('Harry', 'Magician');
  character.defence = 10;
  character.damage(500);
  expect(character.health).toBe(0);
});
