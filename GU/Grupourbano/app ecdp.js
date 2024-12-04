
var Dolar = 1120
var Bolsa = 11033

    // Obtener el elemento por su ID (en este caso, el <span> con id="precio")
    var elementoPrecio = document.getElementById('Bolsa');

    // Insertar el valor de la variable en el contenido del elemento
    elementoPrecio.textContent = "$" + " "+ (Bolsa.toLocaleString());

// Lista de lotes y sus valores en USD
const lotesV = [
    { nombre: 'L14EC', valorUSD: 28000 },
    { nombre: 'L23EC', valorUSD: 26000 },
    { nombre: 'L31EC', valorUSD: 24000 },
    { nombre: 'L32EC', valorUSD: 24500 },
    { nombre: 'L36EC', valorUSD: 19000 },
    { nombre: 'L44EC', valorUSD: 18000 },

];

// Llamada inicial para cada lote
window.onload = function() {
    const lotesDisponiblesSM = [
      'L14EC','L23EC','L31EC','L32EC','L36EC','L44EC'
    ];

    // Iterar sobre los lotes disponibles
    lotesDisponiblesSM.forEach(loteId => {
        const anticipoId = 'Ant' + loteId;
        const Cuotas12Id = 'Cuotas12' + loteId;
        const Cuotas24Id = 'Cuotas24' + loteId;
        const Cuotas36Id = 'Cuotas36' + loteId;
        const Cuotas48Id = 'Cuotas48' + loteId;
        const Cuotas60Id = 'Cuotas60' + loteId;
        const Cuotas72Id = 'Cuotas72' + loteId;
        const Cuotas84Id = 'Cuotas84' + loteId;
        const RefPesosId = 'RefPesos' + loteId;
        
        calcularFpesos(loteId, anticipoId, Cuotas12Id, Cuotas24Id, Cuotas48Id, Cuotas36Id,Cuotas60Id, Cuotas72Id, Cuotas84Id, RefPesosId);  // Llamada a la función
    });
};

// Función para convertir los lotes de USD a pesos
function ValorLotesEnPesos(lotes, Dolar) {
    return lotes.map(lote => {
        return {
            nombre: lote.nombre,
            valorUSD: lote.valorUSD,
            valorPesos: lote.valorUSD * Dolar
        };
    });
}

// Función para calcular valores de cualquier lote en pesos
function calcularFpesos(loteId, anticipoId,Cuotas12Id, Cuotas24Id, Cuotas36Id, Cuotas48Id, Cuotas60Id, Cuotas72Id, Cuotas84Id, RefPesosId) {
    // Obtener el lote correspondiente del array de lotes
    const lote = lotesV.find(lote => lote.nombre === loteId);
    
    // Si el lote no existe, no hacer nada
    if (!lote) {
        console.error("Lote no encontrado:", loteId);
        return;
    }
    
    // Obtener el valor en pesos de ese lote
    const valorPesos = lote.valorUSD * Dolar;  
    
    // Mostrar el valor en la celda de referencia (RefPesosId)
    const refPElement = document.getElementById(RefPesosId);
    if (refPElement) {
        refPElement.textContent = valorPesos.toLocaleString();  // Formato con separadores de miles
    } else {
        console.error("Elemento no encontrado para referencia:", RefPesosId);
    }

    // Calcular el anticipo (20% del valor en pesos)
    const anticipoP = valorPesos * 0.20;

    // Mostrar el anticipo en la celda correspondiente (anticipoId)
    const anticipoPElement = document.getElementById(anticipoId);
    if (anticipoPElement) {
        anticipoPElement.textContent = anticipoP.toLocaleString();  // Formato con separadores de miles
    } else {
        console.error("Elemento no encontrado para anticipo:", anticipoId);
    }

      // Calcular el valor por cuota para una financiación en DOCE CUOTAS
      let   docecuotas = ((valorPesos - anticipoP) * 1.05 / 12) / Bolsa;

      // Mostrar el resultado en la celda con id="Cuotas12LoteId"
      let dcuotasElement = document.getElementById(Cuotas12Id);
      if (dcuotasElement) {
          dcuotasElement.textContent =  Math.ceil(docecuotas);
      } else {
          console.error("Elemento no encontrado para cuotas:", Cuotas12Id);
      }

     // Calcular el valor por cuota para una financiación en VEINTICUATRO
     let Vcuatrocuotas = ((valorPesos - anticipoP) * 1.1 / 24) / Bolsa;

     // Mostrar el resultado en la celda con id="Cuotas24LoteId"
     let vcuotasElement = document.getElementById(Cuotas24Id);
     if (vcuotasElement) {
         vcuotasElement.textContent =  Math.ceil(Vcuatrocuotas);
     } else {
         console.error("Elemento no encontrado para cuotas:", Cuotas24Id);
     }

    // Calcular el valor por cuota para una financiación en TREINTA y SEIS 
    let tseiscuotas = ((valorPesos - anticipoP) * 1.15 / 36) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas24LoteId"
    let tcuotasElement = document.getElementById(Cuotas36Id);
    if (tcuotasElement) {
        tcuotasElement.textContent =  Math.ceil(tseiscuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas36Id);
    }
    // Calcular el valor por cuota para una financiación en CUARENTA Y OCHO
    let C8cuotas = ((valorPesos - anticipoP) * 1.2 / 48) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas36LoteId"
    let CcuotasElement = document.getElementById(Cuotas48Id);
    if (CcuotasElement) {
        CcuotasElement.textContent =  Math.ceil(C8cuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas48Id);
    }
    // Calcular el valor por cuota para una financiación en SESENTA CUOTAS
    let scuotas = ((valorPesos - anticipoP) * 1.25 / 60) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas60LoteId"
    let secuotasElement = document.getElementById(Cuotas60Id);
    if (secuotasElement) {
        secuotasElement.textContent =  Math.ceil(scuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas60Id);
    }

    // Calcular el valor por cuota para una financiación en SETENTA Y DOS CUOTAS
    let s2cuotas = ((valorPesos - anticipoP) * 1.30 / 72) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas60LoteId"
    let sdcuotasElement = document.getElementById(Cuotas72Id);
    if (sdcuotasElement) {
        sdcuotasElement.textContent =  Math.ceil(s2cuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas72Id);
    }

    // Calcular el valor por cuota para una financiación en OCHENTA Y CUATRO CUOTAS
    let O4cuotas = ((valorPesos - anticipoP) * 1.35 / 84) / Bolsa;

    // Mostrar el resultado en la celda con id="Cuotas60LoteId"
    let OcuotasElement = document.getElementById(Cuotas84Id);
    if (OcuotasElement) {
        OcuotasElement.textContent =  Math.ceil(O4cuotas);
    } else {
        console.error("Elemento no encontrado para cuotas:", Cuotas84Id);
    }

}
     
     
 
 
 





