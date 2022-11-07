//creamos constantes para los iconos editar y borrar    

function llamarDatos(subApartadoAdmin) {

    switch (subApartadoAdmin) {
        case "RegistrarAdmin":
            
            ref = database.ref('UserAdmin');
            //Evaluamos cada registro de la tabla de Administradores
            ref.once('value', (snapshot) => {
                //dentro de cada registro, sontultamos cada valor de dicho registro
                snapshot.forEach((childSnapshot) => {
                    //obtenemos el id de cada administrador llamando al campo key que por defecto lo asigna
                    //Firebase al momento de registrar un nuevo admistrador
                    var childKey = childSnapshot.key;
                    //obtenemos el nombre de cada administrador
                    var childNombre = childSnapshot.val().nombre;
                    //obtenemos el apellido de cada administrador
                    var childApellido = childSnapshot.val().apellido;
                    //obtenemos la cedula de cada administrador
                    var childCorreo = childSnapshot.val().correo;
                    //obtenemos la foto de cada administrador
                    var childFoto = childSnapshot.val().foto;
                    //Obtenemos la tabla don el id "ListaAdmins", ubicada en el archivo "Public/views/admin.php"
                    const listaAdmins = document.getElementById("TablaAdmins");
                    //Llenaremos la tabla con cada consulta hecha en la tabla de "userAdmin"
                    //Cada iteracion la asignaremos en una nueva fila, y cada registro de la iteracion lo asignaremos en una celda
                          
                    listaAdmins.innerHTML += '<tr onclick=TraerDatosAdmin("'+childKey+'");><td><img src="'+childFoto+'"></td><td><p>'+childNombre+' '+childApellido+'</p></td>'+
                        //Definimos la funcion "TraerDatos()", en esta funcion le pasamos el id de cada Administrador. Esta funcion permite llamar a los datos
                        //del administrador seleccionado para su edicion
                     '<td><button class="bx bx-edit" onclick=TraerDatosAdmin("'+childKey+'");></button>' +'<button class="bx bx-trash" onclick=DeleteAdministrador("'+childKey+'");></button></td><input type="hidden" id="'+ childKey+'"value="'+childKey+'"disabled></tr>'
                        //Definimos la funcion "DeleteUsuario()", donde le pasamos el ID del Administrador para la eliminacion de la base de datos
                     
                    })
            });
            break;

            //Departamento
            case "RegistrarDep":

                ref = database.ref('Departamento');
            //demas casos como universidad
            default:
            break;
        }

}

