console.log("1 задание")
const prices = [50, 30, 200, 150];
const bolshe100 = prices.some(price => price > 100);

console.log(bolshe100); 
//some - метод массива, который проверяет,
//удовлетворяет ли хотя бы один элемент массива заданному условию

console.log("2 задание")
const num = [22, 17, 30];
const bolshe18 = num.every((Element) => {return Element >= 18})

console.log(bolshe18)
//every - удовлетворяют ли все элементы массива заданному условию

console.log("3 задание")

const Name = ['Света', 'Илья', 'Коля']
console.log(...Name)

console.log("4 задание")
const Prices = [100, 200, 300]
const newPrices = Prices.map((Element) => {return Math.round(Element * 1.1)})

console.log(...newPrices)
//map - изменяет все элементы массива так как ты захочешь

console.log("5 задание")
const number = [1, 4, 6, 9]
const chet = number.filter((Element) => {return Element % 2 === 0})

console.log(...chet)
//filter - метод который создает новый массив которые удволетворяют условие

console.log("6 задание")

const numders = [20, 70, 15]
const sum = numders.reduce((Element, total) => (total + Element))
//reduce - это метод который сворачивает массив в одно единое значение
console.log(sum)

console.log("7 задание")

const words = ['яблоко', 'банан', 'огурец', 'хурма'];
const glasnii = 'аеёиоуыэюя';

const glasnaya = [];
const neGlasnaya = [];

for (let word of words) {
    if (glasnii.includes(word[0].toLowerCase())) {
        glasnaya.push(word);
    } else {
        neGlasnaya.push(word);
    }
}

console.log(...glasnaya);
console.log(...neGlasnaya); 

//word[0] - извлекает первый символ слова
//includes - Проверяется, входит ли этот символ в массив или строку
//includes - это метод для массивов и строк,
//который проверяет наличие элемента (в массиве) или подстроки

console.log("8 задание")
const Names = ['Игорь','Даша','Павел']
const result = Names.join("")

console.log(result)
//join - метод массива который объединяет все его элементы в одну строку

console.log("9 задание")






