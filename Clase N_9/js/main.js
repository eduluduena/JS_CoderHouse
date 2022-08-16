//EVENTOS DOM
const carrito=[];
const yerbaMate={
    id:1,
    imagen:"./imagenes/yerba.jpg",
    nombre:"Yerba mate Taragüi",
    descripcion:"Yerba mate con palo 1kg",
    precio:890.0
}

let tarjetas=document.getElementById("tarjetas");
tarjetas.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src=${yerbaMate.imagen} class="card-img-top" alt="yerba">
    <div class="card-body">
        <h5 class="card-title">${yerbaMate.nombre}</h5>
        <p class="card-text">${yerbaMate.descripcion}</p>
        <p class="card-text">$ ${yerbaMate.precio}</p>
        <button id="miBoton" class="btn btn-primary">Comprar</button>
    </div>
    </div>
`;

let miBoton=document.getElementById("miBoton");
//OPCION 1
// miBoton.addEventListener("click",interactuar);
// function interactuar(){
//     alert("Agregaste la yerba mate al carrito");
// }

//OPCION2
miBoton.onclick = () => {
    console.log("Agregaste la yerba mate al carrito");
    carrito.push(yerbaMate);
    console.table(carrito);
}

miBoton.onmouseover = () => {
    console.log("Quieres comprar Yerba Mate Taragüi???");
    miBoton.className="btn btn-danger";
}

miBoton.onmouseout = () => {
    miBoton.className="btn btn-primary";
}

//EVENTOS DE TECLADO
let campoNombre=document.getElementById("nombre");
let campoEdad=document.getElementById("edad");
campoEdad.onkeydown=()=>{console.log("Presionaste una tecla")};
campoEdad.onkeyup=()=>{console.log("Soltaste una tecla")};
campoEdad.onchange=()=>{
    console.log("Cambio el contenido del campo edad");
    console.log("Contenido actualizado: "+campoEdad.value);
}
campoNombre.oninput=()=>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="black";
    }else{
        campoNombre.style.color="red";
    }
}

//EVENTO SUBMIT
let formulario=document.getElementById("formulario");
formulario.addEventListener("submit",validarFormulario);

function validarFormulario(ev){
    if((campoNombre.value=="")||(!isNaN(campoNombre.value))||(campoEdad.value < 1)){
        ev.preventDefault();
        alert("Ingrese nombre válido o edad mayor a 1!");
    }
}

//EVENTO DE TECLADO DETECTANDO ENTER ASCII CODE
function capturarEnter(e){
    //segun navegador usamos la propiedad which o la propiedad keycode
    if(e.keycode==13 || e.which==13){
        alert("Presionaste la tecla ENTER !");
    } 
}

//EVENTO CLIPBOARD
let textos = document.getElementsByClassName("textoP");
//textos es un array si o si
textos[0].addEventListener("copy",imprimirAlertaDeCopia);
function imprimirAlertaDeCopia(){
    alert("Texto copiado con exito, usalo para el bien!!!");
}