let jersey={
    "nombre":"sudadera",
    "precio":12

}
let mochile={
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
let añadir1=getElementById("bsudadera").sudadera.precio ++
let añadir2=getElementById("bmochilaVerde").mochila.precio ++
let añadir3=getElementById("bGorroRojo").gorro.precio ++
let añadir4=getElementById("BjerseyMarron").jersey.precio ++

let carrito=[]
function añadir1Carrito(){
    carrito.push(añadir1)

}
function añadir2Carrito(){
    carrito.push(añadir2)
}

 function añadir3Carrito(){
    carrito.push(añadir3)
    
}
function añadir4Carrito(){
    carrito.push(añadir4)

}

function total()
{
    let suma=0
    for (let i = 0; i < carrito.length; i++) {
        suma += carrito[i];
    }
    alert("Su compra es de " + suma +"€")
}