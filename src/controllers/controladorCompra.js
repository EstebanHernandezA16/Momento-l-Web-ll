//LLamo a la memoria para acceder a los datos guardados:
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)
//controlar conversion





let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let titulo=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio


let descripcion=document.getElementById("desc")
descripcion.textContent = infoProducto.desc

let subtotal = document.getElementById("subtotal");
subtotal.textContent=infoProducto.precio





let dolares = document.getElementById("btn-dolares");
let pesos = document.getElementById("btn-pesos");
let clean = document.getElementById("cleaner");




dolares.addEventListener("click",function(){
    
    if(dolares.style.visibility =='visible'){
        //precio del dolar 4,833
        subtotal.textContent ="$"+(precio.textContent/4833).toFixed(2);

        pesos.style.visibility='visible'
        dolares.style.visibility='hidden'
    }

})


pesos.addEventListener("click",function(){
    if(pesos.style.visibility=='visible'){
        subtotal.textContent="COP"+precio.textContent

        pesos.style.visibility='hidden'
        dolares.style.visibility='visible'
    }
})





let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")
if(infocarrito!=null){
    carrito=infocarrito
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

clean.addEventListener("click",function(){
 carrito.length=0,pildora.textContent=0, infocarrito=0
    
})

let botonAgregarProducto=document.getElementById("btnagregarcarrito")


botonAgregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
})

