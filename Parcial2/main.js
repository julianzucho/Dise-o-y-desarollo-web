$(document).ready(function() {
    // Mostrar menú, formulario y ocultar pedidos al cargar la página
    $('#menu').show();
    $('#formulario').show();
    $('#pedidos').hide();

    // Manejar el envío del formulario
    $('#pedidoForm').submit(function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      // Obtener los valores del formulario
      var nombre = $('#nombre').val();
      var direccion = $('#direccion').val();
      var comida = $('#comida').val();

      // Crear un elemento de pedido
      var pedido = $('<li class="list-group-item"></li>').text(nombre + ' - ' + direccion + ' - ' + comida);

      // Agregar el pedido a la lista de pedidos
      $('#pedidoList').append(pedido);

      // Limpiar el formulario
      $('#nombre').val('');
      $('#direccion').val('');
      $('#comida').val('');

      // Mostrar la sección de pedidos y ocultar el formulario
      $('#formulario').hide();
      $('#pedidos').show();
    });
  });