const MAX_FILE_SIZE = 4500000; // el peso maximo de la imagen 150KB 
const TIMETORELOAD = 5000;

//----------------Registrar administrador--------------------------// 
function RegistrarAdmin() {
    var errorRegistro = false;

    var ficheroAdmin = document.getElementById("file"); //variable para el cargado de la imagen
    var ReferenciaDB = firebase.storage().ref();
    var iterador = null;
    let AdminData = [ //almacenar en un arreglo temporal y defino el orden en el que los datos se van a almacenar
        document.getElementById("NombreAdmin").value, //0
        document.getElementById("ApellidoAdmin").value, //1
        document.getElementById("CedulaAdmin").value, //2
        document.getElementById("CelularAdmin").value, //3
        document.getElementById("EmailAdmin").value, //4
        document.getElementById("ContraseñaAdmin").value, //5
        document.getElementById("ConfirmarContraseña").value, //6
        document.getElementById("img-foto").src, //7
        document.getElementById("DireccionAdmin").value, //8
        //   Cargo.options[Cargo.selectedIndex].value //9

    ]
    //validacion para verificar campos vacios
    AdminData.forEach(function (item, index, array) {
        if (item == "" || item == null) {
            iterador = 1;
        } else { }
    });
    if (iterador == 1) {
        alert("Campos vacios", "", "warning");
        errorRegistro = true;
    } else if (AdminData[2].length < 10) { //validaciones de cedula
        alert("Los digistos de la cedula tienen que ser 10", "", "warning");
        errorRegistro = true;

    } else {
        try {

            if (AdminData[5] == AdminData[6]) { //LAS CONTRASEÑAS COINCIDEN
                try {
                    //SUBIR IMAGEN A FIRESTORE
                    if (ficheroAdmin.files[0].size <= MAX_FILE_SIZE) {
                        var imgaSubir = ficheroAdmin.files[0]; //se toma el primer archivo que seleccionamos en nuestro equipo
                        //declaracion para cargar la imagen a la carpeta del firebase.
                        var uploadTask = ReferenciaDB.child('/fotoAdmin/' + imgaSubir.name).put(imgaSubir);
                        uploadTask.on('state_changed', function (snapshot) {
                            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case firebase.storage.TaskState.PAUSED: // or 'paused'
                                    console.log('Upload is paused');
                                    break;
                                case firebase.storage.TaskState.RUNNING: // or 'running'
                                    console.log('Upload is running');
                                    break;
                            }
                            if (progress == 100) {
                                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                                    //esta linea se encarga de ingresar los passwor y correo al apartado de autentication
                                    firebase.auth().createUserWithEmailAndPassword(AdminData[4], AdminData[5]).then((userCredential) => {
                                        //hacemos el llenado de datos al firebase estableciendo la coleccion.
                                        firebase.database().ref('UserAdmin/' + userCredential.user.uid).set({
                                            nombre: AdminData[0],
                                            apellido: AdminData[1],
                                            cedula: AdminData[2],
                                            celular: AdminData[3],
                                            correo: AdminData[4],
                                            contraseña: AdminData[5],
                                            direccion: AdminData[8],
                                            // cargo: AdminData[9],
                                            foto: downloadURL
                                        });
                                        ResetFormularioAdmin();

                                    }).catch((error) => {
                                        console.log(error.message, "", "error");
                                        console.log(error.code, "", "error");
                                        errorRegistro = true;
                                    });
                                });
                            }
                        }, function (error) {
                            alert(error);
                            errorRegistro = true;

                        }, function () { });
                    } else {
                        //validacion para peso imagen no exceda
                        alert("El peso máximo del archivos es de 150KB", "", "warning");
                        errorRegistro = true;
                    }
                } catch (error) {
                    console.log(error);
                    errorRegistro = true;

                }
            } else {
                //validacion para contraseñas coincidan
                alert("Las contraseñas no coinciden", "", "warning");
                errorRegistro = true;
            }
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            errorRegistro = true;

        }
    }

    if (!errorRegistro) {
        alert("Registrado Exitosamente")
        //llamamos a la funcion para limpiar el formulario
        ResetFormularioAdmin();

    }
}

