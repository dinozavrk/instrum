console.log("номер 1")

const nam =[1,2,3,4,5,6,7,8,9]
console.log(nam.sort((nam1,nam2)=>{
    return nam2 - nam1
}))
console.log(nam[1])
// sort - метод массивов, который сортирует элементы массива 
console.log("номер 2")

const a=[1,2,3,4,5,6,7,8,9]
function dublic(a) {
    for(let i=1; i<a.length; i++){
        if(a[i] === a[i - 1]) {
            return true}
            return false}
        }
console.log(dublic(a))

console.log("_________________________________")
console.log("номер 3")

const arr = [4,6,3,7,9,3]; 
let sum = 0;

for (let i = 0; i < arr.length; i++) {
// проверяем является ли индекс i нечетным
  if (i % 2 !== 0) {
    sum += arr[i]; 
  }
}
console.log(sum); 

console.log("_________________________________")
console.log("номер 4")

const b = (a.reverse())
function polindrom (b, a){
    if (b === a) {
        return true}
        return false}
console.log(polindrom(a, b)) 

console.log("_________________________________")
console.log("номер 5")
const numbers = [1, 2, 2, 3, 4, 4];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); 
// set - хранит только уникальные значения, а затем преобразовать результат обратно в массив
// ... - оператор «распыления» или «распаковки»

console.log("_________________________________")
console.log("номер 6")
const ar = [-1, -4, 7, -2, 8, 10];
const poloz = [];
const noPoloz = [];

for (let i of ar) {
    if (i > 0) {
        poloz.push(i);
    } else {
        noPoloz.push(i);
    }
} 
console.log(...poloz);
console.log(...noPoloz);
// push - добавляет один или несколько новых элементов в конец существующего массива, изменяет сам массив и возвращает его новую длину

console.log("_________________________________")
console.log("номер 8 ")

const num1 = [1, 2, 3, 15];
const num2 = [1, 2, 3, 4];

const kratno = (arr) => arr.some(item => typeof item === 'number' && item % 5 === 0); 
// typeOf - оператор, который возвращает строку, указывающую тип данных переменной или выражения
// some - метод массива, который проверяет, удовлетворяет ли хотя бы один элемент массива заданному условию
console.log(kratno(num1)); 
console.log(kratno(num2)); 

console.log("_________________________________")
console.log("номер 10")
function bolsheIliMenshe(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
// Если текущий элемент массива меньше или равен предыдущему элементу то фолс
            return false; 
        }
    }
    return true; 
}
console.log(bolsheIliMenshe([1, 2, 3, 4])); 
console.log(bolsheIliMenshe([1, 2, 2, 3])); 

console.log("_________________________________")
console.log("_________________________________")
console.log("номера 7,9 не понял как решать")





