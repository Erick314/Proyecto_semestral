$(document).ready(function() {
    $('form').submit(function(e) {
        // Evitar que el formulario se envíe automáticamente
        e.preventDefault();

        // Validación de nombre
        var nombre = $('#nombre').val();
        if (nombre.toLowerCase() === 'jose') {
            alert('Lo sentimos, el nombre "Jose" no está permitido.');
            return;
        }
        // Si todas las validaciones son exitosas, puedes enviar el formulario
        this.submit();
    });
});