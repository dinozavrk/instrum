// // //_________________________1

console.log("1 номер")

const emails = ['a@example.com', 'b@example.com', 'a@example.com', 'c@example.com'];
const oneEmail = [...new Set(emails)];
console.log(...oneEmail);

// // //_________________________2

console.log("2 номер")

const visitorIPs = ['192.168.0.1', '192.168.0.2', '192.168.0.1', '192.168.0.3'];
const unecPerson = [...new Set(visitorIPs)]
console.log(...unecPerson)

// // //_________________________3

console.log("3 номер")

const event1Participants = ['Иван', 'Мария', 'Петр'];
const event2Participants = ['Мария', 'Алексей', 'Иван'];
const vmeste = [...event1Participants, ...event2Participants];
const unicPer = [...new Set(vmeste)];

console.log(...unicPer);

// // //_________________________4

console.log("4 номер")

const storeAItems = ['молоко', 'хлеб', 'масло'];
const storeBItems = ['хлеб', 'масло', 'сыр'];

const intersection = storeAItems.filter(item => 
    storeBItems.includes(item)
);

console.log(...intersection); 
//filter - Метод который создаёт новый массив, содержащий только те элементы исходного массива,
// которые удовлетворяют заданному условию.
//includes - Метод проверяет наличие элемента в массиве или подстроки в строке

// // //_________________________5

console.log("5 номер")

const storeAItemss = ['молоко', 'хлеб', 'масло'];
const storeBItemss = ['хлеб', 'масло'];

const setB = new Set(storeBItemss);

const uniqueTovar = storeAItems.filter(item => !setB.has(item));

console.log(...uniqueTovar); 


// // //_________________________6

console.log("6 номер")

const registeredUsers = ['Иван', 'Мария', 'Петр'];

const usernameToCheck = 'Алексей';

const userExists = registeredUsers.includes(usernameToCheck);

console.log(`Пользователь ${usernameToCheck} существует: ${userExists}`);

//includes - Метод проверяет наличие элемента в массиве или подстроки в строке

// // //_________________________7

console.log("7 номер")

const hashtags = ['#жара', '#отдых', '#жара', '#лето', '#отдых'];

const uniqueHashtags = [...new Set(hashtags)];

console.log(...uniqueHashtags); 


// // //_________________________8

console.log("8 номер")

const allOptions = ['VIP', 'Standard', 'Economy'];

const userOptions = ['VIP', 'Standard'];

function hasAllOptions(arr1, arr2){
    if (arr1.length === arr2.length){
        return true
    }
    else{
        return false
    }
}
console.log(hasAllOptions(allOptions, userOptions))

// // //_________________________9

console.log("9 номер")

const stockItems = ['ноутбук', 'клава', 'мышь', 'монитор'];

const productToCheck = 'принтер';

const hasProduct = stockItems.includes(productToCheck);
console.log(`Продукт ${productToCheck} находится на складе: ${hasProduct}`);