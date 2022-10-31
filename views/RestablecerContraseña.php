<!-- <!DOCTYPE html>
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
        <div class="cont-datos" id="cont-datos">
            <h1 class="title">Restablecer Contraseña</h1>
            <p class="texto">Introduzca su correo electrónico para restablecer su contraseña.
                Revise su bandeja de entrada!
             
            </p>
            <form action="" class="contenedor-Btn">
                <div class="contenedor-email">
                    <i class='bx bx-envelope'></i>
                    <input id="emailreset" class="input inputLogin" type="email" placeholder="Correo Electronico">
                </div>
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

</html> -->


<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/index.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Login</title>
    <link rel="icon" type="image/jpg" href="../img/Logo.png"/>
</head>

<body>
    <div class="contenedor-login">
        <img class="contenedor-imagen" src="../img/Logo.png" alt="">
        <div class="contenedor-datos-login">
            <h1 class="title">Restablecer Contraseña</h1>

            <form action="" id="login-form" class="contenedor-inputs">
                <div class="contenedor-email">
                    <i class='bx bx-envelope'></i>
                    <input id="user_email" class="input inputLogin" type="email" placeholder="Correo Electronico">
                </div>

                <div class="contenedor-password">
                    <i class='bx bx-lock-alt'></i>
                    <input id="user_password" class="input inputLogin" type="password" placeholder="Ingrese nueva contraseña">
                    <i class='bx bx-low-vision' id="icono-eye" onclick="functionVisibilidadPassword()" ></i>
                </div>


                <label class="txt-rol"><strong>Elija su rol</strong></label>
                <div class="contenedor-select">
                    <select name="rolUsuario" id="rolUsuario" class="input">
                        <option value="Administrador">Administrador</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                    </select>
                </div>

                <!-- <label class="txt-OlvidoContra"><strong><a href="views/RestablecerContraseña.php">Olvidó su contraseña? </a></strong></label> -->
                <div class="contenedor-Btn">
                    <button class="btn" id="btnLogin" type="submit" onclick="Reset();">CONFIRMAR</button>
                </div>
            </form>
        </div>

    </div>

</body>

<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js"></script>

<script src="../js/config.js"></script>
<script src="../js/auth.js"></script>
<script src="../js/Validaciones.js"></script>
<!-- <script src="../js/index.js"></script> -->
</html>