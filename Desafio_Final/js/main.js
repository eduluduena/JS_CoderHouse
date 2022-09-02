const productos = [];
const sectores = [];
let timeline = JSON.parse(localStorage.getItem("timeline"))

if (timeline == null) {
  timeline = []
}

// Get en proceso, por el momento estoy obteniendo que no tengo autorizacion para acceder a la api

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("grant_type", "client_credentials");
// urlencoded.append("client_id", "arbrasfabrica@gmail.com");
// urlencoded.append("client_secret", "0fe26dae5d434a7182a7c8ea21c9cc60");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("https://rest.contabilium.com/token", requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     fetch("https://rest.contabilium.com/api/common/paises", {
//       method: 'GET',
//       redirect: 'follow',
//       header: ['Content-length: 0', 'Content-type: application/json', 'Authorization: Bearer' . result.access_token, 'Ocp-Apim-Subscription-Key' . result.subscription_key]
//     })
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   })
//   .catch(error => console.log('error', error));


// Este fetch y el archivo productos.json solamente fueron agregado para el desafio (BORRAR)
fetch("./productos.json")
  .then(response => response.json())
  .then(result => console.log(result))

function onload() {
  // Creo la tabla de productos con los datos guardados
  if (JSON.parse(localStorage.getItem("productos"))) {
    let localSavedProductos = JSON.parse(localStorage.getItem("productos"))

    for (const producto of localSavedProductos) {
      productos.push(producto);
    }
    createTable()
  }
  // Asigno los sectores creados en el archivo sector.js al select de ID "Sectores"
  if (JSON.parse(localStorage.getItem("sectores"))) {
    let localSavedSectores = JSON.parse(localStorage.getItem("sectores"))

    for (const sector of localSavedSectores) {
      sectores.push(sector);
    }

    sectores.forEach(sector =>
      document.getElementById('rubro').options.add(
        new Option(sector.titulo)
      )
    );
    sectores.forEach(sector =>
      document.getElementById('editRubro').options.add(
        new Option(sector.titulo)
      )
    );
  }

  if (JSON.parse(localStorage.getItem("timeline"))) {
    let localSavedTimeline = JSON.parse(localStorage.getItem("timeline"))

    timeline = []

    for (const modificacion of localSavedTimeline) {
      timeline.push(modificacion);
    }
  }
}
function Producto(id, author, titulo, cantidad, rubro, date) {
  this.id = id;
  this.author = author;
  this.titulo = titulo;
  this.cantidad = cantidad;
  this.rubro = rubro;
  this.date = date
}

setCreate = () => {
  productos.push(
    new Producto(
      parseInt(document.getElementById("codigo").value),
      document.getElementById("author").value,
      document.getElementById("titulo").value,
      parseInt(document.getElementById("cantidad").value),
      document.getElementById("rubro").value,
      new Date().toLocaleDateString()
    )
  );
  timeline.push(
    {
      id: parseInt(document.getElementById("codigo").value),
      date: new  Date().toLocaleDateString(),
      author: document.getElementById("author").value,
      cantidad: parseInt(document.getElementById("cantidad").value),
      titulo: document.getElementById("titulo").value,
      rubro: document.getElementById("rubro").value,
      modificacion: "Agrego un producto"
    }
  )
  let tabla = document.querySelector("#table");
  tabla.innerHTML = ""
  createTable()
  toastify(true, "Se creo el producto correctamente")
};

agregar = (id, productos) => {
  document.getElementById("btn-add-save").onclick = () => {
    productos.findIndex((obj) => {
      if (obj.id === parseInt(id)) {
        obj.cantidad += parseInt(document.getElementById("addCantidad").value);
        timeline.push({ id: obj.id, date: new Date().toLocaleDateString(), author: obj.author, cantidad: obj.cantidad, titulo: obj.titulo, rubro: obj.rubro, modificacion: "Agrego stock" })
      }
    });
    parseInt((document.getElementById("addCantidad").value = 0));
    createTable();
    toastify(true, "Se agrego el stock del producto correctamente")
  };
};

editar = (id, productos) => {
  const indexOfObject = productos.findIndex(producto => producto.id === parseInt(id));
  document.getElementById("editID").value = productos[indexOfObject].id
  document.getElementById("editAuthor").value = productos[indexOfObject].author
  document.getElementById("editTitle").value = productos[indexOfObject].titulo
  document.getElementById("editRubro").value = productos[indexOfObject].rubro
  document.getElementById("editCantidad").value = productos[indexOfObject].cantidad

  document.getElementById("btn-edit-save").onclick = () => {
    productos.findIndex((obj) => {
      if (obj.id === parseInt(id)) {
        obj.id = parseInt(document.getElementById("editID").value);
        obj.author = document.getElementById("editAuthor").value;
        obj.titulo = document.getElementById("editTitle").value
        obj.cantidad = document.getElementById("editCantidad").value
        obj.rubro = document.getElementById("editRubro").value
        obj.date = new Date().toLocaleDateString()
        timeline.push({ id: obj.id, date: obj.date, author: obj.author, cantidad: obj.cantidad, titulo: obj.titulo, rubro: obj.rubro, modificacion: "Edición" })
      }
    });
    parseInt((document.getElementById("addCantidad").value = 0));
    createTable();
    toastify(true, "Se edito el producto correctamente")
  }
};

eliminar = (id, productos) => {
  const indexOfObject = productos.findIndex(obj => {
    obj.id === parseInt(id)
    if (obj.id === parseInt(id)) {
      timeline.push({ id: obj.id, date: new Date().toLocaleDateString(), author: obj.author, cantidad: obj.cantidad, titulo: obj.titulo, rubro: obj.rubro, modificacion: "Eliminado" })
    }
  });
  productos.splice(indexOfObject, 1);
  createTable();
  toastify(false, "Se elimino el producto correctamente")
};

createTable = () => {
  localStorage.setItem("productos", JSON.stringify(productos));
  localStorage.setItem("timeline", JSON.stringify(timeline));
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