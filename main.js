let ticketsCampo = [{id: 1, 
    precio: 200, 
    cantidad: 0}];
let ticketsCampoT = [{id: 2, 
    precio: 150, 
    cantidad: 0}];
let ticketsPlateaA = [{id: 3, 
    precio: 100, 
    cantidad: 0}];
let ticketsPlateaB = [{id: 4, 
    precio: 100, 
    cantidad: 0}];
// const clase = 0;

// class TicketCampo {
//     constructor(precio, cantidad, claseTicket){
//         this.precio = precio;
//         this.cantidad = ticketsCampo;
//         this.claseTicket = clase;
//     }}

// class TicketCampoT {
//     constructor(precio, cantidad, claseTicket){
//         this.precio = precio;
//         this.cantidad = ticketsCampoT;
//         this.claseTicket = clase;
//     }}

// class TicketPlateaA {
//         constructor(precio, cantidad, claseTicket){
//         this.precio = precio;
//         this.cantidad = ticketsPlateaA;
//         this.claseTicket = clase;
// }}

// class TicketPlateaB {
//         constructor(precio, cantidad, claseTicket){
//         this.precio = precio;
//         this.cantidad = ticketsPlateaB;
//         this.claseTicket = clase;
// }}

// class Customer {
//     constructor(nombre, edad, email, descuento) {
//         this.name = nombre;
//         this.edad = edad;
//         this.email = email;
//         this.descuento = false;
//     }
//     checkDiscount() {
//         if(edad >= 60) {
//             this.descuento = true;
//         }
//     }
// }

// const customers = [];
// const cart = [];
// let claseDelTicket = 0;

// let botonCampo = document.getElementById('bone');
// let botonCampoT = document.getElementById('btwo');
// let botonPlateaB = document.getElementById('bthr');
// let botonPlateaA = document.getElementById('bfou');


// botonCampo.addEventListener('click', function(){
//     let claseDelTicket =+ 1;
//     console.log(claseDelTicket);
// })



// function determinarClase(){
//     // seleccionTicket = addEventListener('click', botonMain); // Mmmmm no
//     botonMain.forEach(element => {
//         if (botonMain.id === "bone") {
//             cart.push(ticketsCampo[0].precio)
//             console.log(cart);
//         }else if(botonMain.id === "btwo"){
//             cart.push(ticketsCampo[1].precio)
//             console.log(cart);
//         }else if(botonMain.id === "bthr"){
//             cart.push(ticketsCampo[2].precio)
//             console.log(cart);
//         }else if(botonMain.id === "bfou"){
//             cart.push(ticketsCampo[3].precio)
//             console.log(cart);
//         }
//     });
//     // switch(claseDelTicket) {
//     //     case 1: 
//     //     case 2:
//     //     case 3:
//     //     case 4:
//     // }
// }
// determinarClase();

// function addTicket(ticket) {
//     cart.push(ticket);
// }

// function checkCustomer(){
//     nombre = document.getElementById('name'); //e.taget.value;
//     edad = document.getElementById('age');//e.taget.value;
//     email = document.getElementById('email');//e.taget.value; chequear
//     descuento = checkDiscount();
//     return customers.push(new Customer(nombre, edad, email, descuento));
// }

// let botonConfirmar = document.querySelector("#buttonConfirm");
// botonConfirmar.addEventListener("click", function(){
// let nuevoForm = document.createElement('section');
// nuevoForm.innerHTML = `    <section class="form">
//         <form action="" id="form">
//         <label for="name">Nombre</label>
//         <input type="text" id="name"> <br>
//         <label for="age" id="age">Edad</label>
//         <input type="text"> <br>
//         <label for="email">Email</label>
//         <input type="text" id="email"> <br>
//         <label for="cantidad">Cantidad</label>
//         <input type="text" id="cantidad"> <br>
//         <input type="submit" value="Enviar">
//         <input type="reset" value="Limpiar">
//         </form>
//     </section class="form">`;
//     document.body.appendChild(nuevoForm);
//     document.getElementById('buttonConfirm').disabled = true});

// function crearCliente() {
//     let nombre = document.getElementById("name");
//     nombre.addEventListener("change", (e) => {
//         let nombre = e.target.value;
//         console.log(nombre);
//     });
//     let edad = document.getElementById("age");
//     edad.addEventListener("change", (e) => {
//         let edad = e.target.value;
//         console.log(edad);
//     });
//     let email = document.getElementById("email");
//     email.addEventListener("change", (e) => {
//         let email = e.target.value;
//         console.log(email);
//     });
//     let cantidad = document.getElementById("cantidad");
//     cantidad.addEventListener("change", (e) => {
//         let cantidad = e.target.value;
//         console.log(cantidad);
//     });
// }

// crearCliente(); // que se yo no anda

// const clienteNuevo = new Customer(nombre, edad, email);
// console.log(clienteNuevo);

// let nombreCliente = ; 
// let edadCliente = ;
// let emailCliente = ;

//////////////////////////Esto de arriba queda para mas adelante o jamás...//////////////////////////////


const carrito = [];
const cliente = [];

let showCartDiv = document.getElementById("showCart");

let nombre = document.getElementById('name');
nombre.addEventListener('change', (e) => {
    nombre = e.target.value;
});

let edad = document.getElementById('age');
edad.addEventListener('change', (e) => {
    edad = e.target.value;;
});

let email = document.getElementById('email');
email.addEventListener('change', (e) => {
    email = e.target.value;
});

let cantidad = document.getElementById('cantidad');
cantidad.addEventListener('change', (e) => {
    cantidad = parseInt(e.target.value);
    carrito.push(cantidad * 100);
});

let botonConfirmar = document.getElementById('buttonConfirm');
botonConfirmar.addEventListener("click", function() {
    mostrarCarrito();
    botonConfirmar.disabled = true;
});


function mostrarCarrito() {
    showCartDiv.innerHTML = "";
    pushear();
    carrito.forEach(item => {
        let p = document.createElement("p");
        p.classList.add('mensaje')
        p.textContent = `Gracias por comprar ${cliente[0].nombreCliente}. Tu carrito es de ${cliente[0].cantidadEntradas} entradas y tu total a pagar es: ${item}`;
        showCartDiv.appendChild(p);
        // carrito.pop();
        // cliente.pop();
    });
}


function pushear() {
    cliente.push({nombreCliente: nombre, 
        edadCliente: edad, 
        emailCliente: email, 
        cantidadEntradas: cantidad})
    sessionStorage.setItem('usuario', JSON.stringify(cliente));
    muestroComprador = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(muestroComprador);
    // console.log(cliente[0].nombreCliente, cliente[0].edadCliente, cliente[0].emailCliente, cliente[0].cantidadEntradas);
};

let reinicio = document.getElementById('clear');
function restart() {
    reinicio.addEventListener('click', function() {
        showCartDiv.innerHTML = "";
        carrito.pop();
        cliente.pop();
        botonConfirmar.disabled = false;
    })
}
restart();

// No reinicia el formulario. No muestra el mensaje de nuevo si no hay cambios en todas las partes del formulario. El mensaje que muestra pone al usuario anterior.

//////Falta usar session y localStorage. Puedo usarlo para borrar los datos y que no me siga tomando el metodo change ////
// let usuario = [{nombreUser: nombre,
//     entradasUser: cantidad,
//     totalUser: cantidad * 100
// }]

// sessionStorage.setItem('usuario', JSON.stringify(usuario))
// muestroComprador = JSON.parse(sessionStorage.getItem('usuario'));
// console.log(muestroComprador);

