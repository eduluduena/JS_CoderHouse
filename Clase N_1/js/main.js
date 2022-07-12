let name = prompt("Name")
let lname = prompt("Last Name")
let edad = prompt("Cuantos años tenes?")

edad = parseInt(edad) + 1

console.log("En un año tendras: " + edad + "Años")

amount_letters = name.length + lname.length

alert("Su nombre completo es: " + name + " " + lname + " y tiene " + amount_letters + " letras")
