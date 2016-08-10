// $(document).ready(function(){
  
//     $("#home button").on("click",function(){$("#home").hide(0.5,function(){$(".contenido").show('fast')});
//     }) 

//     $("#newhome").click(function(){
//           // $(".contenido").fadeOut("slow");
//         $("#home").slideToggle(0.5,function(){$(".contenido").hide()})
//           // $("#home").slideDown("slow",function(){$(".contenido").hide()})
//     })
//   })
  

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Front-end, apasionada por el código y amante de la naturaleza.

var desde=0,i=0,maximocaracteres=31,mensaje='   < Si se puede imaginar, se puede programar />  ';
function mostrar() { 
    var descr=document.getElementById('maquinas').innerHTML; 
    if(descr.length>maximocaracteres)desde++; 
    if(i>=maximocaracteres)i=maximocaracteres; 
    if(desde>=mensaje.length-maximocaracteres) { 
        desde=0; 
        i=0; 
    }else{ 
            i++; 
    } 
    document.getElementById('maquinas').innerHTML =mensaje.substr(desde, i); 
    if(mensaje.length<=maximocaracteres) 
        document.getElementById('maquinas').innerHTML =mensaje; 
} 
function inicio(){ 
    setInterval('mostrar()',250); 
} 
window.onload=inicio;


// function maquina(contenedor,texto,intervalo){
//    // Calculamos la longitud del texto
//    longitud = texto.length; 
//    // Obtenemos referencia del div donde se va a alojar el texto.
//    cnt = document.getElementById(contenedor);
//    var i=0;
//    // Creamos el timer
//    timer = setInterval(function(){
//       // Vamos añadiendo letra por letra y la _ al final.
//       cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "|";
//       // Si hemos llegado al final del texto..
//       if(i >= longitud){
//          // Salimos del Timer y quitamos la barra baja (_)
//          clearInterval(timer);
         
//          cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
//          return true;
//       } else {
//          // En caso contrario.. seguimos
//          i++;
//       }},intervalo);
// };

// // var texto = "Sueña, Cree, Haz";
// var texto ="< FRONT-END DEVELOPER />";
// // 100 es el intervalo de minisegundos en el que se escribirá cada letra.
// maquina("maquinas",texto,200);





//  $(".fa.fa-github").click(function(){
//         $(".fa.fa-html5").css({"left": "12px", "top": "23px"});
//         $(".jade").css({"top": "-13px", "left": "138px"});
//         $(".fa.fa-css3").css({"right": "26px", "top": "23px"});
// })


// $(document).ready(function(){
 
//   $("ul li:nth-child(2)").on("click",function(){$(".about").slideDown("slow")});//no corre con id?
//   $("ul li:nth-child(3)").on("click",function(){$(".portfolio").slideDown("slow")});
  
//   })


// $("ul li:nth-child(2)").on("click",function(){$("#about").show().addClass("animated slideInDown")});
//   $("ul li:nth-child(3)").on("click",function(){$("#portfolio").show().addClass("animated slideInDown")});