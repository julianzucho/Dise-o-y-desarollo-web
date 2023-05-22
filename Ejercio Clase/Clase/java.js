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



var plata = document.querySelector("#plata")
var plata2= document.querySelector("#plata2")

var miami = document.querySelector("#miami")
var miami2= document.querySelector("#miami2")

var ricky = document.querySelector("#ricky")
var ricky2= document.querySelector("#ricky2")

var ocultop=function(){
    plata2.classList.toggle("oculto")
}

var ocultom=function(){
    miami2.classList.toggle("oculto")
}

var ocultor=function(){
    ricky2.classList.toggle("oculto")
}


ricky.addEventListener("click",ocultor)
ricky2.addEventListener("click",ocultor)

plata.addEventListener("click",ocultop)
plata2.addEventListener("click",ocultop)

miami.addEventListener("click",ocultom)
miami2.addEventListener("click",ocultom)




var magic=document.querySelector("#magic")

magic.addEventListener("mouseover",function(){
    this.classList.add("oculto")
})

magic.addEventListener("mouseleave",function(){

    this.classList.remove("oculto")
})