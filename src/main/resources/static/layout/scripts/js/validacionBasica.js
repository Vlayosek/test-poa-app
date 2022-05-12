$(document).ready(function () {

	/*============================================
=            Eliminar los errores            =
============================================*/

var celularValidas=function(parametro1){

	$(parametro1).on('input', function (e){

		$(this).removeClass('error');

	});

}
celularValidas($(".campos__obligatorios"));



/*=====  End of Eliminar los errores  ======*/

/*====================================
=            Solo números            =
====================================*/

$(".solo__numero").on('input', function () {

	this.value = this.value.replace(/[^0-9]/g, '');

});


										
$('.solo__numero__montos').keypress(function(event) {

var $this = $(this);
										    
if ((event.which != 46 || $this.val().indexOf('.') != -1) && ((event.which < 48 || event.which > 57) && (event.which != 0 && event.which != 8))) {
	event.preventDefault();
}

var text = $(this).val();

if ((event.which == 46) && (text.indexOf('.') == -1)) {

	setTimeout(function() {
		
		if ($this.val().substring($this.val().indexOf('.')).length > 3) {

			$this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
		}

	}, 1);
}

if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 2) && (event.which != 0 && event.which != 8) && ($(this)[0].selectionStart >= text.length - 2)) {
	event.preventDefault();
}
										          
});

$(".solo__numero__montos").on('input', function () {

	this.value = this.value.replace(/[^0-9,.]/g, '').replace(',','.');

});

$(".no__especiales").on('input', function () {

	this.value = this.value.replace(/^[^A-Za-z]+$/g, '');

});

/*=====  End of Solo números  ======*/

/*===============================================
=            Validación de célulares            =
===============================================*/

var celularValidas=function(parametro1){

	$(parametro1).click(function(){

		$(this).val('09');

	});


	$(parametro1).keyup(function(e){

	 	if($(this).val().length<=2){

	 		if(e.keyCode == 8){

	 			$(this).val('09');

	 		}

	 	}

	});

}


/*=====  End of Validación de célulares  ======*/


var reloadModalS=function(parametro1){

	$(parametro1).click(function(){

		location.reload();

	});

}

reloadModalS($(".reload__ModalesA"));

/*====================================
=            Convencional            =
====================================*/

var convencionalValidas=function(parametro1){

	$(parametro1).click(function(){

		$(this).val('0');

	});


	$(parametro1).keyup(function(e){

	 	if($(this).val().length<=2){

	 		if(e.keyCode == 8){

	 			$(this).val('02');

	 		}

	 	}

	});

}

convencionalValidas($("#telefonoOficinas"));
convencionalValidas($("#celularCiudadano"));

/*=====  End of Convencional  ======*/

/*==========================================
=            Longitud elementos            =
==========================================*/

var longitudCaracteres=function(parametro1,parametro2,counter){

$(parametro1).keyup(function(e){

   if($(this).val().length > parametro2){

        $(this).val($(this).val().substr(0, parametro2));

        counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");

        counter.css("color","red");

    }else{

      // counter.html("<strong>"+$(this).val().length +"</strong>");

      counter.css("color","black");

      counter.css("font-size","10px");

    }


 });

}

longitudCaracteres($("#cedulaCiudadano"),10,$(".counter__Cedula"));
longitudCaracteres($("#rucOrganismo"),13,$(".counter__Ruc"));
longitudCaracteres($("#cedulaRepresentante"),10,$(".counter__CedulaRepresentante"));
longitudCaracteres($("#telefonoOficinas"),10,$(".countertelefonoOficinas"));
longitudCaracteres($("#celularCiudadano"),10,$(".counterCelular__ciudadano"));
longitudCaracteres($("#cedulaInterventor"),10,$(".counterCelular__ciudadano"));
longitudCaracteres($("#rucOrganismo"),13,$(".counter__Ruc"));

/*=====  End of Longitud elementos  ======*/

