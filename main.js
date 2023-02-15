// declaro un arreglo con objetos de categoria de "beneficio"

const socios = [
    {clase: "1 - Clase: Socio Pleno", beneficios: "Totales", precio: 4000 },
    {clase: "2 - Clase: Socio Fan", beneficios: "Total excepto ingreso a eventos deportivos", precio: 3000 }, 
    {clase: "3 - Clase: Socio Futbol", beneficios: "Solo ingreso a eventos deportivos", precio: 2000 }
];

// creo una variable y le asigno el valor que ingrese el usuario por teclado

let eleccion = prompt("Bienvenido! \nDesea formar parte de nuestro staff de socios? \nResponda ingresando la palabra: \"si o no\"");

// en caso de que la respuesta no sea "si o no", se genera un bucle hasta que ingrese una de las 2 respuestas posibles

while (eleccion != "si" && eleccion != "no"){

    alert("Por favor ingresar \"si o no\"...")
    eleccion = prompt("Desea formar parte de nuestro staff de socios?")

}

//Dependiendo la respuesta genero una acción diferente con un if/else

if (eleccion == "si"){

    alert("A continuación nuestras distintas categorías para asociarte:")

    // Mediante un map recorro el arreglo asignando los valores a una constante

    const tipoDeClases = socios.map(socio => alert(socio.clase + "; \nBeneficio: " + socio.beneficios + "; \nPrecio: $" + socio.precio));
    
    // Dlecaro una funcion que genere descuentos al usuario
    
    alert ("Usted podrá obtener un descuento del 30% pagando el abono en forma anual")
    /* let valorMensualUno = 4000;
    let valorAnualUno = valorMensualUno * 12;
    let descuentoAnualUno = valorAnualUno * 30 / 100;
 
    let valorMensualDos = 3000;
    let valorAnualDos = valorMensualDos * 12;
    let descuentoAnualDos = valorAnualDos * 30 / 100;
    
    let valorMensualTres = 2000;
    let valorAnualTres = valorMensualTres * 12;
    let descuentoAnual = valorAnualUno * 30 / 100; */
  
    const descuento = (abono) => {
        let total = abono * 12 - (abono * 12) * 0.3;
        alert ("El precio de su abono con descuento sería : $" + total)
    }
    
        
    
    
    // Le muestro al usuario las opciones posibles mediante un alert
    alert(tipoDeClases)

    eleccion = parseInt(prompt("Ingrese la opción de preferencia digitando el numero (1, 2 o 3): "))

    while(eleccion != 1 && eleccion != 2 && eleccion != 3) {
        eleccion = parseInt(prompt("Debe ingresar una opción valida: 1, 2 o 3. Intente otra vez: "))
    }

    let mensajeCasoUno = "Usted podrá gozar de todas las instalaciones del club. \nComo también de descuentos en indumentaria!!"
    let mensajeCasoDos = "Usted podrá gozar de todas las instalaciones del club. \nComo también de descuentos en indumentaria. \nPero NO podrá ingresar a eventos deportivos!!"
    let mensajeCasoTres = "Usted sólo podrá acceder a los eventos deportivos del club. \n También obtendrá descuentos menores en indumentaria!!"

    switch (eleccion) {

        case 1:
            alert("Felicidades usted es: " + socios[0].clase + " \n " + mensajeCasoUno)
            descuento(socios[0].precio)
            break;

        case 2:
            alert("Felicidades usted es: " + socios[1].clase + " \n " + mensajeCasoDos)
            descuento(socios[1].precio)
            break;

        case 3:
            alert("Felicidades usted es: " + socios[2].clase + " \n " + mensajeCasoTres)
            descuento(socios[2].precio)
            break;
    }

    alert("Bienvenido al Unico Grande Del Oeste Argentino!! Nos vemos en la cancha...!")

} else {
    alert("Gracias por su visita...")
}









/* const descuento = (op) => {

} */









    

