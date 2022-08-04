// // ARRAYS
// const numeros = [1,2,3,4,5]
// let resultado = numeros[1] + numeros[3]
// console.log(resultado)

// // Saber la longitud del array (Metodo length)
// console.log(numeros.length)

// // Agregar elementos al final del array (Metodo push)
// console.log(numeros.push(resultado))

// // Agregar elementos al comienzo del array (Metodo unshift)
// console.log(numeros.unshift(0))

// // Eliminar elementos al final del array (Metodo pop)
// console.log(numeros.pop(numeros))

// // Eliminar elementos al comienzo del array (Metodo shift)
// console.log(numeros.shift(numeros))

// // Eliminar uno o varios elementos en cualquier posicion del array (Metodo splice)
// // (Posicion, cantidad)
// console.log(numeros.splice(2,2))

// // Une los elementos del array en un string (Metodo join)
// console.log(numeros.join(" - "))

// // Unir 2 listas de array (Metodo concat)
// const letras = ["a","b","c"]
// console.log(numeros.concat(letras))

// //El metodo slice devuelve una copia de una parte del array dentro de un nuevo array
// //Empezando por el inicio hasta el fin (Fin no incluido) (Metodo slice)
// const letras2 = letras.slice(0,2)
// console.log(letras)
// console.log(letras2)

// // Encuentra la posicion de un elemento en el array(Metodo indexOf)
// // Si la posicion de un elemento es distinta a -1 el elemento se encuentra en el array
// console.log("Posicion del elemento: " + letras.indexOf("b"))

// // Saber si un elemento existe en un array (Metodo includes)
// console.log(numeros.includes(2))

// // Invierte el orden del array (Metodo reverse) (Destructivo)
// console.log(numeros.reverse())

// //Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));


// //FOR OF 
// const libros = [
//         { 
//             id: 1, 
//             nombre: "Hahahah", 
//             genero: "risas",
//             precio: 123
//         },
//         { 
//             id: 2, 
//             nombre: "jojojo", 
//             genero: "navidad",
//             precio: 10
//         },
//         { 
//             id: 3, 
//             nombre: "pipipi", 
//             genero: "pajaro",
//             precio: 100
//         },
//     ];

// for (const libro of libros) {
//     console.log(libro.id, libro.nombre, libro.genero, libro.precio);
// }

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));

for (const producto of productos) {
    console.log(producto.precio)
}

//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos) {
    producto.sumaIva();
    console.log(producto.precio)
}