/*==========================================
=            Caracteres minimos            =
==========================================*/

var longitudCaracteresMinimos=function(parametro1,parametro2,counter){

$(parametro1).blur(function(e){

   $(parametro1).removeClass("error2");

   if($(this).val().length < parametro2){

        $(this).val($(this).val().substr(0, parametro2));

        counter.html("Son mínimo <strong>"+parametro2+" caracteres</strong>");

        counter.css("color","blue");

    }else{

    	$(counter).html("");

    }

 });

$(parametro1).keyup(function(e){

   $(counter).html("");

});

}

longitudCaracteresMinimos($("#cedulaCiudadano"),10,$(".counter__CedulaMensajes"));
longitudCaracteresMinimos($("#celularCiudadano"),10,$(".counter__CelularMensajes"));
longitudCaracteresMinimos($("#cedulaRepresentante"),10,$(".counter__CedulaRepresentanteMensajes"));
longitudCaracteresMinimos($("#telefonoOficinas"),10,$(".counter__telefonoOficinasMensajes"));
longitudCaracteresMinimos($("#rucOrganismo"),13,$(".counter__rucOrganismoMensajes"));


/*=====  End of Caracteres minimos  ======*/


/*==========================================
=            Validar caracteres            =
==========================================*/

var validarCaracteres=function(parametro1,parametro2,parametro3,parametro4){

	$(parametro1).keyup(function(e){ 

	 $(parametro3).removeClass('error2');

	 if (parametro2.test($(this).val().trim())){

	    	$(parametro3).html("");


	  }else {

	  		switch (parametro4) {

	  			case 0:
	  				$(parametro3).html("Por favor registre una dirección de correo electrónico válida a través de la cual el Ministerio del Deporte le remitirá información importante del proceso");
	  			break;

	  			case 1:
	  				$(parametro3).html("El usuario debe comenzar con letras y no debe tener caracteres especiales, debe tener un mínimo de 4 caracteres y máximo de 16 caracteres (Solo se acepta @,punto,- y _)");
	  			break;

	  			case 2:
	  				$(parametro3).html("La contraseña debe contener al menos 5 caracteres y un máximo de 15, una letra mayúscula, una letra minucula, un dígito, no caracteres especiales y espacios en blanco");
	  			break;

	  			case 3:
	  				$(parametro3).html("La contraseña debe comenzar con letras y no puede tener caracteres especiales y debe tener un mínimo de 5 caracteres y máximo de 16");
	  			break;

	  		}

	    	

	        $(parametro3).css("color","red");

	        $(parametro3).css("font-size","10px");

	  }


	 });

}

validarCaracteres($("#emailCiudadano"),/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,$(".counterCorreo__ciudadano"),0);
validarCaracteres($("#emailOrganismo"),/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,$(".counterCorreo__organismo"),0);
validarCaracteres($("#emailRepresentante"),/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,$(".counterCorreo__representante"),0);
validarCaracteres($("#passwordOrganismo"),/^[a-zA-Z0-9]{5,16}/,$(".counterPasswordValido__organismo"),3);
validarCaracteres($("#passwordOrganismoReset"),/^[a-zA-Z0-9]{5,16}/,$(".visualizar__error__password"),3);

/*=====  End of Validar caracteres  ======*/

/*================================
=            Checkbox            =
================================*/

var checkboxFunciones=function(parametro1,parametro2){

	$(parametro1).click(function(){
	
	    var condicion = $(this).is(":checked");

	    if (condicion) {

	      $(parametro2).show();


	    }else{

	      $(parametro2).hide();

	   }


	});


}
checkboxFunciones($("#generarFilasAcuerdo"),$(".acuerdo__responsabilidad__oculto"));
checkboxFunciones($("#generarFilasAcuerdoMinis"),$(".acuerdo__ministerial__oculto"));

/*=====  End of Checkbox  ======*/



/*==================================
=            Datepicker            =
==================================*/

