//primera funcion

const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
.typeString('El Hogar de sus Sueños')
.pauseFor(200)
.start();

//segunda funcion

var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#Formulario").submit(function(event){
        event.preventDefault();

        var nombre = $("#inputNombre").val();
        var apellido = $("#inputApellido").val();
        var telefono = $("#inputTelefono").val();
        var correo = $("#inputCorreo").val();
        var contraseña = $("#inputContraseña").val();

        if(nombre.length < 3 || nombre.length > 20){
            alert("El nombre debe tener entre 2 y 20 caracteres.");
            return;
        }

        if(apellido.length < 3 || apellido.length > 20){
            alert("El apellido debe tener entre 2 y 20 caracteres.");
            return;
        }

        if(telefono.length < 9 || telefono.length > 12){
            alert("El Numero deber tener entre 9 y 12 caracteres.");
            return;
        }

        if(correo.length < 9 || !expr.test(correo) ){
            alert("El correo debe tener entre 9 y 30 caracteres.");
            return false;
        }

        if(contraseña.length < 3 || contraseña.length > 12){
            alert("La contraseña debe tener entre 3 y 12 caracteres.");
            return;
        }

        alert("Registro Completado");

    });
});

//carrito no termina de funcionar
document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const lista = document.querySelector("#lista-carrito");
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    cargarEventListeners();

    function cargarEventListeners() {
        // Disparar cuando se agrega un producto al carrito
        elementos1.addEventListener('click', comprarElemento);

        // Disparar cuando se elimina un producto del carrito
        carrito.addEventListener('click', eliminarElemento);

        // Disparar cuando se vacía el carrito
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }

    function comprarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.closest('.producto');
            leerDatosElemento(elemento);
        }
    }

    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('a').getAttribute('data-id')
        };
        insertarCarrito(infoElemento);
    }

    function insertarCarrito(elemento) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width="100">
        </td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
        `;
        lista.appendChild(row);
    }

    function eliminarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('borrar')) {
            e.target.closest('tr').remove();
        }
    }

    function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    }
});

//carrito no termina de funcionar

function mostrarNotificacion() {
    var toast = document.getElementById('Oreja');
    var bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

//Intervalo entre notificaciones
setInterval(mostrarNotificacion, 7000);