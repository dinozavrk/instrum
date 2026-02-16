
const count = 1000000; 
const array = [];

for (let i = 0; i < count; i++) {
    array.push(i);
}

console.log(`Массив заполнен. В нем ${array.length} элементов.`);


const startFor = performance.now();

for (let i = 0; i < array.length; i++) {
    let item = array[i]; 
}

const endFor = performance.now();
const timeFor = endFor - startFor;



const startForEach = performance.now();

array.forEach((item) => {
    let res = item; 
});

const endForEach = performance.now();
const timeForEach = endForEach - startForEach;




console.log(`Классический цикл for: ${timeFor.toFixed(4)} мс`);
console.log(`Метод forEach(): ${timeForEach.toFixed(4)} мс`);

if (timeFor < timeForEach) {
    console.log(`ИТОГ: Цикл FOR оказался быстрее.`);
} else {
    console.log(`ИТОГ: Метод FOREACH оказался быстрее.`);
}

