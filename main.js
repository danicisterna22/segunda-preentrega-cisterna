// -------------- DATOS INICIALES ------------------

const socios = [
    { clase: "1 - Clase: Socio Pleno", beneficios: "Totales", precio: 4000 },
    {
        clase: "2 - Clase: Socio Fan",
        beneficios: "Total excepto ingreso a eventos deportivos",
        precio: 3000,
    },
    {
        clase: "3 - Clase: Socio Futbol",
        beneficios: "Solo ingreso a eventos deportivos",
        precio: 2000,
    },
];

// ------------ LLAMADAS A LAS FUNCIONES ----------------------

evaluacionEleccion();

tipoDeClase();

elegirOpcionSocio();

//----------- DECLARACION DE LAS FUNCIONES ---------------------

function evaluacionEleccion() {
    let eleccion = prompt(
        'Bienvenido! \nDesea formar parte de nuestro staff de socios? \nResponda ingresando la palabra: "si o no"'
    );

    while (eleccion != "si" && eleccion != "no") {
        alert('Por favor ingresar "si o no"...');
        eleccion = prompt("Desea formar parte de nuestro staff de socios?");
    }

    if (eleccion === "si") {
        alert("A continuación nuestras distintas categorías para asociarte:");
    } else {
        alert("Gracias por su visita...");
    }
}

function descuento(abono){
    let total = abono * 12 - abono * 12 * 0.3;
    alert("Si usted abona el año entero, se le hará un 30% de descuento: ");
    alert("El precio de su abono con descuento sería : $" + total);
};

function tipoDeClase() {
    const tipoDeClases = socios.map(
        (socio) =>
            socio.clase +
            "; \nBeneficio: " +
            socio.beneficios +
            "; \nPrecio: $" +
            socio.precio +
            "\n"
    );
    alert(tipoDeClases);
}

function elegirOpcionSocio() {
    eleccion = parseInt(
        prompt(
            "Ingrese la opción de preferencia digitando el numero (1, 2 o 3): "
        )
    );

    while (eleccion != 1 && eleccion != 2 && eleccion != 3) {
        eleccion = parseInt(
            prompt(
                "Debe ingresar una opción valida: 1, 2 o 3. Intente otra vez: "
            )
        );
    }

    let mensajeCasoUno =
        "Usted podrá gozar de todas las instalaciones del club. \nComo también de descuentos en indumentaria!!";
    let mensajeCasoDos =
        "Usted podrá gozar de todas las instalaciones del club. \nComo también de descuentos en indumentaria. \nPero NO podrá ingresar a eventos deportivos!!";
    let mensajeCasoTres =
        "Usted sólo podrá acceder a los eventos deportivos del club. \n También obtendrá descuentos menores en indumentaria!!";

    switch (eleccion) {
        case 1:
            alert(
                "Felicidades usted es: " +
                    socios[0].clase +
                    " \n " +
                    mensajeCasoUno
            );
            descuento(socios[0].precio);
            break;

        case 2:
            alert(
                "Felicidades usted es: " +
                    socios[1].clase +
                    " \n " +
                    mensajeCasoDos
            );
            descuento(socios[1].precio);
            break;

        case 3:
            alert(
                "Felicidades usted es: " +
                    socios[2].clase +
                    " \n " +
                    mensajeCasoTres
            );
            descuento(socios[2].precio);
            break;
    }

    alert(
        "Bienvenido al Unico Grande Del Oeste Argentino!! Nos vemos en la cancha...!"
    );
}


   
  
    
        
    
    





















    

