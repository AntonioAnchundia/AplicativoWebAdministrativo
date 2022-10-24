<?php
session_start();
$_SESSION["userCurrent"] = $_GET["user"];
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="icon" type="image/jpg" href="../img/Logo.png" />

    <link rel="stylesheet" href="../css/menu.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/bd2ff69ba4.js" crossorigin="anonymous"></script>

    <title>Recursos Humano</title>
</head>

<body>
    <input id="CurrentUserUID" type="text" value="<?php echo $_SESSION["userCurrent"] ?>" type="hidden" style="display: none;">
    <nav id="sidemenu" class="menu-collapsed">
         <!-- PROFILE -->
         <div id="profile">
            <div id="photo">
                <img src="../img/user.png" alt="" id="FotoCurrent">
            </div>
            <div id="name">
                <p id="CurrentUserName"></p>
                <p class="d-none" id="CurrentCargo"></p>
            </div>
        </div>

    
    <!-- ITEMS -->
        <div id="menu-items">
            <div class="item">
                <a href="">
                    <span class="icon"><i class='bx bx-id-card btn-hamburger'></i></span>
                    <div class="title"><span>Registrar</span></div>
                </a>
            </div>

            <div class="item separator"></div>
            <div class="item">
                <a href="">
                    <span class="icon"><i class='bx bx-id-card'></i></span>
                    <div class="title"><span>Postulantes</span></div>
                </a>
            </div>
            <div class="item separator"></div>


        </div>
    </nav>

    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js"></script>
    <script src="../js/config.js"></script>
    <script src="../js/auth.js"></script>
    <script src="../js/database.js"></script>
    <script src="../js/llamar.js"></script>
    <script src="../js/popup.js"></script>
    <script src="../js/menu.js"></script>