//funcion para limpiar el formulario
function ResetFormularioAdmin() {

    //actualizar la tabla.
    // document.getElementById("TablaAdmins").innerHTML = ""

    document.getElementById("NombreAdmin").value = ""
    document.getElementById("ApellidoAdmin").value = ""
    document.getElementById("CedulaAdmin").value = ""
    document.getElementById("CelularAdmin").value = ""
    document.getElementById("EmailAdmin").value = ""
    document.getElementById("ContraseñaAdmin").value = ""
    document.getElementById("ConfirmarContraseña").value = ""
    document.getElementById("img-foto").src = "../img/user.png"
    document.getElementById("DireccionAdmin").value = ""

    llamarDatos();

    document.getElementById("BtnActualizar").style.display = "none";
    document.getElementById("BtnRegistrar").style.display = "block";
}


// funcion para llenar los campos del formulario con los datos de la tabla    
// para actualizar administrador
function TraerDatosAdmin(uid) {
    document.getElementById("BtnActualizar").style.display = 'block';
    document.getElementById("BtnRegistrar").style.display = 'none';
    const dbRef = database.ref("UserAdmin/" + uid);
    dbRef.on('value', (snapshot) => {
        document.getElementById("UID").value = uid;
        document.getElementById("Nombre").value = snapshot.val().nombre;
        document.getElementById("Apellido").value = snapshot.val().apellido;
        document.getElementById("Cedula").value = snapshot.val().cedula;
        document.getElementById("Email").value = snapshot.val().correo;
        document.getElementById("Contraseña").value = snapshot.val().contraseña;
        document.getElementById("ConfirmarContraseña").value = snapshot.val().contraseña;
        document.getElementById("img-foto").src = snapshot.val().foto;
        document.getElementById("Direccion").value = snapshot.val().direccion;
        document.getElementById("Contraseña").disabled = "true";
        document.getElementById("Email").disabled = "true";
        document.getElementById("ConfirmarContraseña").disabled = "true";
    });
    MostrarLabels();
}

function MostrarLabels() {
    let Labels = document.querySelectorAll("label[for=Etiqueta]");
    Labels.forEach((label) => {
        label.style.visibility = "visible";
    })
}

