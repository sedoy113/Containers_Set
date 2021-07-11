import Team from '../app';
import Character from '../Character';

test('add 1 teammate', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Magician');
  team.add(person1);
  expect(team.members).toContain(person1);
  expect(team.members.size).toBe(1);
});

test('add non-inique', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Magician');
  team.add(person1);
  expect(() => team.add(person1)).toThrowError();
});

test('add all 4 teammate', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Magician');
  const person2 = new Character('Person2', 'Bowman');
  const person3 = new Character('Person3', 'Magician');
  const person4 = new Character('Person4', 'Undead');
  team.addAll(person1, person2, person3, person4);
  expect(team.members).toContain(person1, person2, person3, person4);
  expect(team.members.size).toBe(4);
});

test('add all unique teammate', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Magician');
  const person2 = new Character('Person2', 'Bowman');
  const person3 = new Character('Person3', 'Magician');
  const person4 = new Character('Person4', 'Undead');
  team.add(person1);
  team.add(person2);
  expect(team.members.size).toBe(2);
  team.addAll(person1, person2, person3, person4);
  expect(team.members).toContain(person1, person2, person3, person4);
  expect(team.members.size).toBe(4);
});

test('members to Array', () => {
  const team = new Team();
  const person1 = new Character('Person1', 'Magician');
  const person2 = new Character('Person2', 'Bowman');
  const person3 = new Character('Person3', 'Magician');
  const person4 = new Character('Person4', 'Undead');
  team.addAll(person1, person2, person3, person4);
  const arr = team.toArray();
  expect(arr).toEqual([person1, person2, person3, person4]);
});
