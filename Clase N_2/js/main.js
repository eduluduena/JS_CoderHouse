const age_act = 2022

let age = parseInt(prompt("Ingrese el año de su vehiculo: "))
let age_tot = age_act - age

if(age_tot > 10){
    alert("El vehiculo paga 100 USD")
} else {
    alert("El vehiculo paga 200 USD")
}

let edad = parseInt(prompt("Ingrese tu edad"))

let esmayordeedad = (edad >= 18)

if (esmayordeedad){
    console.log("Puede ingresar al cine")
} else {
    console.log("No puede ingresar")
}

let num = parseInt(prompt("Ingrese un numero"))

if ((num >= 10) && (num <= 50)){
    alert("El numero esta dentro de 10 y 50")
}else{
    alert("El numero no esta dentro del rango")
}