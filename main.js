let ticketsCampo = 100;
let ticketsCampoT = 100;
let ticketsPlateaA = 50;
let ticketsPlateaB = 50;
const clase = 0;

class TicketCampo {
    constructor(precio, cantidad, claseTicket){
        this.precio = precio;
        this.cantidad = ticketsCampo;
        this.claseTicket = clase;
    }}

class TicketCampoT {
    constructor(precio, cantidad, claseTicket){
        this.precio = precio;
        this.cantidad = ticketsCampoT;
        this.claseTicket = clase;
    }}

class TicketPlateaA {
        constructor(precio, cantidad, claseTicket){
        this.precio = precio;
        this.cantidad = ticketsPlateaA;
        this.claseTicket = clase;
}}

class TicketPlateaB {
        constructor(precio, cantidad, claseTicket){
        this.precio = precio;
        this.cantidad = ticketsPlateaB;
        this.claseTicket = clase;
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
let claseDelTicket = 0;

let botonMain = document.querySelectorAll('.buttonMain');
function determinarClase(){
    botonMain.forEach(element => {
        if (botonMain.id = "bone") {
            let claseDelTicket = 1;
        }else if(botonMain.id = "btwo"){
            let claseDelTicket = 2;
        }else if(botonMain.id = "bthr"){
            let claseDelTicket = 3;
        }else if(botonMain.id = "bfou"){
            let claseDelTicket = 4;
        }
    });
    switch(claseDelTicket) {
        case 1: 
        case 2:
        case 3:
        case 4:
    }
}
determinarClase();

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

let botonConfirmar = document.getElementById("confirm");
botonConfirmar.addEventListener("click", function(){
let nuevoForm = document.createElement('section');
nuevoForm.innerHTML = `<form action="customer">
    <label for="name">Nombre</label>
    <input type="text" id="name"> <br>
    <label for="age" id="age">Edad</label>
    <input type="text"> <br>
    <label for="email">Email</label>
    <input type="text" id="email"> <br>
    <input type="submit" value="Enviar">
    <input type="reset" value="Limpiar">
    </form>`;
    document.body.appendChild(nuevoForm)
    document.getElementById('confirm').disabled = true});

// let nombreCliente = ; 
// let edadCliente = ;
// let emailCliente = ;

