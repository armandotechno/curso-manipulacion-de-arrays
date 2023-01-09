const totals = [1,2,3,4,5]

let sum = 0
for (let i = 0; i < totals.length; i++) {
    const element = totals[i];
    sum += element
}
console.log(sum);

const rta = totals.reduce((sum, total) => sum + total, 0)
console.log("con reduce", rta);

