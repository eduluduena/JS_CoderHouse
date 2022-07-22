let a = true
stock = [0,0,0,0,0]


while (a) {
    const producto = new Deposito({
        condicion: prompt("Desea agregar o restar stock?"),
        nombre: prompt("Ingrese el producto al cual le editara el stock inicial \n- Gondola \n- Rack \n- Estanteria \n- Mensula \n- Riel \n - 'x' para terminar").toLowerCase(), 
        cantidadTotal: 0
    })

    switch(producto.nombre){
        case "gondola": 
        case "rack": 
        case "estanteria": 
        case "rieles": 
        case "mensulas": 
            producto.cantidad = producto.setCantidad()
            console.log("El stock por el momento es de: " + producto.cantidad)
            switch(producto.nombre){
                case "gondola": 
                    stock[0] = producto.cantidadTotal
                    console.log("El stock total es de: " + stock[0])
                case "rack": 
                    stock[1] = producto.cantidadTotal
                case "estanteria": 
                    stock[2] = producto.cantidadTotal
                case "rieles": 
                    stock[3] = producto.cantidadTotal
                case "mensulas":     
                    stock[4] = producto.cantidadTotal
            }
            break
        default: 
            a=false
            break
    }
}

alert("El stock de gondolas es de " + stock[0])

function Deposito (producto) {
    this.nombre = producto.nombre
    this.setCantidad = () => { 
        if (producto.condicion == "agregar") {
            this.cantidad = parseInt(prompt("Inserte la cantidad de stock de " + this.nombre + " a agregar"))
            this.cantidadTotal = this.cantidad + producto.cantidadTotal
            return this.cantidadTotal
        }
        else if (producto.condicion == "restar"){
            this.cantidad = parseInt(prompt("Inserte la cantidad de stock de " + this.nombre + " a restar"))
            this.cantidadTotal = producto.cantidadTotal - this.cantidad
            return this.cantidadTotal
        }
    }
    
}


