const productos = [];
const nombreProductos = []
const cantidadProductos = []

if (JSON.parse(localStorage.getItem("productos"))) {
    let localSavedProductos = JSON.parse(localStorage.getItem("productos"))

    for (const producto of localSavedProductos) {
    productos.push(producto);
    }
}


for (const producto of productos) {
    nombreProductos.push(producto.titulo)
    cantidadProductos.push(producto.cantidad)
}

const pChart = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pChart, {
  type: "pie",
  data: {
    labels: nombreProductos,
    datasets: [
      {
        data: cantidadProductos,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

console.log(cantidadProductos)
const bChart = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(bChart, {
  type: "bar",
  data: {
    labels: nombreProductos,
    datasets: [
      {
        label: "Cantidad",
        data: cantidadProductos,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        borderWidth: 1,
      },
    ],
    
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
