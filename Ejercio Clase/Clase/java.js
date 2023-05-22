var boton = document.querySelector("button")
var parrafo =document.querySelector("p")

var seEjecutaEnEvento=function(callback){
    parrafo.insertAdjacentHTML("beforeend","BEEP <br>")
    parrafo.classList.toggle("color")
}

boton.addEventListener("click",seEjecutaEnEvento)






target.addEventListener("click",function(){
    target.classList.toggle("highlight")
    this.style.color="red"

})



var lista =document.querySelectorAll(".parrafo>li")

for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click",function(){
        target.classList.toggle("highlight")
    })
}