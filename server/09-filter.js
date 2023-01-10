const names = ["ana", "santi", "nico", "anastasia"]

const filterByTerm = (query) => {
    return names.filter(name => {
       return name.includes(query)
    })
}
console.log(filterByTerm('an'))

// const search = query => {
//     return names.filter( name => {
//         return name.includes(query)
//     })
// }

// console.log(search('an'));