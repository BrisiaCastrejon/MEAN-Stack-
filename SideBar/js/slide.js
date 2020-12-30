//? Objeto con las propiedades
// animacionSlide: 'fade'
var propiedades = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: 'slide',
    imagenSlide: document.querySelectorAll('#slide ul li'),
    avanzar: document.getElementById('avanzar'),
    retroceder: document.getElementById('retroceder'),
    velocidadSlide: 3000,
    loopSlide: false
};

//! Objeto con los métodos
var metodos = {

    inicioSlide: function () {
        for (var i = 0; i < propiedades.paginacion.length; i++) {
            
            propiedades.paginacion[i].addEventListener('click', metodos.paginacionSlide);
        };
        propiedades.avanzar.addEventListener('click', metodos.avanzarSlide);
        propiedades.retroceder.addEventListener('click', metodos.retrocederSlide);     
        metodos.intervalo() 
    }, 

    paginacionSlide: function (i) {        
        //! Se sacan los valores negativos para desplazar el slide
        propiedades.item = i.target.parentNode.getAttribute('itemHTML')-1;
        metodos.movimientoSlide(propiedades.item);
    },

    avanzarSlide: function () {
        if (propiedades.item ==  propiedades.imagenSlide.length-1) {
            propiedades.item = 0;
        }else{
            propiedades.item ++;
        };        
        metodos.movimientoSlide(propiedades.item);
    },
    
    retrocederSlide: function () {
        if (propiedades.item == 0) {
            propiedades.item = propiedades.imagenSlide.length-1;
        }else{
            propiedades.item --;
        };        
        metodos.movimientoSlide(propiedades.item);
    },

    movimientoSlide: function (item) {
        //! Se agrega el loop del intervalo
        propiedades.loopSlide = true;
        //! Se cambia el estilo de acuerdo al valor del item
        propiedades.cajaSlide.style.left = item * -100 + '%';
        
        for (var i = 0; i < propiedades.paginacion.length; i++) {
            
            //! Se agrega la misma opacidad para todos los iconos del carrusel 
            propiedades.paginacion[i].style.opacity = .5;
        };
        //! Se asigna la opacidad en 1 al item clickeado 
        propiedades.paginacion[item].style.opacity = 1;

        if (propiedades.animacionSlide == 'slide') {
            //! Se asigna la animación para cada slide
            propiedades.cajaSlide.style.transition = '.7s left ease-in-out';
        };
        if (propiedades.animacionSlide == 'fade') {
            //! Se ponga en opacidad 0 el item que clickeo
            propiedades.imagenSlide[item].style.opacity = 0;                
           
            //! Se ponga la opacidad 1 después de un timeOut
            setTimeout(function () {
                propiedades.imagenSlide[item].style.opacity = 1;
                propiedades.imagenSlide[item].style.transition = '.7s opacity ease-in-out';
            },500)            
        };
        
    },

    intervalo: function () {
        //! Activar el carrusel de forma automatica
        setInterval(function () {
            //! Se arregla el intervalo de tiempo entre los slides cuando no es automatico
            if (propiedades.loopSlide) {
                propiedades.loopSlide = false;
            }else{
            metodos.avanzarSlide();
            }
        },propiedades.velocidadSlide)
    }
}

metodos.inicioSlide()