var datepicker=function(parametro1){

/*========================================
=            Selección fechas            =
========================================*/
	
$(parametro1).datepicker({

	language: 'es',
	changeMonth: true,
	changeYear: true,
	dateFormat: 'yy/mm/dd', 
	yearRange: '-110:+100',

 });	
	
/*=====  End of Selección fechas  ======*/
		
/*===========================================
=            Regional datapicker            =
===========================================*/

$.datepicker.regional['es'] = {
	closeText: 'Cerrar',
	prevText: '<Ant',
	nextText: 'Sig>',
	currentText: 'Hoy',
	monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	monthNamesShort: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
	dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};

$.datepicker.setDefaults($.datepicker.regional['es']);

/*=====  End of Regional datapicker  ======*/

}

// datepicker($("#fechaAcuerdoOrganismo"));
// datepicker($("#fechaAacuerdoMinisterial"));
// datepicker($("#fechaNacimientoPresidente"));

/*=====  End of Datepicker  ======*/

/*=============================================
=            Obtener datos del ruc            =
=============================================*/

var cedulaBuscadora=function(parametro1,parametro2,parametro3,parametro4){

$(parametro1).click(function(e){


	var paqueteDeDatos = new FormData();
	paqueteDeDatos.append('tipo',parametro4);

	var rucEnviado=$(parametro3[2]).val();

	paqueteDeDatos.append('rucOrganismo',rucEnviado);

	$(parametro1).hide();
	 	
	$(parametro2).html('<img src="images/reloadGit.webp" style="height:35px; margin-left: .5em; border-radius: .5em; cursor: pointer;">');


	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false,  
		success:function(response){

			var elementos=JSON.parse(response);
			var informacion__obtenidas=elementos['informacion__obtenidas'];

			if (informacion__obtenidas=="" || informacion__obtenidas==undefined || informacion__obtenidas==null || informacion__obtenidas==" ") {

				alertify.set("notifier","position", "top-center");
				alertify.notify("El ruc ingresado no se encuentra registrado en el aplicativo POA", "error", 10, function(){});

				$(parametro1).show();
				 	
				$(parametro2).html(' ');

	
			}else{


				$(parametro3[0]).show();
				$(parametro3[1]).show();
				$(parametro3[3]).show();
				$(parametro3[4]).show();
				$(parametro3[5]).show();

				for (c of informacion__obtenidas) {

					$(parametro3[0]).val(c.nombreOrganismo);
					$(parametro3[1]).val(c.idOrganismo);
					$(parametro3[3]).val(c.nombreProvincia);
					$(parametro3[4]).val(c.nombreCanton);
					$(parametro3[5]).val(c.nombreParroquia);

				}				

				$(parametro1).show();
				 	
				$(parametro2).html(' ');



			}

	    },
	    error:function(){
	    	
	    } 

	});

});

}

cedulaBuscadora($("#buscarRuc__i"),$(".reload__rucI"),[$("#nombreOrganismo__i"),$("#idOrganismo_i"),$("#rucOrganismo"),$("#provincia__i"),$("#canton__i"),$("#parroquia__i")],"ruc_i");

/*=====  End of Obtener datos del ruc  ======*/



/*======================================
=            Cédula validas            =
======================================*/

