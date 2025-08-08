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
//     nombre = ;
//     edad = ;
//     email = ;
//     descuento = checkDiscount();
//     return customers.push(new Customer(nombre, edad, email, descuento));
// }

function buyConfirm(){
    if(validacion){
        cart.forEach(ticket => {ticket.precio sumar //falta toda la logica cuando ponga el DOM
            
        });
    }
    //funcion que sume los precios de los items del carrito.
}