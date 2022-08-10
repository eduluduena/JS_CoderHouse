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
  let tabla = document.querySelector("#table");
  tabla.innerHTML = "";
  crateTable();
};

agregar = (id, productos) => {
  document.getElementById("btn-save").onclick = () => {
    const indexOfObject = productos.findIndex((obj) => {
      if (obj.id === parseInt(id)) {
        obj.cantidad += parseInt(document.getElementById("addCantidad").value);
      }
    });
    parseInt((document.getElementById("addCantidad").value = 0));
    crateTable();
  };
};

eliminar = (id, productos) => {
  const indexOfObject = productos.findIndex((obj) => {
    if (obj.id === parseInt(id)) {
    }
  });
  productos.splice(indexOfObject, 1);
  crateTable();
};

crateTable = () => {
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
                <button type='button' class='btn btn-outline-primary'>
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