var cedulaBuscadora=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6,parametro7){

$(parametro1).click(function(e){

	$(parametro1).hide();
	 	
	$(parametro2).html('<img src="images/reloadGit.webp" style="height:35px; margin-left: .5em; border-radius: .5em; cursor: pointer;">');

	$.ajax({

		url:"php/dinardap.php",
		type:"POST",
		dataType:"json",
		data:"cedula="+$(parametro3).val(),
		success:function(datos){

	    	if (datos==null) {
	                 
				alertify.set("notifier","position", "top-center");
				alertify.notify("La cédula ingresada no existe", "error", 5, function(){});

	        	$(parametro2).html('');

	        	$(parametro1).show();

	    	}else{

	            // recuperación de datos de la dinardap
	       		$(parametro4).val(datos.nombre);

	       		$(parametro7).val(datos.nombre)

	       		if (parametro5!=false) {

	                if(datos.sexo=="HOMBRE"){

	                	$(parametro5).val("MASCULINO");

	                }else{

	                	$(parametro5).val("FEMENINO");

	                }

		                  
		            $(parametro6).val(datos.fechaNacimiento);

		            $("#nombreCiudadano").val(datos.nombre);

		            $("#apellidoCiudadano").val(datos.nombre);

					/*=========================================
					=            Calculo de edades            =
					=========================================*/

					function calcularEdad(fecha) {

						var hoy = new Date();
						var cumpleanos = new Date(fecha);
						var edad = hoy.getFullYear() - cumpleanos.getFullYear();
						var m = hoy.getMonth() - cumpleanos.getMonth();

						if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
							edad--;
						}

						return edad;

					}

					var edadRealizables=calcularEdad(datos.fechaNacimiento);
						
					/*=====  End of Calculo de edades  ======*/


	            }

	            $(parametro2).html('');

	            $(parametro1).show();

	            $(parametro4).show();


	        }          
	               
	    },
	    error:function(response,status,error){
	    	alert("no encontrado");
	    } 

	});

});

}

cedulaBuscadora($("#buscarCedulaPresidente"),$(".reload__CedulasCiudadanos"),$("#cedulaCiudadano"),$("#nombreCiudadano"),$("#sexoCiudadano"),$("#fechaDeNacimientoCiudadano"),$("#apellidoCiudadano"));

cedulaBuscadora($("#buscar__CedulaPersonaContacto"),$(".reload__personaContacto"),$("#cedulaRepresentante"),$("#nombreRepresentante"),$("#sexoCiudadano"),$("#fechaDeNacimientoCiudadano"),$("#apellidoRepresentante"));

cedulaBuscadora($("#buscarCedulaRepresentanteEdicion"),$(".reload__CedulasCiudadanos"),$("#cedulaRepresentanteOrganismoDeportivo"),$("#representanteOrganismoDeportivo"),$("#sexoCiudadano"),$("#fechaDeNacimientoCiudadano"),$("#apellidoCiudadano"));

cedulaBuscadora($("#buscarCedulaPresidenteEdicion"),$(".reload__CedulasCiudadanos"),$("#cedulaPresidenteOrganismoDeportivo"),$("#presidenteOrganismoDeportivo"),$("#generoPresidente"),$("#fechaNacimientoPresidente"),$("#presidenteOrganismoDeportivoApe"));

cedulaBuscadora($("#buscarCedulaPresidenteEdicion"),$(".reload__CedulasCiudadanos"),$("#cedulaPresidenteOrganismoDeportivo"),$("#presidenteOrganismoDeportivo"),$("#generoPresidente"),$("#fechaNacimientoPresidente"),$("#presidenteOrganismoDeportivoApe"));

cedulaBuscadora($("#buscarCedula__i"),$(".reload__cedulas__i"),$("#cedulaInterventor"),$("#nombreInterventor__i"));

/*=====  End of Cédula validas  ======*/


/*=================================================
=            Generar contraseña vistas            =
=================================================*/

var verOjoContrasenas=function(parametro1,parametro2){

	$(parametro1).click(function(){
	
		var tipo=$(parametro2).attr('type');	

		if (tipo=="text") {


			$(this).addClass('fa-eye');

			$(this).removeClass('fa-eye-slash')

			$(parametro2).attr('type','password');


		}else{

			$(this).removeClass('fa-eye');

			$(this).addClass('fa-eye-slash');

			$(parametro2).attr('type','text');


		}


	});


}
verOjoContrasenas($("#ojo_icono"),$("#passwordOrganismoReset"));

/*=====  End of Generar contraseña vistas  ======*/


});