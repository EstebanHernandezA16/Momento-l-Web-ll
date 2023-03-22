import {productos} from '../helpers/baseDatos.js'
import {pintarProductos} from '../helpers/pintarProductos.js'


//llamando a la fila
let fila=document.getElementById("fila")

//Pintar los productos de la tienda
pintarProductos(productos)


//Escuchando clic en la fila contenedora de productos
fila.addEventListener("click",function(evento){

    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement

    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h6").textContent
    datosProductoSeleccionado.moneda=tarjeta.querySelector("h5").textContent
    datosProductoSeleccionado.desc=tarjeta.querySelector("p").textContent

    //usaremos la memoria del pc para guardar esta info
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))
    
    window.location.href="./src/views/ampliarinfo.html"
})
