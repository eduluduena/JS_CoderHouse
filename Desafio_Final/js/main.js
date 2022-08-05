function Producto(id, titulo, cantidad, rubro) {
    this.id = id;
    this.titulo = titulo;
    this.cantidad = cantidad;
    this.rubro = rubro;
}

const productos = [];

setCreate = () => {
    productos.push(
        new Producto(
            parseInt(document.getElementById("codigo").value),
            document.getElementById("titulo").value,
            parseInt(document.getElementById("cantidad").value),
            document.getElementById("rubro").value
        )
    );
    let posicion = String(productos.length)
    var select = document.getElementById("dynamic-select");
    select.options[select.options.length] = new Option(
        "# ID: " +
        document.getElementById("codigo").value +
        " | Titulo: " +
        document.getElementById("titulo").value,
        parseInt(document.getElementById("codigo").value)
    );
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = document.getElementById("codigo").value
    cell2.innerHTML = document.getElementById("titulo").value
    cell3.innerHTML = document.getElementById("rubro").value
    cell4.innerHTML = parseInt(document.getElementById("cantidad").value)
    cell5.innerHTML =
        "<button type='button' onclick='agregar(event)' class='btn btn-outline-success' data-bs-toggle='modal' data-bs-target='#addModal' ><span id='"+posicion+"' class='bi-plus'></span></button> <button type='button' class='btn btn-outline-primary'><span class='bi-pencil'></span></button> <button type='button' onclick='eliminar(event)' class='btn btn-outline-danger'><span class='bi-trash'></span></button>";
    document.getElementById("codigo").value = ""
    document.getElementById("titulo").value = ""
    document.getElementById("rubro").value = ""
    document.getElementById("cantidad").value = ""
    };

agregar = (event) => {
    console.log(event.target.id);

};

eliminar = (event) => {
    event.target.parentNode.parentNode.remove()
};
