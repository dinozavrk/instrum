const person = {
    name : 'артем',
    age : '18',
    isStudent : true
}

console.log(person.name)
console.log(person.age)
console.log(person.isStudent)

//_______________________________

person.age = 20
console.log(person)

//_______________________________

delete person.isStudent
console.log(person)

person.job = 'программист'
console.log(person)
//_______________________________
//перебор объектов

for(let item in person){
    console.log(person[item])
}
//_______________________________

console.log(typeof person)

//_______________________________

//встроеные методы object

//Object.keys() - возвращает массив ключей

console.log(Object.keys(person)) //  ['name', 'age', 'job']
console.log(Object.values(person)) //  ['артем', 20, 'программист']
console.log(...Object.entries(person)) // ['name', 'артем'] (2) ['age', 20] (2) ['job', 'программист']

//________________________________

//методы объектов

const calculator = {
    a: 20,
    b: 50,

    sum: function(){
        return this.a + this.b
    }
}

console.log(calculator.sum())































