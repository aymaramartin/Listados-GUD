var Dolar = 1120
var Bolsa = 11033

    // Obtener el elemento por su ID (en este caso, el <span> con id="precio")
    var elementoPrecio = document.getElementById('Bolsa');

    // Insertar el valor de la variable en el contenido del elemento
    elementoPrecio.textContent = "$" + " "+ (Bolsa.toLocaleString());

        // Obtener el elemento por su ID (en este caso, el <span> con id="precio")
        var elementoPrecio = document.getElementById('Dolar');

        // Insertar el valor de la variable en el contenido del elemento
        elementoPrecio.textContent = "$" + " "+ (Dolar.toLocaleString());

window.onload = function() {
    // Lista de los lotes disponibles (IDs de los lotes presentes en el HTML)
    const lotesDisponibles = [
        'L1BPS', 'L2BPS', 'L3BPS', 'L7BPS', 'L8BPS', 'L12BPS', 'L14BPS', 'L15BPS', 'L16BPS',
        'L17BPS', 'L18BPS', 'L19BPS', 'L20BPS', 'L21BPS', 'L22BPS', 'L23BPS', 'L24BPS', 'L25BPS',
        'L26BPS', 'L27BPS', 'L28BPS', 'L29BPS', 'L37BPS', 'L38BPS', 'L39BPS', 'L40BPS','L46BPS', 
        'L47BPS', 'L48BPS', 'L49BPS', 'L50BPS', 'L51BPS', 'L52BPS', 'L53BPS', 'L54BPS','L55BPS', 
        'L56BPS', 'L58BPS'
    ];

    // Iterar sobre los lotes disponibles
    for (let i = 0; i < lotesDisponibles.length; i++) {
        let loteId = lotesDisponibles[i]; // Lote actual
        let anticipoId = 'Ant' + loteId; // Generamos el ID de la celda del anticipo
        let Cuotas12Id = 'Cuotas12' + loteId; // Generamos el ID de la celda de las cuotas
        let Cuotas24Id = 'Cuotas24' + loteId; // Generamos el ID de la celda de las cuotas
        let Cuotas36Id = 'Cuotas36' + loteId; // Generamos el ID de la celda de las cuotas
        let Cuotas48Id = 'Cuotas48' + loteId; // Generamos el ID de la celda de las cuotas
        calcularFdolares(loteId, anticipoId, Cuotas12Id,Cuotas24Id,Cuotas36Id,Cuotas48Id);  // Llamamos a la función para cada lote
    }

    // Iterar sobre los lotes para cuotas en pesos
    for (let i = 0; i < lotesDisponibles.length; i++) {
        let loteId = lotesDisponibles[i]; // Lote actual
        let anticipoPId = 'AntP' + loteId; // Generamos el ID de la celda del anticipo
        let Cuotas60Id = 'Cuotas60' + loteId; // Generamos el ID de la celda de las cuotas
        let Cuotas72Id = 'Cuotas72' + loteId; // Generamos el ID de la celda de las cuotas
        let Cuotas84Id = 'Cuotas84' + loteId; // Generamos el ID de la celda de las cuotas
        let RefPesosId = 'RefPesos' + loteId; //// Generamos el ID de la celda de referencia
        calcularFpesos(loteId, anticipoPId, Cuotas60Id,Cuotas72Id,Cuotas84Id,RefPesosId);  // Llamamos a la función para cada lote
    }
};

