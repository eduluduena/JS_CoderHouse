// function calcular_IVA(precio){
//     console.log(precio * 1.21 )
// }

// let resultado = calcular_IVA(parseFloat(prompt("Ingrese el precio")))

//Funcion con parametro y retorno

// function calcularDescuento (total, descuento){
//     descuento = (total*descuento)/100
//     return total - descuento
// }

// hay que recibir el valor del return
// let totalConDescuento = calcularDescuento(115,15)

// console.log(totalConDescuento)

//--------------- FUNCION ANONIMA --------------------

// const suma = function (a, b) { return a + b}
// console.log(suma(15,20))

//--------------- ARROW FUNCTION --------------------
//          LA FLECHA SIGNIFICA FUNCION
// const suma (a, b) => { return a + b }
// console.log(suma(15,20))

// si la funcion es una sola linea con return podemos evitar escribir el cuerpo

// const suma2 (a, b) => a + b
// console.log(suma2(15,20))

// FUNCION ARROW DE VARIAS LINEAS 

// const saludo = () => {
//     let nombre = prompt("Nombre")
//     let apellido = prompt("Apellido")
//     console.log(nombre + " " + apellido)
// }

// saludo()

// FUNCION ARROW DE VARIAS LINEAS 

const saludo = () => {
    let nombre = prompt("Nombre")
    let apellido = prompt("Apellido")
    let nombreCompleto = (nombre + " " + apellido)
    return nombreCompleto
}

let nomCompleto = saludo()
console.log(nomCompleto)