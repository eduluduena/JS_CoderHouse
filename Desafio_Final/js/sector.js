const sectores = [];

window.onload = () => {
  if (JSON.parse(localStorage.getItem("sectores"))) {
  let localSaved = JSON.parse(localStorage.getItem("sectores"))
  for (const sector of localSaved) {
    sectores.push(sector);
  }
  createTable()
}
}

function Sector(id, titulo, cantidad, rubro) {
  this.id = id;
  this.titulo = titulo;
}

setCreate = () => {
  sectores.push(
    new Sector(
      parseInt(document.getElementById("codigo").value),
      document.getElementById("titulo").value
    )
  );
  let tabla = document.querySelector("#table");
  tabla.innerHTML = ""
  createTable()
  toastify(true, "Se creo el sector correctamente")
};

agregar = (id, sectores) => {
  document.getElementById("btn-add-save").onclick = () => {
    sectores.findIndex((obj) => {
      if (obj.id === parseInt(id)) {
        obj.cantidad += parseInt(document.getElementById("addCantidad").value);
      }
    });
    parseInt((document.getElementById("addCantidad").value = 0));
    createTable();
    toastify(true, "Se agrego el stock del sector correctamente")
  };
};

editar = (id, sectores) => {
  const indexOfObject = sectores.findIndex(sector => sector.id === parseInt(id));
  document.getElementById("editID").value = sectores[indexOfObject].id
  document.getElementById("editTitle").value = sectores[indexOfObject].titulo
  document.getElementById("editRubro").value = sectores[indexOfObject].rubro
  document.getElementById("editCantidad").value = sectores[indexOfObject].cantidad

  document.getElementById("btn-edit-save").onclick = () => {
    sectores.findIndex((obj) => {
      if (obj.id === parseInt(id)) {
        obj.id = parseInt(document.getElementById("editID").value);
        obj.titulo = document.getElementById("editTitle").value
        obj.cantidad = document.getElementById("editCantidad").value
        obj.rubro = document.getElementById("editRubro").value
      }
    });
    parseInt((document.getElementById("addCantidad").value = 0));
    createTable();
    toastify(true, "Se edito el sector correctamente")
  }
};

eliminar = (id, sectores) => {
  const indexOfObject = sectores.findIndex(sector => sector.id === parseInt(id));
  sectores.splice(indexOfObject, 1);
  createTable();
  toastify(false, "Se elimino el sector correctamente")
};

createTable = () => {
  localStorage.setItem("sectores", JSON.stringify(sectores));
  let tabla = document.querySelector("#table");
  tabla.innerHTML = "";
  for (const sector of sectores) {
    tabla.innerHTML += `
        <tr id="tr${sector.id}">
            <th scope="row" id="${sector.id}">${sector.id}</th>
            <td id="titulo${sector.id}">${sector.titulo}</td>
            <td id="acciones${sector.id}">
                <button type='button' class='btn btn-outline-primary' onclick='editar(document.getElementById("${sector.id}").id, sectores)' data-bs-toggle='modal' data-bs-target='#editModal'>
                    <span class='bi-pencil'></span>
                </button> 
                <button type='button' onclick='eliminar(document.getElementById("${sector.id}").id, sectores)' class='btn btn-outline-danger'>
                    <span class='bi-trash'></span>
                </button>
            </td>
        </tr>
        `;
  }
};

toastify = (condition, text) => {
  gradiente = condition == true ? "#00b09b, #96c93d" : "#790909, #d60000"
  Toastify({
    text: text,
    className: "info",
    style: {
      background: "linear-gradient(to right," + gradiente + ")",
    }
  }).showToast();
}