//----------------Actualizar admin --------------------------// 
function UpdateAdmin() {
    let errorRegistro = false;

    let UpdateAdmin = [
        document.getElementById("UID").value,
        document.getElementById("Nombre").value,
        document.getElementById("Apellido").value,
        document.getElementById("Cedula").value,
        document.getElementById("Email").value,
        document.getElementById("Contraseña").value,
        document.getElementById("ConfirmarContraseña").value,
        document.getElementById("img-foto").src,
        document.getElementById("Direccion").value
    ];
    var getUrlFotoCurso;
    var DBCurso = database.ref("UserAdmin/" + UpdateAdmin[0]);
    DBCurso.on('value', (snapshot) => {
        getUrlFotoCurso = snapshot.val().foto;
    });
    idCurso = document.getElementById("UID");
    var ficheroCurso = document.getElementById("file");
    var imgaSubir;
    if (UpdateAdmin[4].length < 10) {
        alert("los digistos de la cedula tienen que ser 10");

        Swal.fire("los digistos de la cedula tienen que ser 10", "", "warning");
        errorRegistro = true;

    } else {
        if (UpdateAdmin[4] == UpdateAdmin[5]) {
            if (UpdateAdmin[6] != getUrlFotoCurso) { //si la foto la cambiaron, primero se sube al storage
                //al tiempo de regarca se la dan 3 segundo para poder subir la imagen al storage
                if (ficheroCurso.files[0].size <= MAX_FILE_SIZE) {
                    timetoReload = 5000;
                    document.getElementById("BtnActualizar").style.display = 'none';

                    var imgaSubir = ficheroCurso.files[0]; //se toma el primer archivo que seleccionamos en nuestro equipo
                    var uploadTask = firebase.storage().ref().child('/fotoAdmin/' + imgaSubir.name).put(imgaSubir);
                    uploadTask.on('state_changed', (snapshot) => {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');

                        switch (snapshot.state) {
                            case firebase.storage.TaskState.PAUSED: // or 'paused'
                                console.log('Upload is paused');
                                break;
                            case firebase.storage.TaskState.RUNNING: // or 'running'
                                console.log('Upload is running');
                                break;
                        }
                    }, (error) => {
                        // Handle unsuccessful uploads
                    }, () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            firebase.database().ref('UserAdmin/' + UpdateAdmin[0]).update({
                                foto: downloadURL
                            })
                        });
                    });
                } else {
                    Swal.fire("El peso máximo del archivos es de 150KB", "", "warning");
                    errorRegistro = true;
                }
            }
            //si la foto no se actualizo
            firebase.database().ref('UserAdmin/' + UpdateAdmin[0]).update({
                nombre: UpdateAdmin[0],
                apellido: UpdateAdmin[1],
                //cargo: UpdateAdmin[3],
                cedula: UpdateAdmin[2],
                direccion: UpdateAdmin[7]
            });
        } else {
            Swal.fire("Las contraseñas no coinciden", "", "warning");
            errorRegistro = true;
        }
        if (!errorRegistro) {
            Swal.fire({
                icon: 'success',
                title: 'Datos Actualizados con Éxito',
                showConfirmButton: false,
                timer: 2000
            })

            ResetFormularioAdmin();
        }
    }

}

