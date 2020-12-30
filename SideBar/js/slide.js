//? Objeto con las propiedades
var propiedades = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: 'fade',
    imagenSlide: document.querySelectorAll('#slide ul li')
};

//! Objeto con los métodos
var metodos = {

    inicioSlide: function () {
        for (var i = 0; i < propiedades.paginacion.length; i++) {
            
            propiedades.paginacion[i].addEventListener('click', metodos.paginacionSlide);
        };
    }, 

    paginacionSlide: function (i) {
        
        //! Se sacan los valores negativos para desplazar el slide
        propiedades.item = i.target.parentNode.getAttribute('itemHTML')-1;
        metodos.movimientoSlide(propiedades.item);
    },

    movimientoSlide: function (item) {
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
        
    }
}

metodos.inicioSlide()