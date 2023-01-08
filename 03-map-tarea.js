const productos =
[
    {
      name: "Product 1",
      price: 1200,
      stock: 10
    },
    {
      name: "Product 2",
      price: 200,
      stock: 20
    },
    {
        name: "Product 3",
        price: 3000,
        stock: 24
      },
      {
        name: "Product 4",
        price: 1000,
        stock: 26
      },
]

const newProductos = productos.map( producto => ({
    ...producto,
    'taxes': Math.trunc(producto.price * .19)
}))

console.log(newProductos);

