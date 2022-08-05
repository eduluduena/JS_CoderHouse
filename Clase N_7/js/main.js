// // Funcion que retorna funcion
// function mayorQue(n){
//     return (m) => m >= n
// }

// let mayorDeEdad = mayorQue(18)
// let edad = prompt("Ingrese la edad")
// console.log(mayorDeEdad(edad)) 

// const numeros = [1,2,3,4,5,6]

// numeros.forEach((num) => console.log(num))

const libros = [
        { 
            id: 1, 
            nombre: "Hahahah", 
            genero: "risas",
            precio: 123
        },
        { 
            id: 2, 
            nombre: "jojojo", 
            genero: "navidad",
            precio: 10
        },
        { 
            id: 3, 
            nombre: "pipipi", 
            genero: "pajaro",
            precio: 100
        },
    ];

//forEach
libros.forEach((libro) => console.log(libro.id));
// Find
const resultado = libros.find((el) => el.id === 3) //Busca solamente el primero

if (resultado != undefined){
    console.log("El libro pertenece al array")
}

//Filter
const baratos = libros.filter((libro)=> libro.precio<50)
console.log(baratos)

//some (devuelve true or false)
const existe = libros.some((libro) => libro.genero.nombre = "pipipi")
console.log(existe)

//map
const conIva = libros.map((libro) =>{
    return {
        id: libro.id,
        nombre: libro.nombre,
        genero: libro.genero,  
        precio: libro.precio * 1.21
    }
})

console.table(conIva) //forma mas comoda de mostrar los datos

//reduce
const total = libros.reduce((acumulador, libro) => libro.precio + acumulador,0)
console.table(total)

//sort
libros.sort((a, b) => b.precio - a.precio) //descendente
console.table(libros)

libros.sort((a, b) => a.precio - b.precio) //descendente
console.table(libros)
 
//Math
console.log(Math.max(1,2,3,4,5,6,3))
console.log(Math.min(1,2,3,4,5,6,3))
console.log(Math.ceil(1.14)) //entero mayor mas proximo
console.log(Math.floor(1.14)) //entero menor mas proximo
console.log(Math.round(1.5)) //redondea al entero mas proximo
console.log(Math.round(1.5)) //Raiz Cuadrada
console.log(Math.random()) //numero aleatorio entre 0 y 1 con coma
console.log(Math.round(Math.random() * 100)) //Numeros entre 0 y 100

for(let i=1;i<=3;i++){
    let resultado = Math.round(Math.random() * 5 + 1)
    console.log("Dado"+ i +": " + resultado)
}

//DATE
let ahora = new Date()
console.log(ahora)

//mas presentable
console.log(ahora.toLocaleString())
console.log(ahora.toLocaleDateString())
console.log(ahora.toLocaleTimeString())

console.log(ahora.getDay())
console.log(ahora.getMonth())
console.log(ahora.getFullYear())
