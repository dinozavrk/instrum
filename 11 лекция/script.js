const person = {
    name: 'Alex',
    age: 19,
    getAge: function(){
        return this.age
    },
    printName: function(){
        console.log(`Name: ${this.name}`)
    },
    upAge: function(){
        this.age = this.age + 1
    }
}

person.printName()

//Встроенные объекты в JS
//Math

console.log(Math.PI)

console.log(Math.min(-1,2,3,4,5,6,7,8,9))

const numbers = [1,5,765,3,2,4,7,8,8,2,2000]
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

//Date

const dateNow = new Date()
console.log(dateNow.toLocaleString())

const myBirth = new Date(2005, 3, 8)
// console.log(myBirth)
console.log(myBirth.toLocaleString())

//Получение компонентов даты и времени

console.log(myBirth.getFullYear())
console.log(myBirth.getMonth())
console.log(myBirth.getDay())
console.log(myBirth.getDate())
console.log(myBirth.getHours())

//Сколько прошло миллисекунд с 1 января 1970 года
console.log(myBirth.getTime())

//установка значений для компонентов даты и времени

const now = new Date()
console.log(now.toLocaleString())
now.setFullYear(2007)
now.setMonth(4)
now.setDate(1)
console.log(now.toLocaleString())























