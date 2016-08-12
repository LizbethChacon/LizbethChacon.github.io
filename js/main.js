$(document).ready(initPage);

function initPage()
{
  $("#main_menu a").click(navigatePage);
  // initScrollMagic();
}

function navigatePage(evt)
{
  evt.preventDefault();
  $("#main_menu a").removeClass('active');
  $(this).addClass('active');

  var section = $(this).attr('href');
  var objSection = $(section);

  TweenMax.to('body', 1, {
    scrollTo:{y:objSection.position().top},
    ease:Quart.easeOut
  });
  console.log(objSection.position().top);
}

function initScrollMagic()
{
  var controller = new ScrollMagic.Controller();

  var blockTween = new TimelineMax();

  blockTween.to('#sobremi', 1.5, {backgroundColor: 'red'});
  blockTween.to('#el_pato', 1.5, {scale: 1.2});

  var portafolioTween = new TimelineMax();

  portafolioTween.to('#portafolio', 1.5, {backgroundColor: 'yellow'});
  portafolioTween.to('#portafolio', 1.5, {scale: 0.8});


  var sobreMiScene = new ScrollMagic.Scene({
      triggerElement: '#sobremi'
  })
  .setTween(blockTween)
  .addIndicators()
  .addTo(controller);

  var portafolioMiScene = new ScrollMagic.Scene({
      triggerElement: '#portafolio'
  })
  .setTween(portafolioTween)
  .addIndicators()
  .addTo(controller);
}



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