// Función para calcular valores de cualquier lote en dolares
function calcularFdolares(loteId, anticipoId, Cuotas12Id,Cuotas24Id,Cuotas36Id,Cuotas48Id) {
    // Obtener el valor del lote (texto de la celda con id="LoteId")
    let loteElement = document.getElementById(loteId);
    if (!loteElement) {
        console.error("Elemento no encontrado:", loteId);
        return;
    }

    let LoteText = loteElement.textContent.trim();  // Extraer el texto
    // Eliminar la palabra 'USD', los puntos y cualquier espacio extra
    let LoteValue = LoteText.replace('USD', '').replace('.', '').trim(); 

    // Convertir el valor a número
    LoteValue = parseFloat(LoteValue);

    // Verificar si el valor convertido es un número válido
    if (isNaN(LoteValue)) {
        console.error("Valor inválido para el lote:", loteId);
        return;
    }

    // Calcular el 5% del valor de LoteValue (anticipo)
    let anticipo = LoteValue * 0.05;

    // Mostrar el resultado en la celda con id="AntLoteId"
    let anticipoElement = document.getElementById(anticipoId);
    if (anticipoElement) {
        anticipoElement.textContent = "USD " + Math.ceil(anticipo);
    } else {
        console.error("Elemento no encontrado para anticipo:", anticipoId);
    }
    // Calcular el valor por cuota para una financiación en DOCE CUOTAS
    let DoceCuotas = (LoteValue - anticipo) * 1.08 / 12;

    // Mostrar el resultado en la celda con id="Cuotas12LoteId"
    let cuotasElement = document.getElementById(Cuotas12Id);
    if (cuotasElement) {
        cuotasElement.textContent = "USD " + Math.ceil(DoceCuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas12Id);
    }
        // Calcular el valor por cuota para una financiación en VEINTICUATRO CUOTAS
        let VcuatroCuotas = (LoteValue - anticipo) * 1.16 / 24;

        // Mostrar el resultado en la celda con id="Cuotas24LoteId"
        let vcuotasElement = document.getElementById(Cuotas24Id);
        if (vcuotasElement) {
            vcuotasElement.textContent = "USD " + Math.ceil(VcuatroCuotas);
        } else {
            console.error("Elemento no encontrado para cuotas:", Cuotas24Id);
        }

         // Calcular el valor por cuota para una financiación en TREINTA Y SEIS CUOTAS
         let TseisCuotas = (LoteValue - anticipo) * 1.24 / 36;

         // Mostrar el resultado en la celda con id="Cuotas36LoteId"
         let tcuotasElement = document.getElementById(Cuotas36Id);
         if (tcuotasElement) {
             tcuotasElement.textContent = "USD " + Math.ceil(TseisCuotas);
         } else {
             console.error("Elemento no encontrado para cuotas:", Cuotas36Id);
         }
         // Calcular el valor por cuota para una financiación en CUARENTA Y OCHO CUOTAS
         let CochoCuotas = (LoteValue - anticipo) * 1.24 / 36;

         // Mostrar el resultado en la celda con id="Cuotas48LoteId"
         let ccuotasElement = document.getElementById(Cuotas48Id);
         if (ccuotasElement) {
             ccuotasElement.textContent = "USD " + Math.ceil(CochoCuotas);
         } else {
             console.error("Elemento no encontrado para cuotas:", Cuotas48Id);
         }
}
    
// Función para calcular valores de cualquier lote en pesos
function  calcularFpesos(loteId, anticipoPId, Cuotas60Id,Cuotas72Id,Cuotas84Id,RefPesosId) {
    // Obtener el valor del lote (texto de la celda con id="LoteId")
    let loteElement = document.getElementById(loteId);
    if (!loteElement) {
        console.error("Elemento no encontrado:", loteId);
        return;
    }
    let LoteText = loteElement.textContent.trim();  // Extraer el texto
    // Eliminar la palabra 'USD', los puntos y cualquier espacio extra
    let LoteValue = LoteText.replace('USD', '').replace('.', '').trim(); 

    // Convertir el valor a número
    LoteValue = parseFloat(LoteValue);

    let refP = LoteValue * Dolar
    let refPElement = document.getElementById(RefPesosId);
    if (refPElement) {
        refPElement.textContent =  refP.toLocaleString(0);
    } else {
        console.error("Elemento no encontrado para anticipo:",  RefPesosId);
    }

    LoteValorP= LoteValue * Dolar

    // Calcular el 20% del valor de LoteValue (anticipo)
    let anticipoP = LoteValorP * 0.20;

    // Mostrar el resultado en la celda con id="AntLoteId"
    let anticipoPElement = document.getElementById(anticipoPId);
    if (anticipoPElement) {
        anticipoPElement.textContent = anticipoP.toLocaleString(0);
    } else {
        console.error("Elemento no encontrado para anticipo:", anticipoPId);
    }
    // Calcular el valor por cuota para una financiación en SESENTA CUOTAS
    let Sesentacuotas = ((LoteValorP - anticipoP) * 1.25 / 60) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas60LoteId"
    let ScuotasElement = document.getElementById(Cuotas60Id);
    if (ScuotasElement) {
        ScuotasElement.textContent =  Math.ceil(Sesentacuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas60Id);
    }

    // Calcular el valor por cuota para una financiación en SETENTA Y DOS CUOTAS
    let Sdoscuotas = ((LoteValorP - anticipoP) * 1.30 / 72) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas72LoteId"
    let SdcuotasElement = document.getElementById(Cuotas72Id);
    if (SdcuotasElement) {
        SdcuotasElement.textContent =  Math.ceil(Sdoscuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas72Id);
    }

    // Calcular el valor por cuota para una financiación en OCHENTA Y CUATRO CUOTAS
    let Ocuatrocuotas = ((LoteValorP - anticipoP) * 1.35 / 84) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas72LoteId"
    let OcuotasElement = document.getElementById(Cuotas84Id);
    if (OcuotasElement) {
        OcuotasElement.textContent =  Math.ceil(Ocuatrocuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas84Id);
    }

}

