const words = ['spray', 'limit', 'elite', 'tree']

const newArray = []
for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if ( element.length >= 5 ) {
        newArray.push(element)
    }
}

console.log(newArray);

const rta = words.filter( item => item.length >= 5 )
console.log(rta);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Armando",
        total: 240,
        delivered: false,
      },
  
  ]

const rta2 = orders.filter( order => order.delivered && order.total > 100 )
console.log(rta2);

const search = query => {
    return orders.filter( order => {
        return order.customerName.includes(query)
    })
}

console.log(search('Armando'));