let a = true
stock = [0,0,0,0,0]


while (a) {
    var producto = new Deposito({
        condicion: prompt("Desea agregar o restar stock?"),
        nombre: prompt("Ingrese el producto al cual le editara el stock inicial \n- Gondola \n- Rack \n- Estanteria \n- Riel \n- Mensula  \n - 'x' para terminar").toLowerCase(), 
    })

    switch(producto.nombre){
        case "gondola": 
        case "rack": 
        case "estanteria": 
        case "riel": 
        case "mensula": 
            producto.cantidad = producto.setCantidad() 
            break
        default: 
            a = false
            break
    }
}

for (let i = 0; i <= stock.length - 1 ; i++) {
    alert("El stock de " + producto.nombre + " es de " + stock[i])
}

function Deposito (producto) {
    this.nombre = producto.nombre
    this.condicion = producto.condicion
    this.setCantidad = () => { 
        this.cantidad = parseInt(prompt("Inserte la cantidad de stock de " + this.nombre + " a agregar"))
        if (this.condicion == "agregar") {
            switch(this.nombre){
                case "gondola": 
                    stock[0] = stock[0] + this.cantidad 
                    break
                case "rack": 
                    stock[1] = stock[1] + this.cantidad 
                    break
                case "estanteria": 
                    stock[2] = stock[2] + this.cantidad 
                    break
                case "riel": 
                    stock[3] = stock[3] + this.cantidad 
                    break
                case "mensula":     
                    stock[4] = stock[4] + this.cantidad 
                    break
            }
        } else if (this.condicion == "restar") {
        switch(this.nombre){
            case "gondola": 
                    stock[0] = stock[0] - this.cantidad 
                    break
                case "rack": 
                    stock[1] = stock[1] - this.cantidad 
                    break
                case "estanteria": 
                    stock[2] = stock[2] - this.cantidad 
                    break
                case "riel": 
                    stock[3] = stock[3] - this.cantidad 
                    break
                case "mensula":     
                    stock[4] = stock[4] - this.cantidad    
                    break
            }
        }
        console.log(stock)
    }
}