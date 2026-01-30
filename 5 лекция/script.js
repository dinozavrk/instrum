//множества Set - структура данных, которая хранит уникальные значения

//узнать  уникальных поситителей сайта
//управление разными доступами
//удаление дубликатов из списка данных

//создание пустого множества
// const meSet = new Set()

const mySet = new Set([1,2,3,4,4,4,4,5])
console.log(...mySet)

console.log(mySet[0]) //не работает

//______________________________________________

//add - добавить элемент в множество

mySet.add(6)
mySet.add(2)
console.log(...mySet)

//_______________________________________________

//delete - удаление элемента множества

mySet.delete(2)
console.log(...mySet)

//________________________________________________

//has - проверяет наличие элемента в множестве
console.log(mySet.has(1))

//________________________________________________

//size - свойство множества
console.log(mySet.size)

//________________________________________________

//перебор элементов
// for(let item of mySet){
//     console.log(item)
// }

// mySet.forEach((item) => {console.log(item)})
//________________________________________________

//clear - удаляет все элементы 
mySet.clear()
console.log(mySet)

//________________________________________________

//как сделать из множества массив
//пример 1 -> убрать из массива повторяющиеся элементы
//и получить массив с уникальными элементами

const order = ['бургер','кола','стрипсы','сырный соус','кола']

const unic = [...new Set(order)]
console.log(...unic)

//_________________________________________________

//пример 2 проверка уникальности массива

const array = [1,2,2,2,3,3,3,4,4,4,5,5,5,]

function hasUnic(arr){
    const set = new Set(arr)
    return set.size !== arr.lenght
}

console.log(hasUnic(array))

const arra = [1,2,3,4,5]
//_____________________
function hasUnicc(arr){
    const set = new Set(arr)
    return set.size === arr.lenght
}

console.log(hasUnicc(arra))
//__________________________________________________

//пример 3 - подсчитывает уникальность слов в строке

const sentence = 'мороз и солнце день чудесный мороз'
function constUnicWords(str){
    const words = str.split(" ")
    console.log(words)

    const set = new Set(words)

    return set.size
}
console.log(constUnicWords(sentence))

//Пример 4. Объединение двух массивов без повторений 
//Даны два массива, нужно объединить их исключая дублирующиеся элементы

const array1 = [1,2,3,4];
const array2 = [3,4,5,6];

function mergeUnique(arr1, arr2){
  
   const merge = [...arr1, ...arr2];
   const set = new Set(merge)
   return [...set];
}
console.log(mergeUnique(array1, array2)); // [1, 2, 3, 4, 5, 6]

