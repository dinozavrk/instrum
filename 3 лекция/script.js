// array.forEach(=> {});
// forEach - применяет функцию-аргумент для каждого элемента массива

const colors = ['красный', 'зеленый', 'синий']

colors.forEach((element, index) => {
    console.log(`${index}: ${element}`)
})

//_______________________________________________________________________________
//array.some(()=>{})
//some проверяет, есть ли в массиве хотя бы один элемент удовлетворяющий условие
//some возвращает true или false 

const numbers = [52,42,13,56]
const hasEven = numbers.some((element) => {
    return element % 2 === 0
})
console.log(hasEven)

//_______________________________________________________________________________________

//array.every(() => {})
//проверяет удовлетворяет ли ВСЕ элементы условию
//возвращает true или false

const num = [2,4,6]
const allEven = num.every((element) => {return element % 2 === 0 })
console.log(allEven)

//____________________________________________________________________________________

//три освновых метода для преобразования массива

//array.map(() => {}) 
//изменяет каждый элемент массива, возвращает новый массив той же длины с измененными элементами

const oldNum = [1,2,3]
const newNum = oldNum.map ((elem) => {return elem * 2})
console.log(...newNum) //[2 4 6]

//array.filter(() => {}) 
//возвращает массив в котором содержатся только часть элементов исходного массива, которая соответствует условию

const unFiltred = [1,4,7,10];
const filtred = unFiltred.filter((elem)=>{return elem > 5})
console.log(...filtred)

//array.reduce(() => {})
//сворачивает массив до одного значения (число или строка, или совсем другого массива)

const reduceNum = [1,2,3,4,5,6,7,8,9,1,2,3,5,8,5]
const sum = reduceNum.reduce((acc, elem) => {return acc + elem}, 0) //acc = 0
console.log(sum)

//______________________________________________________________________________

const words = ['привет', 'мир', '!']
const sentence = words.reduce((acc, elem) => {return acc + ' ' + elem}, )
console.log(sentence) 
// пока все



