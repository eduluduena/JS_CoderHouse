const productos = [];

window.onload = () => {
  let localSaved = JSON.parse(localStorage.getItem("productos"))
  for (const producto of localSaved) {
    productos.push(producto);
  }
  createTable()
}

function Producto(id, titulo, cantidad, rubro) {
  this.id = id;
  this.titulo = titulo;
  this.cantidad = cantidad;
  this.rubro = rubro;
}

setCreate = () => {
    productos.push( 
      new Producto(
        parseInt(document.getElementById("codigo").value),
        document.getElementById("titulo").value,
        parseInt(document.getElementById("cantidad").value),
        document.getElementById("rubro").value
      )
    );
    let tabla = document.querySelector("#table");
    tabla.innerHTML = ""
    createTable()
};

agregar = (id, productos) => {
  document.getElementById("btn-add-save").onclick = () => {
    productos.findIndex((obj) => {
      if (obj.id === parseInt(id)) {
        obj.cantidad += parseInt(document.getElementById("addCantidad").value);
      }
    });
    parseInt((document.getElementById("addCantidad").value = 0));
    createTable();
  };
};

editar = (id, productos) => {
  const indexOfObject = productos.findIndex( producto => producto.id === parseInt(id));
  document.getElementById("editID").value = productos[indexOfObject].id
  document.getElementById("editTitle").value = productos[indexOfObject].titulo
  document.getElementById("editRubro").value = productos[indexOfObject].rubro
  document.getElementById("editCantidad").value = productos[indexOfObject].cantidad

  document.getElementById("btn-edit-save").onclick = () => {
    productos.findIndex((obj) => {
      if (obj.id === parseInt(id)) {
        obj.id = parseInt(document.getElementById("editID").value);
        obj.titulo = document.getElementById("editTitle").value
        obj.cantidad = document.getElementById("editCantidad").value
        obj.rubro = document.getElementById("editRubro").value
      }
    });
    parseInt((document.getElementById("addCantidad").value = 0));
    createTable();
  }
};

eliminar = (id, productos) => {
  const indexOfObject = productos.findIndex( producto => producto.id === parseInt(id));
  productos.splice(indexOfObject, 1);
  createTable();
};

createTable = () => {
  localStorage.setItem("productos", JSON.stringify(productos));
  let tabla = document.querySelector("#table");
  tabla.innerHTML = "";
  for (const producto of productos) {
    tabla.innerHTML += `
        <tr id="tr${producto.id}">
            <th scope="row" id="${producto.id}">${producto.id}</th>
            <td id="titulo${producto.id}">${producto.titulo}</td>
            <td id="rubro${producto.id}">${producto.rubro}</td>
            <td id="cantidad${producto.id}" value="${producto.cantidad}">${producto.cantidad}</td>
            <td id="acciones${producto.id}">
                <button type='button' onclick='agregar(document.getElementById("${producto.id}").id, productos)' class='btn btn-outline-success' data-bs-toggle='modal' data-bs-target='#addModal' >
                    <span class='bi-plus'></span>
                </button> 
                <button type='button' class='btn btn-outline-primary' onclick='editar(document.getElementById("${producto.id}").id, productos)' data-bs-toggle='modal' data-bs-target='#editModal'>
                    <span class='bi-pencil'></span>
                </button> 
                <button type='button' onclick='eliminar(document.getElementById("${producto.id}").id, productos)' class='btn btn-outline-danger'>
                    <span class='bi-trash'></span>
                </button>
            </td>
        </tr>
        `;
  }
};
