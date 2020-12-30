//? Objeto con las propiedades

var propiedades = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
	cajaSlide: document.querySelector("#slide ul"),
}

//! Objeto con los métodos

var metodos = {

    inicioSlide: function () {
        for (var i = 0; i < propiedades.paginacion.length; i++) {
            
            propiedades.paginacion[i].addEventListener('click', metodos.paginacionSlide);
        }
    }, 

    paginacionSlide: function (i) {
        
        //! Se sacan los valores negativos para desplazar el slide
        propiedades.item = i.target.parentNode.getAttribute('itemHTML')-1;

        metodos.movimientoSlide(propiedades.item);
    },

    movimientoSlide: function (item) {

        propiedades.cajaSlide.style.left = item * -100 + '%'
    }
}

metodos.inicioSlide()