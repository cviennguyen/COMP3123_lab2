//Exercise 1
const arr = ['Randy Savage', 'Ric Flair', 'Hulk Hogan']
const getter = (arr, counter) => {
  let greetText = "Hello"
  for(let i of arr) {
    console.log(`${greetText} ${i}`)
  }
}
getter(arr, 3)

//Exercise 2
const capitalize = text => {
  [first, ...rest] = [...text]
  first = first.toUpperCase()
  rest = rest.join("")
  return first + rest.toLowerCase()
}
console.log(capitalize('fooBar'))
console.log(capitalize('nodeJs'))

//Exercise 3
const colors = ['rEd','grEen','bluE']
let capitalizeColors = colors.map(c => capitalize(c))
console.log(capitalizeColors)

//Exercise 4
const values = [1,60,34,30,20,5]
let filterLessThan20 = values.filter(x => x < 20)
console.log(filterLessThan20)

//Exercise 5
const array = [1,2,3,4]
let calculateSum = array.reduce((p,c) => p+c)
let calculateProduct = array.reduce((p,c)=>p*c)
console.log(calculateSum)
console.log(calculateProduct)

//Exercise 6
class Car{
  constructor(model,year) {
    this.model = model
    this.year = year
  }
  details() {
    console.log(`Model: ${this.model} ${this.year}`)
  }
}
const car2 = new Car('Pontiac Firebird',1976)
car2.details()

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year)
    this.balance = balance
  }
  info() {
    console.log(`${this.model}$has a balance of $${this.balance}`)
  }
}

const sedan = new Sedan('Volvo SD', 2018, 30000)
sedan.info()