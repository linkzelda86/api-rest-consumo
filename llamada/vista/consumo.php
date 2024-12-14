<html>
<head>
    <!-- Título de la página que aparecerá en la pestaña del navegador -->
    <title>Consumo API</title>

    <!-- Incluye la librería jQuery desde un archivo local -->
    <script src="lib/jquery.min.js"></script>

    <!-- Incluye un archivo JavaScript personalizado para funcionalidades adicionales -->
    <script src="lib/cargar.js"></script>
</head>
<body>
    <!-- Contenedor principal del formulario -->
    <div id="div1">
        <!-- Título del formulario -->
        <h1>Formulario</h1>

        <!-- Etiqueta para el campo de cédula -->
        <span>Cedula</span>
        <!-- Campo de entrada para la cédula -->
        <input type="text" value="" id="cedula" name="cedula" placeholder="cedula"><br>

        <!-- Etiqueta para el campo de nombre -->
        <span>Nombre</span>
        
        <!-- Campo de entrada para el nombre -->
        <input type="text" value="" id="nombre" name="nombre" placeholder="Nombres"><br>

        <!-- Etiqueta para el campo de apellidos -->
        <span>Apellidos</span>
        <!-- Campo de entrada para los apellidos -->
        <input type="text" value="" id="apellido" name="apellido" placeholder="Apellidos"><br>

        <!-- Etiqueta para el campo de curso -->
        <span>Curso</span>
        <!-- Campo de entrada para el curso -->
        <input type="text" value="" id="curso" name="curso" placeholder="Curso"><br>

        <!-- Etiqueta para el campo de paralelo -->
        <span>Paralelo</span>
        <!-- Campo de entrada para el paralelo -->
        <input type="text" value="" id="paralelo" name="paralelo" placeholder="Paralelos"><br>

        <!-- Botón para ejecutar la consulta -->
        <input type="button" value="Consultar" id="btnConsultar">
    </div>
</body>
<footer>
    <!-- Espacio reservado para el pie de página (actualmente vacío) -->
</footer>
</html>
<!--Asocia un evento de clic al botón con el ID "btnConsultar" para ejecutar la función "consultarApi" -->
<script>
    
    document.getElementById('btnConsultar').addEventListener('click', consultarApi);
</script>
