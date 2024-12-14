// Función asíncrona para consumir una API
async function consumirApi(url, opciones = {}) {
    try {
        // Realizamos la petición utilizando fetch, pasándole la URL y las opciones
        const respuesta = await fetch(url, opciones);

        // Verificamos si la respuesta es exitosa (código HTTP en el rango 200-299)
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
        }

        // Convertimos el cuerpo de la respuesta a formato JSON
        const datos = await respuesta.json();
        return datos; // Devolvemos los datos obtenidos
    } catch (error) {
        // Capturamos y mostramos cualquier error ocurrido durante la petición
        console.error("Hubo un problema al consumir la API:", error);
        throw error; // Propagamos el error para que pueda ser manejado donde se llame esta función
    }
}

// Función asíncrona para consultar datos específicos de la API y procesarlos
async function consultarApi() {
    const url = "http://localhost/api"; // URL de la API que queremos consumir (modifícala según tu entorno)

    try {
        // Llamamos a la función consumirApi para obtener los datos de la API
        const datos = await consumirApi(url);

        console.log("Datos devueltos por la API:", datos);

        // Validamos que los datos obtenidos sean un array y que no estén vacíos
        if (!Array.isArray(datos) || datos.length === 0) {
            console.error("Los datos devueltos no son válidos o están vacíos:", datos);
            return; // Salimos de la función si los datos no cumplen con los criterios
        }

        // Accedemos al primer objeto dentro del array de datos
        const dato = datos[0];

        // Asignamos los valores de las propiedades del objeto a campos de entrada en un formulario
        $('#cedula').val(dato.cedula || ''); // Si 'dato.cedula' es undefined, asignamos una cadena vacía
        $('#nombre').val(dato.nombre || '');
        $('#apellido').val(dato.apellido || '');
        $('#curso').val(dato.nombrep || ''); // Se asume que 'nombrep' corresponde al curso
        $('#paralelo').val(dato.paralelo || '');

        console.log("Datos cargados correctamente.");
    } catch (error) {
        // Capturamos y mostramos errores durante el proceso de consumo y manejo de datos
        console.error("Error al obtener datos:", error);

        // Mostramos un mensaje de alerta personalizado para indicar el fallo
        console.log('peligro', 'No se pudieron cargar los datos.');
    }
}

