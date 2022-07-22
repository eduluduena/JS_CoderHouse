// Objetos literales

const miMouse = {
    marca: "Logitech",
    color: "Negro",
    esWirless: false,
    modelo: "G205"
}

// console.log("La marca de mi mouse es: " + miMouse.marca)

// miMouse.color = "Rojo"
// console.log("El color de mi mouse es: " + miMouse.color)

// Objetos Constructores

// function Automovil(marca, modelo, anio, color){
//     this.marca = marca
//     this.modelo = modelo
//     this.anio = anio
//     this.color = color
// }

// const automovil = new Automovil("Fiat", "Uno", 2012, "verde")
// const automovil2 = new Automovil(automovil.marca, "Focus", 2016, "Blanco")

// console.log(automovil)
// console.log(automovil2)

// function Automovil(auto){
//     this.marca = auto.marca
//     this.modelo = auto.modelo
//     this.anio = auto.anio
//     this.color = auto.color
// }

// const auto = new Automovil({
//     marca: "Fiat", 
//     modelo: "Uno", 
//     anio: 2012, 
//     color: "verde"
// })

// console.log(auto)

// metodos de String

// let frase = "no todo lo que brilla es oro"

// console.log("La longitud de la frase en caracteres: " + frase.length)

// console.log(frase.toUpperCase())
// console.log(frase.toLowerCase())

// METODOS 

function Automovil(marca, modelo, anio, color){
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.color = color
    //agrego un metodo
    this.encender = () => { alert("Alerta: " + this.marca + " " + this.modelo + " se acaba de encender") }

}

const automovil = new Automovil("Fiat", "Uno", 2012, "verde")
const automovil2 = new Automovil(automovil.marca, "Focus", 2016, "Blanco")

console.log(automovil)
console.log(automovil2)

//llamo al metodo encender
automovil.encender()

// Operador IN y For IN (Devuelve un True or Flase) (Pregunta si marca existe dentro de automovil)

let tieneMarca = "marca" in automovil
console.log(tieneMarca)

// For IN
for (let i in miMouse) {
    console.log(i)
    console.log(miMouse[i])
}

// Clases

class Bicicleta{
    constructor(marca, rodado, color, condicion){
        this.marca = marca
        this.rodado = rodado
        this.color = color
        this.condicion = condicion
        this.mostrarBici = () => { alert("Bicicleta:\n" + this.marca + "\n"+ this.rodado + "\n"+ this.color + "\n"+ this.condicion) }
    }
}

const bici = new Bicicleta("Seat", 27, "Rojo", "Usado")
console.log(bici)

bici.mostrarBici()