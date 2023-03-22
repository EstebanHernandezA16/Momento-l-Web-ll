export function pintarProductos(productos){
    
    productos.forEach(function(producto){
   
        //creando columnas para alojar los productos
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //crear una tarjeta para almacenar la info del producto
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        //crear una imagen
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]
    
        //crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
        //crear un precio
        let precio=document.createElement("h6")
        precio.classList.add("text-center","text-success","fw-bold","d-none")
        precio.textContent=producto.precio

        //indicar moneda
        const moneda = document.createElement("h5")
        moneda.classList.add("text-center","text-success","fw-bold")
        moneda.textContent="COP"+producto.precio

        let desc=document.createElement("p")
        desc.classList.add("text-center","fw-bold","d-none")
        desc.textContent=producto.descripcion

        //Detectando evento
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })

    
        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(moneda)
        tarjeta.appendChild(desc)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    })
}

