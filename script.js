


    // Mostrar el texto en el div
    
    var password = prompt("Contraseña:");      
    
    while(password!="atsemPLUS"){
      password = prompt("Contraseña:");   
    }

    const texto = prompt("Escribe el nombre");
    if (texto !== null) {
      document.getElementById('contenedorTexto').textContent = texto;
    } else {
      document.getElementById('contenedorTexto').textContent = 'No ingresaste ningún texto.';
    }



    
    function descargarPDF() {
      const elemento = document.getElementById('certificado');
      const opciones = {
        margin:       10,
        filename:     'mi-archivo.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opciones).from(elemento).save();
    }