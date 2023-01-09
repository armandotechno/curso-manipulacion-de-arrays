let numbers = []

const calcularSuma = (numbers) => {
   return numbers.reduce((sum, number) => sum + number, 0 )
}

console.log(calcularSuma([1,4,6,10]))
