const numbers = [1,30,39,29,10,13]

let rta = true
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if ( element >= 40 ) {
        rta = false
    }
}

console.log(rta);
const rta2 = numbers.every( num => num <= 40)
console.log("every", rta2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
];

const permission = team.every( suj => suj.age <= 15)
console.log(permission);