// //Массивы - Array 

// // let user_name = "Степан";
// let user_age = 19;


// let user_name1 = "Александр";

// // let user_age1 = 35;


// const empty = [];
// const numbers = [1,4,5,7,8,12,1000];


// const mixed = [1, "hello", true, null];

// const user1 = ["Степан", 19, "Программист"];

// console.log(user1[0]) //Степан
// console.log(user1[1]) // 19

//Длина массива
// console.log(user1.length); //3
// console.log(mixed.length);//4

//Перебор элементов массива 
//Цикл for 

// for (let item in mixed){
//   console.log(item) 
// }
// for (let item of mixed){
//   console.log(item) 
// }

//Методы массивов 




// const arr = [1,2,3];
// arr.push(4,5,6,7,8);
// console.log(arr);


// arr.unshift(0,0,100);
// console.log(arr);


// let deleted = arr.pop();
// console.log(arr);
// console.log(deleted) //8


// deleted = arr.shift();
// console.log(arr);
// console.log(arr);




// console.log("slice")
// console.log(arr.slice()); //Тот же самый массив 
// console.log(arr.slice(3)); //Все элементы с 3его до конца
// console.log(arr.slice(3,6)); //Получаем элементы с индексами 3,4,5


// const newArr = arr.slice(2,7);
// console.log(newArr); //[ 1, 2, 3, 4, 5 ]
// console.log(arr);



//splice(start, deleteCount, newItem )
//newItem

// const programming = ["С++", "Python", "JS", "Go"];
// programming.splice(1,2)
// console.log(programming)

// programming.splice(2, 0 , "Java Script");
// console.log(programming);




