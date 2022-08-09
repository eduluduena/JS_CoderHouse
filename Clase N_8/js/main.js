//DOM
console.log(document.body);
//getElementById
let seccionSuperior=document.getElementById("principal");
console.log(seccionSuperior.innerHTML);
seccionSuperior.style.background="yellow";

let titulo=document.getElementById("titulo");
titulo.style.font="bold 40px monospace";
titulo.innerText="Hoy cambia todo !";

//getElementsByTagName
let parrafos=document.getElementsByTagName("p");
console.log(parrafos);
parrafos[0].innerText=new Date().toLocaleString();

// //diapo 41 modificada
// // Crear nodo de tipo Elemento, etiqueta p
// let articulo = document.createElement("article");
// // Insertar HTML interno
// articulo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// // Añadir el nodo Element como hijo de seccionSuperior
// seccionSuperior.append(articulo);

//eliminar el segundo parrafo
parrafos[1].remove();

//array de objetos literales
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

//campos de texto
let campoEmpresa=document.getElementById("empresa");
let campoCantidad=document.getElementById("cantidad");
campoEmpresa.value="Mercado Libre";
campoCantidad.value=productos.length;

// //Diapo 44
// //Array con la información a agregar
// let ul=document.createElement("ul");
// document.body.append(ul);
// let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
// //Iteramos el array con for...of
// for (const persona of personas) {
//     //Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     ul.appendChild(li);
// }

//tabla
let tabla=document.createElement("table");
tabla.className="table table-striped";
let tablaBody=document.createElement("tbody");

for(const producto of productos){
    tablaBody.innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
}
tabla.append(tablaBody);
let inferior=document.getElementById("inferior");
inferior.append(tabla);

//cards
let cartas=document.getElementById("cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card col-md-3";
    carta.innerHTML=`
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    cartas.append(carta);
}