//----------------Eliminar admin--------------------------// 
function DeleteAdministrador(uid) {
    if (confirm("¿Estas seguro de eliminar el administrador seleccionado?")) {
        try {
            //establecemos la ruta de la coleccion
            database.ref('UserAdmin/' + uid).remove();
            Swal.fire({
                icon: 'success',
                title: 'Administrador eliminado exitosamente',
                showConfirmButton: false,
                timer: 2000
            })

            ResetFormularioAdmin();

            console.log(error);

        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Operacion cancelada");
    }
}
//----------------Registrar Universidad--------------------------// 

function RegistrarUniversidad() {
    var errorRegistro = false;

    var ficheroAdmin = document.getElementById("file"); //variable para el cargado de la imagen
    var ReferenciaDB = firebase.storage().ref();
    var iterador = null;
    let AdminDataUni = [ //almacenar en un arreglo temporal y defino el orden en el que los datos se van a almacenar
        document.getElementById("NombreUniversidad").value, //0
        document.getElementById("AbreviaturaUniversidad").value, //1
        document.getElementById("CorreoUniversidad").value, //2
        document.getElementById("CelularUniversidad").value, //3
        document.getElementById("DireccionUniversidad").value, //4
        document.getElementById("WebUniversidad").value, //5
        document.getElementById("NombreDirector").value, //6
        document.getElementById("EmailDirector").value, //7
        document.getElementById("EmailSecretaria").value, //8
        document.getElementById("img-foto").src, //9

    ]
    //validacion para verificar campos vacios
    AdminDataUni.forEach(function (item, index, array) {
        if (item == "" || item == null) {
            iterador = 1;
        } else { }
    });
    if (iterador == 1) {
        alert("Campos vacios", "", "warning");
        errorRegistro = true;
    } else {
        try {

            //SUBIR IMAGEN A FIRESTORE
            if (ficheroAdmin.files[0].size <= MAX_FILE_SIZE) {
                var imgaSubir = ficheroAdmin.files[0]; //se toma el primer archivo que seleccionamos en nuestro equipo
                //declaracion para cargar la imagen a la carpeta del firebase.
                var uploadTask = ReferenciaDB.child('/fotoUniversidad/' + imgaSubir.name).put(imgaSubir);
                uploadTask.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                    if (progress == 100) {
                        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                            //esta linea se encarga de ingresar los passwor y correo al apartado de autentication
                            //hacemos el llenado de datos al firebase estableciendo la coleccion.
                            firebase.database().ref('Universidad1/').set({
                                NombreUniversidad: AdminDataUni[0],
                                AbreviaturaUniversidad: AdminDataUni[1],
                                CorreoUniversidad: AdminDataUni[2],
                                CelularUniversidad: AdminDataUni[3],
                                DireccionUniversidad: AdminDataUni[4],
                                WebUniversidad: AdminDataUni[5],
                                NombreDirector: AdminDataUni[6],
                                EmailDirector: AdminDataUni[7],
                                EmailSecretaria: AdminDataUni[8],
                                foto: downloadURL
                            });
                        });
                    }
                }, function (error) {
                    alert(error);
                    errorRegistro = true;

                }, function () { });
            } else {
                //validacion para peso imagen no exceda
                alert("El peso máximo del archivos es de 150KB", "", "warning");
                errorRegistro = true;
            }

        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            errorRegistro = true;
        }
    }

    if (!errorRegistro) {
        alert("Registrado Exitosamente")
        //llamamos a la funcion para limpiar el formulario
        ResetFormularioUniversidad();
    }



    /*
        var errorRegistro = false;
    
        var ficheroAdmin = document.getElementById("file");
        var ReferenciaDB = firebase.storage().ref();
        var iterador = null;
    
        let AdminData = [
            document.getElementById("NombreUniversidad").value, //0-
            document.getElementById("EmailUni").value, //1-
            document.getElementById("TelefonoUni").value, //2-
            document.getElementById("DireccionUni").value, //3-
            document.getElementById("PaginaWeb").value, //4-
            document.getElementById("img-foto").src, //5-
            //FacultadSelect.options[FacultadSelect.selectedIndex].text, //6-
            AdminDataFacultad.value,  //6-
        ]
    
        let AdminDataFacultad = [
            document.getElementById("NombreFacultad").value, //0-
            document.getElementById("NombreDecano").value, //1-
            document.getElementById("TelefonoFacultad").value, //2-
            document.getElementById("img-foto").src, //3-
            // CarreraSelect.options[FacultadSelect.selectedIndex].text, //4-
            AdminDataCarrera.value, //5-
        ]
    
        let AdminDataCarrera = [
            document.getElementById("NombreCarrera").value, //0-
            document.getElementById("NombreDirector").value, //1-
            document.getElementById("NombreGestor").value, //2-
            document.getElementById("emailDirector").value, //3-
            document.getElementById("emailGestor").value, //4-
            document.getElementById("TelefonoDirector").value, //5-
            document.getElementById("TelefonoGestor").value, //6-
            document.getElementById("img-foto").src, //7-
        ]
    
        //VERIRICAR LOS CAMPOS VACIOS
        AdminData.forEach(function (item, index, array) {
            if (item == "" || item == null) {
                iterador = 1;
            } else { }
        });
        if (iterador == 1) {
            Swal.fire("Campos vacios", "", "warning");
            errorRegistro = true
        }
        else {
            try {
                //SUBIR IMAGEN A FIRESTORE
                if (ficheroAdmin.files[0].size <= MAX_FILE_SIZE) {
                    var imgaSubir = ficheroAdmin.files[0]; //se toma el primer archivo que seleccionamos en nuestro equipo
                    var uploadTask = ReferenciaDB.child('/fotoUniversidad/' + imgaSubir.name).put(imgaSubir);
                    uploadTask.on('state_changed', function (snapshot) {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case firebase.storage.TaskState.PAUSED: // or 'paused'
                                console.log('Upload is paused');
                                break;
                            case firebase.storage.TaskState.RUNNING: // or 'running'
                                console.log('Upload is running');
                                break;
                        }
                        if (progress == 100) {
                            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
    
                                    firebase.database().ref('Universidad/').set({
                                    nombre: AdminData[0],
                                    correo: AdminData[1],
                                    telefono: AdminData[2],
                                    direccion: AdminData[3],
                                    paginaweb: AdminData[4],
                                    logo: downloadURL 
                                    if() {
                                        firebase.database().ref('Universidad/Facultad').set({
                                            nombre: AdminDataFacultad[0],
                                            nombreDecano: AdminDataFacultad[1],
                                            celular: AdminDataFacultad[2],
                                            logo: downloadURL
                                        })
                                        if () {
                                            firebase.database().ref('Universidad/Facultad/Carrera').set({
                                                nombre: AdminDataFacultad[0],
                                                nombreDirector: AdminDataFacultad[1],
                                                nombreGestor: AdminDataFacultad[2],
                                                correoDirector: AdminDataFacultad[3],
                                                correoGestor: AdminDataFacultad[4],
                                                telefonoDirector: AdminDataFacultad[5],
                                                telefonoGestor: AdminDataFacultad[6],                                        })
                                        }
                                    }
    
                                }).catch((error) => {
                                    Swal.fire(error.code, "", "error");
                                    Swal.fire(error.message, "", "error");
                                    errorRegistro = true;
                                });
                            });
                        }
                    }, function (error) {
                        alert(error);
                    }, function () { });
                } else {
                    Swal.fire("El peso máximo del archivos es de 150KB", "warning");
                    errorRegistro = true;
                }
    
            } catch (error) {
                console.log(error.code);
                console.log(error.message);
                errorRegistro = true;
            }
        }
        if (!errorRegistro) {
            Swal.fire({
                icon: 'success',
                title: 'Universidad registrada con éxito',
                showConfirmButton: false,
                timer: 2000
            })
            ResetFormularioUniversidad();
        }*/
}

