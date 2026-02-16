
console.log('номер 1')
const car = {
    brand: 'Mitsubishi',
    model: "Lancer Х",
    year: 2007,
    getAge: function (){
        return 2026 - (car.year)
    }
}
console.log(car.getAge())

//_______________________________________________________

console.log('номер 2')
const book = {
    pages: 384,
    author: 'Dmitriy Gluhovskiy',
    name: 'metro 2033'
}
console.log(Object.keys(book))
console.log(Object.values(book))
// Object.keys - метод который возвращает массив с ключами (свойствами) объекта
// Object.values - метод который возвращает массив значений перечисляемых свойств объекта

//_______________________________________________________

console.log('номер 3')
const calculator = {
    a:40,
    b:50,
    add: function(){
        return calculator.a+calculator.b
    },
    subtract: function(){
        return calculator.a-calculator.b
    },
    multiply: function(){
        return calculator.a*calculator.b
    },
    divide: function(){
        return calculator.a/calculator.b
    }
}
console.log(calculator.add())
console.log(calculator.subtract())
console.log(calculator.multiply())
console.log(calculator.divide())

//_______________________________________________________

console.log('номер 4')
const user = {
    name : 'Иван', 
    age: 18,
    isStudent: true
}
console.log(Object.keys(user))

console.log("ИЛИ")

const users = {
    name: "Иван",
    age: 25,
    city: "Москва",
    isStudent: true
};


for (let key in users) {

    if (users.hasOwnProperty(key)) {
        console.log(`${key}: ${users[key]}`);
    }
}


//_______________________________________________________

console.log('номер 5')
const student = {
    nameStud: 'ВАНЯ',
    ageStud: 18,
    grades:[5,4,3,5,5,4],
    newGrades: function(){
        return student.grades.push(5)
    }
}
console.log(student.newGrades())

//_______________________________________________________

console.log('номер 6')
const settings = {
    theme: 'light',
    language: 'ru',
    fontSize: 14,
    showNotifications: true
};

const newSettings = {
    darkMode: true,
    castomLanguage: 'eng',
    customFont: 'Arial',
    enableDarkMode: false
};


const generalSettings = Object.assign({}, settings, newSettings);

console.log(generalSettings);
//Object.assign - метод который копирует свойства и значения исходного объекта,
// возвращая при этом новый объект.

//_______________________________________________________

console.log('номер 7')
const person = {
    name: "Иван",  
    sayHello: function() {
        console.log(`Здравствуйте, я ${this.name}`);
    }
};


person.sayHello(); 

//_______________________________________________________

console.log('номер 8')

const per = {
    name: 'ivan',
    age: 19
}

const newPer = {...per}
per.age = 20
console.log(newPer)


//_______________________________________________________

console.log('номер 9')
const counter = {
    count: 0,
    increment: function() {
        this.count++;
        return this;
    },
// Increment - это оператор, который увеличивает значение переменной на единицу
    decrement: function() {
        if (this.count > 0) {
            this.count--;
        }
        return this;
    },
// decrement — это арифметический оператор, который уменьшает значение переменной на 1
    reset: function() {
        this.count = 0;
        return this;
    }
};
// Reset - это событие, которое срабатывает при сбросе формы до исходного состояния,
// очищая все введённые пользователем данные.

console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0
counter.reset();
console.log(counter.count); // 0

//This — это ключевое слово  которое ссылается на объект,
// в контексте которого была вызвана функция

//_______________________________________________________

console.log('номер 10')

const product = {
    price: 1000,  
    applyDiscount: function(percent) {

        if (percent < 0 || percent > 100) {
            console.log('Процент скидки не может быть больше 100');
        }
        

        const discountAmount = this.price * (percent / 100);
        

        this.price -= discountAmount;
        
        return this.price;
    }
};


console.log('Исходная цена:', product.price);  
product.applyDiscount(10);  
console.log('Цена после скидки:', product.price); 


//_______________________________________________________
