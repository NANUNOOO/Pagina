//Objetos

function producto(nombre, precio, descripcion , precioDescuento){
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.precioDescuento = precioDescuento
}
const producto1 = new producto("Half Life Alyx", 19.99, "accion", 0)
console.log(producto1)

const producto2 = new producto("Barrlefield 1", 19.99, "accion", 0)
console.log(producto2)

const producto3 = new producto("Battlefield 3", 19.99, "accion", 0)
console.log(producto3)

const producto4 = new producto("Half life Blue Shift", 19.99,"accion", 0)
console.log(producto4)

const producto5 = new producto("Sea Of Thieves", 19.99, "aventura", 10,99)
console.log(producto5)

const producto6 = new producto("Counter Strike", 19.99, "accion", 10,99)
console.log(producto6)

const producto7 = new producto("Fallout 3", 19.99, "accion", 10,99)
console.log(producto7)

const producto8 = new producto("Dark Souls 3", 19.99, "RPG", 10,99)
console.log(producto8)
//Array
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]
console.log(productos)
for( const producto of productos){
    console.log(producto.nombre, producto.precio)
    
}