function ResetFormularioUniversidad() {

    document.getElementById("NombreUniversidad").value = ""
    document.getElementById("AbreviaturaUniversidad").value = ""
    document.getElementById("CorreoUniversidad").value = ""
    document.getElementById("CelularUniversidad").value = ""
    document.getElementById("DireccionUniversidad").value = ""
    document.getElementById("WebUniversidad").value = ""
    document.getElementById("NombreDirector").value = ""
    document.getElementById("EmailDirector").value = ""
    document.getElementById("EmailSecretaria").value = ""
    document.getElementById("img-foto").src = "../img/user.png"

    // llamarDatos();

    document.getElementById("BtnActualizar").style.display = "none"
    document.getElementById("BtnRegistrar").style.display = "block"
}


//----------------Registrar Departamento--------------------------// 
function RegistrarDep(){
    var errorRegistro = false;

    var ficheroDep = document.getElementById("file"); //variable para el cargado de la imagen
    var ReferenciaDB = firebase.storage().ref();
    var iterador = null;
    

    let DepData = [ //almacenar en un arreglo temporal y defino el orden en el que los datos se van a almacenar
        document.getElementById("NombreDep").value, //0
        document.getElementById("CodigoDep").value, //1
        document.getElementById("LinkReunionDep").value, //2
        document.getElementById("NumeroPersonalDep").value, //3
        document.getElementById("img-foto").src, //4
    ]
    //validacion para verificar campos vacios
    DepData.forEach(function (item, index, array) {
        if (item == "" || item == null) {
            iterador = 1;
        } else { }
    });
    if (iterador == 1) {
        alert("Campos vacios", "", "warning");
        errorRegistro = true;
    }else{
        try{
            //SUBIR IMAGEN A FIRESTORE
            if (ficheroDep.files[0].size <= MAX_FILE_SIZE) {
                var imgaSubir = ficheroDep.files[0]; //se toma el primer archivo que seleccionamos en nuestro equipo
                var uploadTask = ReferenciaDB.child('/fotoDep/' + imgaSubir.name).put(imgaSubir);
                uploadTask.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                    if (progress == 100) {
                        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {

                            firebase.database().ref('Departamento/').set({
                                NombreDep: DepData[0],
                                CodigoDep: DepData[1],
                                LinkReunionDep: DepData[2],
                                NumeroPersonalDep: DepData[3],
                                foto: downloadURL
                            }).catch((error) => {
                                Swal.fire(error.code, "", "error");
                                Swal.fire(error.message, "", "error");
                                errorRegistro = true;
                            });
                        });
                    }
                }, function (error) {
                    alert(error)
                }, function () { });
            }else{
                Swal.fire("El peso máximo del archivos es de 150KB", "warning");
                errorRegistro = true;
            }
        }catch(error){
            console.log(error.code);
            console.log(error.message);
            errorRegistro = true;
        }
    }
    if(!errorRegistro){
        Swal.fire({
            icon: 'success',
            title: "Departamento registrado con éxito",
            showConfirmButton: false,
            timer: 2000
        })
        alert("Registrado Exitosamente");
        //llamamos a la funcion para limpiar el formulario
        ResetFormularioAdmin();
    }
}


