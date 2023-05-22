

var boton = document.querySelector("button")

var parrafo = document.querySelector("p")
/*----------------Funcion Definida en evento-------------------------
boton.addEventListener("click",function(){

parrafo.textContent="Alguien hizo click"

})
*/




/*--------------Funcion Predefinida------------------------------*/

var cambiarTexto= function(){

parrafo.textContent="Alguien hizo click"


}

boton.addEventListener("click",cambiarTexto)

var lista =document.querySelectorAll(".Profesores>li")

for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click",function(){
        this.style.color="red"
    })
}


/*----------------- Funcion Sobre/Resaltar -----------------------------*/

var target=document.querySelector("#target")

target.addEventListener("mouseover",function(){
    this.classList.add("highlight")
})

target.addEventListener("mouseleave",function(){

    this.classList.remove("highlight")
})




document.body.addEventListener("click", function(e){
        console.log("El mouse está en X: " + e.clientX + " Y: " + e.clientY)
})

document.body.addEventListener("mousemove", function(e) {  console.log("El mouse está en X: " + e.clientX + " Y: " + e.clientY)})