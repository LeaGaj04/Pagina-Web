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
document.addEventListener('DOMContentLoaded', function() {
      let cart = [];
      const cartItemsContainer = document.getElementById('cart-items');
      const cartCount = document.getElementById('cart-count');

      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
          const name = this.getAttribute('data-name');
          const price = this.getAttribute('data-price');
          const image = this.getAttribute('data-image');

          cart.push({ name, price, image });
          updateCart();
        });
      });

      function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
              <img src="${item.image}" alt="${item.name}" width="50" class="me-2">
              <span>${item.name}</span>
              <span class="badge bg-primary rounded-pill">$${item.price}</span>
              <button class="btn btn-danger btn-sm ms-2 remove-from-cart" data-index="${index}">Eliminar</button>
            </div>
          `;
          cartItemsContainer.appendChild(listItem);
        });

        if (cart.length === 0) {
          cartItemsContainer.innerHTML = '<li class="list-group-item">Tu carrito está vacío.</li>';
        }

        cartCount.innerText = cart.length;

        document.querySelectorAll('.remove-from-cart').forEach(button => {
          button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
          });
        });
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