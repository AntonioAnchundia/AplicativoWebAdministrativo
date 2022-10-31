function Login() {
  const signInForm = document.querySelector("#login-form");
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("user_email").value;
    let password = document.getElementById("user_password").value;
    let combo = document.getElementById("rolUsuario");
    let rol = combo.options[combo.selectedIndex].value;
    let mensaje = "Elija correctamente su rol";
    let mensaje2 = "Contrasena incorrecta";
    let mensaje3 = "El correo no se encuentra registrado, verifique su información";
    let band = 0;

    switch (rol) {
      case "Administrador":
        var DbAdmin = firebase.database().ref('UserAdmin');
        //-------------------------------------------------------------------------------------------
        DbAdmin.once("value", (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            let emailAdmin = childSnapshot.val().correo;
            let passwordAdmin = childSnapshot.val().contraseña;
            let rol = childSnapshot.val().cargo;
            if (email == emailAdmin && password == passwordAdmin) {
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                  var user = userCredential.user;

                  window.location.href =
                    "views/home.php?user=" + userCredential.user.uid;
                })
                .catch((error) => {
                  console.log(error);
                  var errorCode = error.code;
                  var errorMessage = error.message;

                  alert(errorMessage);
                });
            }
            // }else{
            //     alert("ACCESO DENEGADO");
            // }
          });
        });
        //Login del Rol departamento Humano--
        break;
      case "Recursos Humanos":
        var DbRecurso = firebase.database().ref("UserReHum");
        DbRecurso.once("value", (snapshot) => {
          1;
          snapshot.forEach((childSnapshot) => {
            let emailAdmin = childSnapshot.val().correo;
            let passwordAdmin = childSnapshot.val().contraseña;
            if (email == emailAdmin && password == passwordAdmin) {
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                  var user = userCredential.user;
                  window.location.href =
                    "views/homeRecursos.php?user=" + userCredential.user.uid;
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  alert(errorMessage);
                });
            }
          });
        });
        break;
      default:
        break;
    }
  });
}

//Funcion para reestalecer contraseña
// function Reset(){
//     const contDatos = document.querySelector("#login-form");
//     contDatos.addEventListener("submit", (e)=>{
//         e.preventDefault();

//         const email = document.querySelector("#user_email").value;
//         let password = document.getElementById("user_password").value;
//         let combo = document.getElementById("rolUsuario");
//         let rol = combo.options[combo.selectedIndex].value;

//         switch(rol){
//             case "Administrador":

//                 var DbAdmin = firebase.database().ref('UserAdmin');
//                 //---------------------------------------------------
//                 DbAdmin.once('value',(snapshot) =>{
//                     snapshot.forEach((childSnapshot)=> {
//                         let key = childSnapshot.key;
//                         let emailAdmin = childSnapshot.val().correo;
//                         let passwordAdmin = childSnapshot.val.contraseña;
//                         // let rol=childSnapshot.val().cargo;
//                         if(email == emailAdmin){
//                             firebase.database().ref('UserAdmin/' + key).update({
//                                 // SE CREA UNA NUEVA VARIABLE EN LA BD
//                                 // passwordAdmin:password
//                                 contraseña:password
//                             });
//                             //Authenticate the user
//                             auth.sendPasswordResetEmail(email).then(() =>{
//                                 //clean the form
//                                 const User =
//                                 contDatos.reset();
//                                 alert("Correo electronico de restablecimiento de contraseña enviado");
//                                 window.location.href = "../index.php";
//                             }).catch(error =>{
//                                 const errorCode = error.code;
//                                 const errorMessage = error.message;
//                                 console.log(errorCode);
//                                 console.log(errorMessage);
//                                 alert("correo no registrado");
//                             })
//                         }
//                     });
//                 });
//                 break;
//                 default:
//                 break;
//         }
//     })
// }

function Reset() {
    const contDatos = document.querySelector("#login-form");
    contDatos.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#user_email").value;
        let password = document.getElementById("user_password").value;
        let combo = document.getElementById("rolUsuario");
        let rol = combo.options[combo.selectedIndex].value;

        var DbAdmin = firebase.database().ref("UserAdmin");

        DbAdmin.once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let key = childSnapshot.key;
                let emailAdmin = childSnapshot.val().correo;
                let passwordAdmin = childSnapshot.val.contraseña;
                // let rol=childSnapshot.val().cargo;
                if (email == emailAdmin) {

                    // firebase.auth().createUserWithEmailAndPassword(email,password).then((userCredential) => {
                    //     firebase.database().ref("UserAdmin/" + userCredential.user.uid).update({
                    //         email: emailAdmin,
                    //         contraseña: password
                    //     });
                    //     alert("Correo electronico de restablecimiento de contraseña enviado");
                    //     window.location.href = "../index.php";
                    // }).catch((error) => {
                    //         const errorCode = error.code;
                    //         const errorMessage = error.message;
                    //         console.log(errorCode);
                    //         console.log(errorMessage);
                    //         alert("correo no registrado");
                    // });


                        firebase.database().ref("UserAdmin/" + key).update({
                        contraseña: password
                    });

                    //Authenticate the user
                    auth.sendPasswordResetEmail(email).then(() => {
                        //clean the form
                        // const User = 
                        //     contDatos.reset();
                        alert("Correo electronico de restablecimiento de contraseña enviado");
                        window.location.href = "../index.php";
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        alert("correo no registrado");
                    });
                }
            });
        });
    });
}

// ResetBtn.addEventListener('click', Reset);

// function resetPasswordFunction(){
//     const auth = firebase.auth();
//     const email = document.getElementById('emailreset');

// sendPasswordResetEmail(auth, email)
//   .then(() => {
//       console.log('Contraseña envia exitosamente al correo!');
//         alert('Contraseña envia exitosamente al correo!');

//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error(error);
//     console.log("Ingrese un correo valido");
//     alert("Ingrese un correo valido");

//   });

// }

//funcion para cargar la imagen, usuario y el cargo de la persona logeada como admininstrador

function getCurrentU() {
  var urlUID = document.getElementById("CurrentUserUID").value;
  var dbref = database.ref("UserAdmin/" + urlUID);
  dbref.on('value', (snapshot) => {
    /* innerHTML tomar la referencia del id del contenedor.*/
    document.getElementById("CurrentUserName").innerHTML = snapshot.val().nombre + " " + snapshot.val().apellido;
    //   document.getElementById("CurrentCargo").innerHTML = snapshot.val().cargo;
    document.getElementById("FotoCurrent").src = snapshot.val().foto;
  });
}
getCurrentU();

/*Funcion para el llamado de datos*/
function setInput(titutloVentana) {
  llamarDatos(titutloVentana);
  document.getElementById("TablaAdmins").innerHTML = "";
}

//*funcion para cargar la imagen, usuario y el cargo de la persona logeada como Recursos Humano
function getCurrentRecurosH() {
  var urlUID = document.getElementById("CurrentUserUID").value;
  var dbref = database.ref("UserReHum/" + urlUID);
  ddbref.on('value', (snapshot) => {
    document.getElementById("CurrentUserName").innerHTML = snapshot.val().nombre + " " + snapshot.val().apellido;
    document.getElementById("CurrentCargo").innerHTML = snapshot.val().cargo;
    document.getElementById("FotoCurrent").src = snapshot.val().foto;
  });
}

getCurrentRecurosH();

//cerrar sesion
function CerrarSesion() {
  firebase.auth().signOut()
      .then(function () {
          window.location.replace('../index.php');
      })
      .catch(function (error) {
          alert(error);
      });
}
CerrarSesion();