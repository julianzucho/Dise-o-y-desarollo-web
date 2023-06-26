$(document).ready(function() {
    $('#calcular').click(function() {
      var sueldoBruto = parseFloat($('#bruto').val());
      
      // Cálculo de impuestos (ejemplo)
      var impuesto1 = sueldoBruto * 0.11; // 11% de impuesto 1
      var impuesto2 = sueldoBruto * 0.03; // 3% de impuesto 2
      var impuesto3 = sueldoBruto * 0.03; // 3% de impuesto 3
      
      // Cálculo de los impuestos generales (ejemplo)
      var impuestosGenerales = impuesto1 + impuesto2 + impuesto3;
      
      // Cálculo del sueldo neto
      var sueldoNeto = sueldoBruto - impuestosGenerales;
      
      // Mostrar el resultado
      $('#result').text('Sueldo Neto: ' + sueldoNeto.toFixed(2));
      
      // Mostrar el desglose de impuestos
      $('#taxes').html('<h4>Desglose de Impuestos:</h4>' +
                       '<div class="tax">Aportes jubilatorios: ' + impuesto1.toFixed(2) + '</div>' +
                       '<div class="tax">Obra social: ' + impuesto2.toFixed(2) + '</div>' +
                       '<div class="tax">Pami: ' + impuesto3.toFixed(2) + '</div>' +
                       '<div class="tax">Impuestos: ' + impuestosGenerales.toFixed(2) + '</div>');
    });
  });