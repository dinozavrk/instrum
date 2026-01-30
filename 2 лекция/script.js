//объединение массивов

const a = [1,2]
const b = [3,4]
// console.log(a+b)

//_________________________________________________

//concat

// console.log(a.concat(b))
// console.log(a)
// console.log(b)

//__________________________________________________

//indexOf() - находит индекс элемента


// console.log(a.indexOf(1)) // 0
// console.log(a.indexOf(2)) // 1
// console.log(a.indexOf(5)) // -1

//___________________________________________________

//lastIndexOf() - находит индекс элемента

// const arr = [1,2,0,1,2]

// console.log(arr.indexOf(2)) //1
// console.log(arr.lastIndexOf(2)) // 4

//____________________________________________________

//includes() - проверяет, есть ли элемент в массиве (true, false)

// console.log(arr.includes(0)) // true
// console.log(arr.includes(100)) // false

//____________________________________________________

//сортировка и разворот

//reverse() - отзеркаливает элементы массива

// const num = [1,2,100,42,52]
// console.log(num.reverse()) // 52, 42, 100, 2, 1

//_____________________________________________________

//sort - сортирует массив

const numbers = [1,5,2,8,9,7,2,4,]
// const latters = ["п","т","в","р","н"]
// console.log(numbers.sort()) //[1, 2, 2, 4, 5, 7, 8, 9]
// console.log(latters.sort()) //['в', 'н', 'п', 'р', 'т']

//____________________________________________________

// console.log(numbers.sort((item1,item2)=>{   //[ 0, 1, 3, 3, 4, 6, 11, 51, 71 ]
//     return item1 -item2
// }));

// console.log(numbers.sort((item1,item2)=>{   //[ 71, 51, 11, 6, 4, 3, 3, 1, 0 ]
//     return  item2 - item1
// }));

//____________________________________________________

// for (let item of numbers){
//     console.log(item)
// }

//____________________________________________________

//forEach - запускает переданную ему функцию для каждого элемента массива

// numbers.forEach((item)=>(console.log(item)))

//____________________________________________________







