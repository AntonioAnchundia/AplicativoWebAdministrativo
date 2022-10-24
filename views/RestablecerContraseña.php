<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperacion de Contraseña</title>
    <link rel="stylesheet" href="../css/index.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="icon" type="image/jpg" href="../img/Logo.png"/>

</head>
<body>
    <div class="cont-Restablecer">
        <img class="contenedor-imagen" src="../img/Logo.png" alt="">
        <div class="cont-datos">
            <h1 class="title">Restablecer Contraseña</h1>
            <p class="texto">Introduzca su correo electrónico para restablecer su contraseña.
                Revise su bandeja de entrada!
             
            </p>
            <form action="" class="contenedor-Btn">
                <div class="contenedor-email">
                    <i class='bx bx-envelope'></i>
                    <input id="emailreset" class="input inputLogin" type="email" placeholder="Correo Electronico">
                </div>
                <!-- <input class="input" type="email" id="emailreset"  placeholder="Correo Electronico"> -->
                <button class="btn"  id="resetPassword" onclick="resetPasswordFunction()" type="submit">Reestablecer</button>
            </form>
        </div>
    </div>
</body>

<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>

<script src="../js/config.js"></script>
<script src="../js/auth.js"></script>
<script src="../js/Validaciones.js"></script>

</html>