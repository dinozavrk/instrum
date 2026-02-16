console.log('номер 1')

const employees = [
    { name: 'Анна', salary: 60000 },
    { name: 'Игорь', salary: 80000 },
    { name: 'Лена', salary: 55000 },
    { name: 'Дмитрий', salary: 90000 },
    { name: 'Ольга', salary: 65000 }
];


const sredsum = employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;

// сначала получаем общую сумму зарплат, делим общую сумму на кол во сатрудников

const visokoZP = employees.filter(employee => employee.salary > sredsum);

console.log('Средняя зарплата:', sredsum);
console.log('Высокооплачиваемые сотрудники:', ...visokoZP);

//filter это метод массива, который отбирает элементы по условию и возвращает новый массив
// Reduce это метод для работы с массивами, который применяет одну и ту же функцию
// ко всем элементам слева-направо, возвращая на каждом этапе результирующее значение.

//_____________________________________________________________________________________________________________

console.log('номер 2')

const projects = [
    { name: 'Проект A', techs: ['React', 'Node.js', 'MongoDB'] },
    { name: 'Проект B', techs: ['Angular', 'Node.js', 'MySQL'] },
    { name: 'Проект C', techs: ['React', 'PostgreSQL'] }
  ];
  
  const uniqueTechs = projects.reduce((acc, p) => {
    p.techs.forEach(techs => { if (!acc.includes(techs)) acc.push(techs); });
    return acc;
  }, []);
  
  console.log(uniqueTechs);


//includes проверяет, есть ли элемент в массиве или подстрока в строке.
//push добавляет один или несколько элементов в конец массива и возвращает новую длину массива

//_____________________________________________________________________________________________________________

console.log('номер 3')

const team = [
    { name: 'Петр', tasksCompleted: 25 },
    { name: 'Анна', tasksCompleted: 30 },
    { name: 'Михаил', tasksCompleted: 20 }
  ];
  
  const vseZadaci = team.reduce((sum, { tasksCompleted }) => sum + tasksCompleted, 0);
  
  console.log(vseZadaci); 

  // Reduce это метод для работы с массивами, который применяет одну и ту же функцию
  //ко всем элементам слева-направо, возвращая на каждом этапе результирующее значение.

//_____________________________________________________________________________________________________________

console.log('номер 4')

const users = [
    { name: 'Алекс', age: 24 },
    { name: 'Катя', age: 19 },
    { name: 'Владимир', age: 31 },
    { name: 'Лена', age: 22 },
    { name: 'Саша', age: 20 }
];


const molodie = users.sort((a, b) => a.age - b.age);

const samyiMolodie = molodie.slice(0, 3);

console.log(samyiMolodie);

//sort это метод массива, который сортирует его элементы и возвращает отсортированный массив
//Slice это метод, который возвращает часть массива (копию) и не изменяет исходный массив. 

//_____________________________________________________________________________________________________________

console.log('номер 5')

const clients = [
    { name: 'Виктория', email: 'victoria@example.com' },
    { name: 'Михаил', email: 'mikhail@example.com' },
    { name: 'Антон', email: 'admin@example.com' }
];
// function hasEmail(email) {
//     return clients.some(client => client.email === email);
// }

// const result = hasEmail('admin@example.com');

// console.log(result);

//______
// console.log(...clients.filter(item => item.email.includes('admin@example.com')))

//some проверяет, удовлетворяет ли хотя бы один элемент массива условию, заданному в передаваемой функции.

//_____________________________________________________________________________________________________________

console.log('номер 6')


const stock = [
    { name: 'Мяч', quantity: 12 },
    { name: 'Кубик', quantity: 5 },
    { name: 'Ручка', quantity: 20 }
];

const inventory = {};

stock.forEach(item => {
    inventory[item.name] = item.quantity;
});

console.log(inventory);






