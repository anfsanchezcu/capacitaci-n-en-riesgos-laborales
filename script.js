


    // Mostrar el texto en el div
    
    var password = prompt("Contraseña:");      
    var counter = 0;

    while(password!="atsemPLUS" && counter != 5){
      password = prompt("Ingrese la Contraseña:"); 
      counter++
    }
    if(counter == 5){
      alert("Ingreso muchas veces una contraseña incorrecta, recargue la pagina") 
    }
    else{
      const texto = prompt("Escribe el nombre");
      if (texto !== null) {
        document.getElementById('contenedorTexto').textContent = texto;
      } else {
        document.getElementById('contenedorTexto').textContent = 'No ingresaste ningún texto.';
      }
    }
    



    
    function descargarPDF() {
      const elemento = document.getElementById('certificado');
      const opciones = {
        margin:       10,
        filename:     `${texto}-capacitacion.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opciones).from(elemento).save();
    }