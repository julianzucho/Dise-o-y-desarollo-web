$(document).ready(function() {
    // Verificar si hay un estado almacenado y aplicarlo al modo oscuro
    var darkModeState = localStorage.getItem('darkModeState');
    if (darkModeState === 'on') {
      $('body').addClass('dark-mode');
    }
  
    // Manejar el evento de clic del toggle de modo oscuro
    $('#toggleModo').click(function() {
      $('body').toggleClass('dark-mode');
      var isDarkMode = $('body').hasClass('dark-mode');
      if (isDarkMode) {
        localStorage.setItem('darkModeState', 'on');
      } else {
        localStorage.setItem('darkModeState', 'off');
      }
    });
  
    // Manejar el evento de clic del botón de redirección
    $('#miBoton').click(function() {
      if (confirm('¿Estás seguro de que deseas abandonar la página?')) {
        window.location.href = 'index.html';
      }
    });
  });
  


  

