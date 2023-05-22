var boton = document.querySelector("button")
var parrafo =document.querySelector("p")

var seEjecutaEnEvento=function(callback){
    parrafo.insertAdjacentHTML("beforeend","BEEP <br>")
    parrafo.classList.toggle("color")
}

boton.addEventListener("click",seEjecutaEnEvento)









var lista =document.querySelectorAll("p")

for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click",function(callback){
        this.classList.toggle("highlight")
    })
}



var plata=document.querySelector("button")
/*var miami=document.querySelector("button")
var ricky=document.querySelector("button")
var imgplata=document.querySelector("image")

var seEjecutaEnEvento=function(callback){
imgplata.classList.toggle("oculto")

}

plata.addEventListener("click",seEjecutaEnEvento)
*/
var lista =document.querySelectorAll("img")

for (var i = 0; i < lista.length; i++) {
    plata.addEventListener("click",function(callback){
        this.classList.toggle("highlight")
    })
}
