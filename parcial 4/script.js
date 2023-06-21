$(document).ready(function() {
    var pedidos = [];
    var viajes = [];
  
    // Obtener los elementos del DOM
    var $nombreInput = $('#nombre');
    var $direccionInput = $('#direccion');
    var $telefonoInput = $('#telefono');
    var $listaPedidos = $('#lista-pedidos');
    var $listaViajes = $('#lista-viajes');
    var $toggleModo = $('#toggle-modo');
  
    // Manejar el envío del formulario para ingresar un nuevo pedido
    $('#pedidoForm').submit(function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores ingresados por el usuario
      var nombre = $nombreInput.val();
      var direccion = $direccionInput.val();
      var telefono = $telefonoInput.val();
  
      // Crear el objeto de pedido
      var pedido = {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        estado: 'Nuevo'
      };
  
      // Agregar el pedido a la lista de pedidos
      pedidos.push(pedido);
  
      // Limpiar los campos del formulario
      $nombreInput.val('');
      $direccionInput.val('');
      $telefonoInput.val('');
  
      // Actualizar la lista de pedidos
      actualizarListaPedidos();
  
      // Mostrar un mensaje de éxito
      alert('El pedido se ha realizado correctamente');
    });
  
    // Actualizar la lista de pedidos
    function actualizarListaPedidos() {
      $listaPedidos.empty();
  
      for (var i = 0; i < pedidos.length; i++) {
        var pedido = pedidos[i];
        var $itemPedido = $('<li>').text(pedido.nombre + ' - ' + pedido.estado);
        $listaPedidos.append($itemPedido);
      }
    }
  
    // Cambiar el estado de un pedido de "Nuevo" a "En curso"
    function iniciarViaje(index) {
      var pedido = pedidos[index];
      pedido.estado = 'En curso';
      pedidos.splice(index, 1);
      viajes.push(pedido);
      actualizarListaPedidos();
      actualizarListaViajes();
    }
  
    // Actualizar la lista de viajes en curso
    function actualizarListaViajes() {
      $listaViajes.empty();
  
      for (var i = 0; i < viajes.length; i++) {
        var viaje = viajes[i];
        var $itemViaje = $('<li>').text(viaje.nombre + ' - ' + viaje.estado);
        $listaViajes.append($itemViaje);
      }
    }
  
    // Manejar el clic en el botón de cambiar modo
    $toggleModo.click(function() {
      $('body').toggleClass('dark-mode');
    });
  
    // Ejemplo: Simular la creación de pedidos
    setTimeout(function() {
      var pedido1 = {
        nombre: 'Cliente 1',
        direccion: 'Calle 1',
        telefono: '123456789',
        estado: 'Nuevo'
      };
      pedidos.push(pedido1);
      actualizarListaPedidos();
  
      var pedido2 = {
        nombre: 'Cliente 2',
        direccion: 'Calle 2',
        telefono: '987654321',
        estado: 'Nuevo'
      };
      pedidos.push(pedido2);
      actualizarListaPedidos();
    }, 2000);
  
    // Ejemplo: Simular el inicio de un viaje
    setTimeout(function() {
      iniciarViaje(0);
    }, 4000);
  });
  