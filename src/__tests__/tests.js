import Team from '../index';

const character = { name: 'Proter', class: 'cleaner' };
const newCharacter = { name: 'Disco', class: 'dancer' };

test('team add', () => {
  const team = new Team();
  team.add(character);

  const result = new Set();
  result.add(character);

  expect(team.members).toEqual(result);
});

test('team add errors', () => {
  const result = new Set();
  result.add(character);

  expect(() => {
    const team = new Team();
    team.add(character);
    team.add(character);
  }).toThrow(new Error('Такой персонаж уже добавлен!'));
});

test('team addAll', () => {
  const team = new Team();
  team.addAll(character, character, newCharacter);

  const result = new Set();
  result.add(character);
  result.add(newCharacter);

  expect(team.members).toEqual(result);
});

test('team toArray', () => {
  const team = new Team();
  team.addAll(character, character, newCharacter);

  const result = [
    { name: 'Proter', class: 'cleaner' },
    { name: 'Disco', class: 'dancer' },
  ];

  expect(team.toArray()).toEqual(result);
});
