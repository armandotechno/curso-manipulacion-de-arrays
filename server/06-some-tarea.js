let numbers = []

const checkArray = (numbers) => {
    return numbers.some( number => number % 2 === 0)
}

console.log(checkArray([]));