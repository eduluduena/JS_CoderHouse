//STORAGE
// //localStorage.setItem("usuario","Neo2022");

// localStorage.setItem("envio",true);

// let usuActual=localStorage.getItem("usuario");
// console.log(usuActual);

// let esEnvioADomicilio=localStorage.getItem("envio");
// console.log(esEnvioADomicilio);
// console.log(typeof(esEnvioADomicilio));

// localStorage.setItem("edad",40);
// let edadUsuario=localStorage.getItem("edad");
// console.log(edadUsuario);
// console.log(typeof(edadUsuario));

// sessionStorage.setItem("color","negro");
// let color=sessionStorage.getItem("color");
// console.log(color);
// sessionStorage.removeItem("color");
// sessionStorage.clear();

// //DIAPO 22
// //Ciclo para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }

// //Solicitar al usuario tres precios, calculamos la suma de los mismos
// //APlicamos el 10% de descuento y guardamos el resultado en el localStorage
// //con la clave "efectivo"


//JSON
// const objeto={nombre:"Pepe", nota:6};
// localStorage.setItem("alumno",objeto);//no funciona
// const objetoAJson=JSON.stringify(objeto);
// localStorage.setItem("miAlumno",objetoAJson);

// let traidoDeStorage = localStorage.getItem("miAlumno");
// console.log(traidoDeStorage)
// const deJsonAObjeto= JSON.parse(traidoDeStorage);
// console.log(deJsonAObjeto);

// //DIAPO 37
// const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
//                   {  id: 2,  producto: "Fideo", precio: 70 },
//                   {  id: 3,  producto: "Pan"  , precio: 50},
//                   {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// //Almacenar producto por producto
// // for (const producto of productos) {
// //     guardarLocal(producto.id, JSON.stringify(producto));
// // }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

// class Producto {
//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos2 = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//     productos2.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos2)
//     producto.sumaIva();

//modo oscuro o claro
let modo;
if(localStorage.getItem("modo")){
    modo=localStorage.getItem("modo");
}else{
    modo="light";
}

//**** */
let principal=document.getElementById("principal");
let boton=document.getElementById("mode");
document.body.className=modo;
principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "+modo;
localStorage.setItem("modo",modo);

boton.onclick=()=>{
    if(modo=="light"){
        document.body.className="dark";
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center dark"
        boton.innerText="Light Mode";
        modo="dark"
    }else{
        document.body.className="light";
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center light"
        boton.innerText="Dark Mode";
        modo="light"
    }
    localStorage.setItem("modo",modo);
}