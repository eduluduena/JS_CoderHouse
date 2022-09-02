const timelist = [];

window.onload = () => {
  // Creo la tabla de productos con los datos guardados
  let localSavedTimeline = JSON.parse(localStorage.getItem("timeline"))
  
  for (const modificacion of localSavedTimeline) {
    timelist.push(modificacion);
  }

  let timeline = document.querySelector("#timeline");
    for (const modificacion of timelist) {
        console.log(modificacion)
        timeline.innerHTML += `
        <li class="list-inline-item items-list">
        <div class="px-4 ">
          <div class="event-date badge bg-info"># ID: ${modificacion.id}</div>
          <h5 class="pt-2">${modificacion.modificacion}</h5>
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


