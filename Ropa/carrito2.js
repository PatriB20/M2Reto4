let sudadera={
    "nombre":"sudadera",
    "precio":12

}
let mochila={
    "nombre":"mochila",
    "precio":14

}
let gorro={
    "nombre":"gorro",
    "precio":5

}

let jersey={
    "nombre":"jersey",
    "precio":18

}
let tienda=[sudadera, mochila,gorro,jersey]


let carrito=[]
function añadirCarrito(posicion){
    carrito.push(tienda[posicion])

    console.log(carrito)

}

function escribirCarrito()
{
   for(let i=0; i<carrito.length; i++)
     document.getElementById("escribirCarrito").innerHTML += carrito[i].nombre + " " +carrito[i].precio + "€"+"\n"
}

function total()
{

    let suma=0
    for (let i = 0; i < carrito.length; i++) {
        suma += carrito[i].precio;
    }
    document.getElementById("escribirCarrito").innerHTML= "El total es de: " +suma+ "€"
    
}
function borrar()
{
    return carrito =[]

}
