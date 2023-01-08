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
  ]
  console.log("original", orders);

  const rta = orders.map( order => order.total)
  console.log("rta", rta);

  const rta3 = orders.map( order => {
    return {
        ...order,
        tax: .19
    }
  })

  console.log("rta3", rta3);
  console.log("original", orders);
