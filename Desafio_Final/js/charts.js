const productos = [];
const nombreProductos = []
const cantidadProductos = []
const color = []

if (JSON.parse(localStorage.getItem("productos"))) {
    let localSavedProductos = JSON.parse(localStorage.getItem("productos"))

    for (const producto of localSavedProductos) {
    productos.push(producto);
    }
}

for (const producto of productos) {
    nombreProductos.push(producto.titulo)
    cantidadProductos.push(producto.cantidad)
    color.push("hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' +  (85 + 10 * Math.random()) + '%)')
}

const pChart = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pChart, {
  type: "pie",
  data: {
    labels: nombreProductos,
    datasets: [
      {
        data: cantidadProductos,
        backgroundColor: color,
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

