

$(window).on('scroll', function(){

		let scrollUsuario = $(window).scrollTop();

		let profundidad = $('svg').offset().top - $(window).innerHeight() * .7;

		if (scrollUsuario > profundidad) {

			$('svg').addClass('animar');

	} 

	});

$(document).ready(function(){

document.getElementById('toggleButton').checked = false;


$("#toggleButton").on('change', function() {

    if ($(this).is(':checked')) {

        $('.cambiarUno').text('449 euros / año');
        $('.cambiarDos').text('995 euros / año');

    } else {

       $('.cambiarUno').text('49 euros / mes');
       $('.cambiarDos').text('99 euros / mes');
    }


});
    
});
