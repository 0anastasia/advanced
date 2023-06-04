import findBy from '../app';

const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

test('Search on name', () => {
  const finder = findBy('name', 'урон');
  const example = [
    {
      name: 'урон',
      type: 'help',
      description: 'Страница описания элемента интерфейса',
    },
  ];

  expect(results.filter(finder)).toEqual(example);
});

test('Search on type', () => {
  const finder = findBy('type', 'attack');
  const example = [
    {
      name: 'заклинание',
      type: 'attack',
      description: 'Атака магическим заклинанием',
    },
  ];

  expect(results.filter(finder)).toEqual(example);
});

test('Search on exist param', () => {
  const finder = findBy('name', 'Петр');
  const example = [];

  expect(results.filter(finder)).toEqual(example);
});
