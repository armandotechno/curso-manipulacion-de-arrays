const checkArray = (array) => {
    return array.every( arr => arr % 2 === 0)
}

let rta = checkArray([2,4,6,7])
let rta2 = checkArray([2,3,6,8])
let rta3 = checkArray([2,4,6,8])

console.log(rta);
console.log(rta2);
console.log(rta3);