//----------------Registrar Supervisor--------------------------// 
function RegistrarSupervisor() {

    var errorRegistro = false;

    var ficheroAdmin = document.getElementById("file");
    var ReferenciaDB = firebase.storage().ref();
    var iterador = null;
    let AdminData = [
        document.getElementById("Nombre").value, //0-
        document.getElementById("Apellido").value, //1-
        document.getElementById("Cedula").value, //2-
        document.getElementById("Telefono").value, //3-
        document.getElementById("Email").value, //4-
        document.getElementById("img-foto").src, //5-
        DepartementoSelect.options[DepartementoSelect.selectedIndex].text, //6-
    ]

    //VERIRICAR LOS CAMPOS VACIOS
    AdminData.forEach(function (item, index, array) {
        if (item == "" || item == null) {
            iterador = 1;
        } else { }
    });
    if (iterador == 1) {
        Swal.fire("Campos vacios", "", "warning");
        errorRegistro = true
    }
    else {
        try {
            //SUBIR IMAGEN A FIRESTORE
            if (ficheroAdmin.files[0].size <= MAX_FILE_SIZE) {
                var imgaSubir = ficheroAdmin.files[0]; //se toma el primer archivo que seleccionamos en nuestro equipo
                var uploadTask = ReferenciaDB.child('/fotoSupervisor/' + imgaSubir.name).put(imgaSubir);
                uploadTask.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                    if (progress == 100) {
                        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {

                            firebase.database().ref('Supervisor/').set({
                                nombre: AdminData[0],
                                apellido: AdminData[1],
                                cedula: AdminData[2],
                                telefono: AdminData[3],
                                email: AdminData[4],
                                departamento: AdminData[5],
                                foto: downloadURL

                            }).catch((error) => {
                                Swal.fire(error.code, "", "error");
                                Swal.fire(error.message, "", "error");
                                errorRegistro = true;
                            });
                        });
                    }
                }, function (error) {
                    alert(error);
                }, function () { });
            } else {
                Swal.fire("El peso máximo del archivos es de 150KB", "warning");
                errorRegistro = true;
            }

        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            errorRegistro = true;
        }
    }
    if (!errorRegistro) {
        Swal.fire({
            icon: 'success',
            title: 'Supervisor registrado con éxito',
            showConfirmButton: false,
            timer: 2000
        })
        ResetFormularioUniversidad();
    }
}

function ResetFormularioSupervisor() {
    document.getElementById("TablaSupervisor").innerHTML = ""

    document.getElementById("Nombre").value = ""
    document.getElementById("Apellido").value = ""
    document.getElementById("Cedula").value = ""
    document.getElementById("Telefono").value = ""
    document.getElementById("Email").value = ""
    document.getElementById("img-foto").src = ""

    // llamarDatos();

    document.getElementById("BtnActualizar").style.display = "none"
    document.getElementById("BtnRegistrar").style.display = "block"
}




