let amount_gond = 0
let amount_rack = 0
let amount_est = 0
let producto 
let a = true

while(a){
    
    producto = prompt("Ingrese el producto al cual le editara el stock inicial \n Gondola - Rack - Estanteria \n 'x' para terminar")

    switch(producto){
        case "Gondola":
        case "gondola": 
        case "GONDOLA":
            console.log(producto)
            let amount_gond_act = prompt("Inserte la cantidad de stock de gondolas a agregar")
            amount_gond = parseInt(amount_gond_act) + amount_gond
            console.log("El stock por el momento es de: " + amount_gond)
            break
        case "Rack":
        case "rack": 
        case "RACK":
            console.log(producto)
            let amount_rack_act = prompt("Inserte la cantidad de stock de racks a agregar")
            amount_rack = parseInt(amount_rack_act) + amount_rack
            console.log("El stock por el momento es de: " + amount_rack)
            break
        case "Estanteria":
        case "estanteria": 
        case "ESTANTERIA":
            console.log(producto)
            let amount_est_act = prompt("Inserte la cantidad de stock de estanterias a agregar")
            amount_est = parseInt(amount_est_act) + amount_est
            console.log("El stock por el momento es de: " + amount_est)
            break
        case "x": 
        case "X":
            a = false 
            break
    }
}

alert("El stock total es de: \n - " + amount_gond + " Gondolas\n - " + amount_rack + " Racks\n - " + amount_est + " Estanterias")
