/* 
            funcion para ocultar
$(this).hide()
$("p").hide()
$(".test").hide()
$("#test").hide()
*/

/*Llamar a jquery funcion
forma 1
$(document).ready(function(){
}

forma 2
$(Function(){

}

*/

/* get 
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
});

####     Set ######

$("#btn1").click(function(){
    $("#test1").text("Hola Mundo!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hola Mundo!</b>");
})
;$("#btn3").click(function(){
    $("#test3").val("Hola");
});


 Atributos 

 $("button").click(function(){
    $("#linkFinal").attr("href", "https://www.w3schools.com/jquery/");
});
// Opción 2

$("button").click(function(){
    $("#linkFinal").attr({
        "href" : "https://www.w3schools.com/jquery/",
        "title" : "W3Schools jQuery Tutorial"});
    });

*/


/*
$(document).ready(function(){
$("button").click(function(){
    $("p").toggle();


});

$("input").focus(function(){
    $(this).css("background-color", "yellow");
});
$("input").blur(function(){
    $(this).css("background-color", "lightgreen");
});

});*/

$(function(){
    $("#show").click(function(){
        $(".img").show();
        $("h1").text("Mira la siguiente imagen");
    });
    $("#hide").click(function(){
        $(".img").hide();
        $("h1").text("No hay ninguna imagen");
        });
});


$(function(){
    $("#claro").click(function(){
        $("#menu").hide();
    });
    $("#oscuro").click(function(){
        $("#menu").show();
    });
});