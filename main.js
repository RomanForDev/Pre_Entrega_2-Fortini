let ticketsCampo = 100;
let ticketsCampoT = 100;
let ticketsPlateaA = 50;
let ticketsPlateaB = 50;

class TicketCampo {
    constructor(id, precio, cantidad){
        this.id = id;
        this.precio = precio;
        this.cantidad = ticketsCampo;
    }}

class TicketCampoT {
    constructor(id, precio){
        this.id = id;
        this.precio = precio;
        this.cantidad = ticketsCampoT;
    }}

class TicketPlateaA {
        constructor(id, precio){
        this.id = id;
        this.precio = precio;
        this.cantidad = ticketsPlateaA;
}}

class TicketPlateaB {
        constructor(id, precio){
        this.id = id;
        this.precio = precio;
        this.cantidad = ticketsPlateaB;
}}

class Customer {
    constructor(nombre, edad, email, descuento) {
        this.name = nombre;
        this.edad = edad;
        this.email = email;
        this.descuento = false;
    }
    checkDiscount() {
        if(edad >= 60) {
            this.descuento = true;
        }
    }
}

const customers = [];
const cart = [];
// let newTicket = 

function addTicket(ticket) {
    cart.push(ticket);
}

// function checkCustomer(){
    // document.innerText = '    <form action="customer">
    //     <label for="name">Nombre</label>
    //     <input type="text" id="name"> <br>
    //     <label for="age" id="age">Edad</label>
    //     <input type="text"> <br>
    //     <label for="email">Email</label>
    //     <input type="text" id="email"> <br>
        // <input type="submit" value="Enviar">
        // <input type="reset" value="Limpiar"></input>
    // </form>'
    // if(addEventListener('click', 'submit')) { NO SE PUEDE PONER LISTENER COMO CONDICION
//     nombre = e.taget.value;
//     edad = e.taget.value;
//     email = e.taget.value; chequear
//     descuento = checkDiscount();
//     return customers.push(new Customer(nombre, edad, email, descuento));
// }}

function buyConfirm(){
    if(document.addEventListener('click', 'confirm')){
        checkCostumer()// cart.forEach(ticket => {ticket.precio sumar //falta toda la logica cuando ponga el DOM
            
        // });
        document.innerHTML(cart);
    }
    //funcion que sume los precios de los items del carrito.
}