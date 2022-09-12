const timelist = [];

window.onload = () => {
  // Creo la tabla de productos con los datos guardados
  let localSavedTimeline = JSON.parse(localStorage.getItem("timeline"))
  
  let tabla = document.querySelector("#table");

  for (const modificacion of localSavedTimeline) {
    timelist.push(modificacion);
  }

  for (const modificacion of timelist) {

    tabla.innerHTML += `
        <tr id="tr${modificacion.date}">
            <th scope="row" id="${modificacion.date}">${modificacion.date}</th>
            <td>${modificacion.author}</td>
            <td>${modificacion.titulo}</td>
            <td>${modificacion.cantidad}</td>
            <td>${modificacion.modificacion}</td>
            </td>
        </tr>
    `;

    if (modificacion.modificacion == "Edición"){
      modificacion.modificacion = ["pencil", "#80CBC4"]
    }else if (modificacion.modificacion == "Agrego un producto"){
      modificacion.modificacion = ["folder-plus", "#9FA8DA"]
    }else if (modificacion.modificacion == "Agrego stock"){
      modificacion.modificacion = ["plus", "#A5D6A7"]
    }else{
      modificacion.modificacion = ["trash", "#EF9A9A"]
    }
  }
  console.log(timelist)

  let timeline = document.querySelector("#timeline");
    for (const modificacion of timelist) {
        timeline.innerHTML += `
        <li class="list-inline-item items-list" style="border-top: 3px solid #e9ecef;">
        <div class="px-4 ">
          <div class="event-date" style="background-color: ${modificacion.modificacion[1]}" >
            <a class='bi-${modificacion.modificacion[0]} fs-4' style="color: white"  ></a>
          </div>
          <h5 class="pt-2"># ID: ${modificacion.id}</h5>
          <label class="text-muted">Autor: ${modificacion.author}</label></br>
          <label class="text-muted">Producto: ${modificacion.titulo}</label></br>
          <label class="text-muted">Cantidad: ${modificacion.cantidad}</label></br>
          <label class="text-muted">Sector: ${modificacion.rubro}</label></br>
          <label class="text-muted">Fecha: ${modificacion.date}</label>
        </div>
      </li>
          `;
    }
}

