function add(num1: number, num2: number) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('incorrect input!')
  }
  return num1 + num2
}

const num1 = '2'
const num2 = 2.5
const result = add(num1, num2)
console.log(result)