// const flowers = [2,4,5,7]

// const newFlowers = flowers.map( flower => (
//     flower * 2
// ))
// console.log(newFlowers);

// // ahora con un forEach 

// const cars = [3,6,8]
// const newCars = []

// cars.forEach( car => (
//     newCars.push(car * 2)
// ))

// console.log(newCars);

function multiplicar(array) {
    return array.map( arr => (arr * 2))
}


console.log( multiplicar([2,4,5]) );