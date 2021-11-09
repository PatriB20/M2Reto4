let productos = [
    {
        id: "sudaderaGris",
        nombre: "SudaderaGris",
        precio: 12,
        
    },
    {
        id: "mochilaVerde",
        nombre: "mochilaVerde",
        precio: 14,
        
    },
    {
        id: "jerseyMarron",
        nombre: "jerseyMarron",
        precio: 18,
       
    },
    {
        id: "gorroRojo",
        nombre: "GorroRojo",
        precio: 5,
       
    },
]
let carrito = [];
let total = 0;
          const items = document.querySelector("items");
          const carrito = document.querySelector("carrito");
          const total = document.querySelector("total");
          const botonVaciar = document.querySelector("vaciar");
window.onload = function () 
{
    function añadirProducto(evento) 
    {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el carrito 
        renderizarCarrito();
    }
    function renderizarCarrito() {
        // Vaciamos todo el html
        carrito.textContent = '';
        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            let item1 = productos.filter((itemProductos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemProductos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            let nodo = document.createElement('li');
            nodo.classList.add('list-group-item', 'text-right', 'mx-2');
            nodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}€`;
            // Boton de borrar
            let botonX=getElemenbyId("botonX")
            botonX.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = productos[i].id;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

}