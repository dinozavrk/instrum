
const { stdout } = require('process');
const readline = require('readline');


//Двумерный массив 

const field = [[1,2,3],[11,22,33],[111,222,333]];
console.log(field[0]); //[ 1, 2, 3 ]
console.log(field[1]); //[ 11, 22, 33 ]


console.log(field[1][2]); //33
field[1][2] = "33 коровы";
console.log(field);


//Вывод эл-ов двумерного массива

// field.forEach((array)=>{
//       array.forEach((item)=>{
//         console.log(item);
//       })
// })


field.forEach((array)=>{
      console.log(array.join(" "));
})

//Чтение данных с консоли 

//создаем интерфейс для ввода данных 
// const interface = readline.createInterface({
//   input:process.stdin, 
//   output:process.stdout,
// })


//Обработчик ввода 

// interface.question('Введите что-нибудь: ', (answer)=>{
//       //тут можно обработать answer
//       console.log(`Вы ввели: ${answer}`);  
//       interface.close();
// })


//Получение рандомного числа

// сгенерировать 0,1,2
console.log(Math.floor(Math.random() * (3 - 0) + 0));