// Operador Ternario
// condicion ? caso1 : caso2

const usuario = {
    nro: 15551,
    nombre: "Jhon Doe",
    edad: 22,
    telefono:{
        trabajo: 3516693706,
        casa: 3516679460
    }
}

const permiso = (usuario.edad >= 18) ? true : false

// permiso ? alert("Puede Comprar Alcohol"): alert("NO Puede Comprar Alcohol")

// Reduccion Condicional &&

const registroIngreso = usuario.edad >= 18 && new Date()
console.log(registroIngreso)

//operador Logico OR

console.log( usuario || "El usuario no existe")

//Desestructuracion

let {nombre} = usuario

console.log(nombre)

let { telefono: { trabajo }} = usuario

console.log(trabajo)

//Desestructuracion con alias
const {nro:numeroSocio} = usuario
console.log(numeroSocio)

const desestructurar = ({edad, nombre}) => {
    console.log(nombre, edad)
}

desestructurar(usuario)

window.addEventListener('click', ({x,y}) => {
    console.log(x,y)
})

//Desestructuracion de arrays
const nombres = ["Juan", "Julieta", "Candela","Eduardo"]

const [pri, seg, ,cuar] = nombres

console.log(pri)
console.log(seg)
console.log(cuar)

//Spread de ARRAYS
console.log(...nombres)

function sumar(n1,n2,n3){
    return n1 + n2 + n3
}

const listaPrecios = [300, 500, 100]

let total = sumar(...listaPrecios)
console.log(total)

const numeros = [4,11,51,51,31,64,51,3]
console.log(Math.max(...numeros))

//spread array dentro de un objeto
const arrayAObjeto = {
    ...nombres
}
console.log(arrayAObjeto)

//Union de array en otro array
console.log([...nombres, ...listaPrecios])

//spread de OBJETOS
const usuarioConPrecio = {
    ...usuario,
    precio:30
}
console.log(usuarioConPrecio)

//Rest parameters
function sumar(...numeros){
    return numeros.reduce((acc,n) => acc + n, 0)
}

const precios = [300, 500, 100,1000]

let total2 = sumar(...precios)
console.log(total2)