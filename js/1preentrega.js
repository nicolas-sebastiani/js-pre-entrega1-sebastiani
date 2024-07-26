alert("CHAPAS METALICAS SRL")
alert("Calculadora de precio de chapas de metal de 1mt x 1.5mts")

const precioDolar = 1480
const densidadAluminio = 2.72
const densidadAceroalCarbono = 7.84
const densidadInoxidable = 8.03
let material = 0
let espesor = 0
let cantidad = 0
let precioFinal = 0

function precioEnDolar (precioFinal) {
    let dolares = (precioFinal / precioDolar).toFixed(2)
    alert(`El precio en Dolares sera de $${dolares}`)
}

while (material != 4){
    material = prompt('| 1 - Aluminio | 2 - Acero al Carbono | 3 - Acero Inoxidable | 4 - Salir | Seleccione un Material: ');
    if (material == 1){
        espesor = prompt(' Seleccione un espesor (mm): |  1.6  |  2  |  3.2  |  4.7  |  6.35  |');
        cantidad = parseInt(prompt('Ingrese cantidad de chapa a comprar: '));
        switch(espesor){
            case '1.6':
                precioFinal = ((1.6 *( 150 * 100 )* densidadAluminio) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '2':
                precioFinal = ((2 *( 150 * 100 )* densidadAluminio) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '3.2':
                precioFinal = ((3.2 *( 150 * 100 )* densidadAluminio) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '4.7':
                precioFinal = ((4.7 *( 150 * 100 )* densidadAluminio) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '6.35':
                precioFinal = ((6.35 *( 150 * 100 )* densidadAluminio) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            }
    } else if (material == 2) {
        espesor = prompt('| 1.6 | 2 | 3.2 | 4.7 | 6.35 | Seleccione un espesor: ');
        cantidad = parseInt(prompt('Ingrese cantidad de chapa a comprar: '));
        switch(espesor){
            case '1.6':
                precioFinal = ((1.6 *( 150 * 100 )* densidadAceroalCarbono) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '2':
                precioFinal = ((2 *( 150 * 100 )* densidadAceroalCarbono) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '3.2':
                precioFinal = ((3.2 *( 150 * 100 )* densidadAceroalCarbono) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '4.7':
                precioFinal = ((4.7 *( 150 * 100 )* densidadAceroalCarbono) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '6.35':
                precioFinal = ((6.35 *( 150 * 100 )* densidadAceroalCarbono) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            }
    } else if (material == 3) {
        espesor = prompt('| 1.6 | 2 | 3.2 | 4.7 | 6.35 | Seleccione un espesor: ');
        cantidad = parseInt(prompt('Ingrese cantidad de chapa a comprar: '));
        switch(espesor){
            case '1.6':
                precioFinal = ((1.6 *( 150 * 100 )* densidadInoxidable) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '2':
                precioFinal = ((2 *( 150 * 100 )* densidadInoxidable) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '3.2':
                precioFinal = ((3.2 *( 150 * 100 )* densidadInoxidable) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '4.7':
                precioFinal = ((4.7 *( 150 * 100 )* densidadInoxidable) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal.toFixed(2));
                break;
            case '6.35':
                precioFinal = ((6.35 *( 150 * 100 )* densidadInoxidable) * cantidad).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            }
    } 
}