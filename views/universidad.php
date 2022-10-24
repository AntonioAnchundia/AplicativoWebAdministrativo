<?php
    include "menu.php";
?>

<div class="container">
    <div class="container-encabezado">
        <h1>Registro de Universidades</h1>   

        <div class="container-selector">
            <select>
                <option>----Universidad----</option>
                <option>Universidad de Guayaquil</option>
            </select>

            <select id="">
                <option>----Facultad----</option>
                <option>Ciencia Matematica y Fisica</option>
            </select>

            <select id="">
                <option>----Carrera----</option>
                <option>Ing. Networking</option>
            </select>
        </div>   
    </div>

    <div class="formulario">
        <div class="form first">
            <div class="details-foto">
                <div class=" justify-content-center">
                    <img src="../img/user.png" id="img-fotos">
                </div>
                <div class="row justify-content-center">
                    <label for="file" style="font-size:14px;color: #008CBA;cursor: pointer;"> <i class="fa-solid fa-camera-rotate"></i><span class="text-danger">Ingrese su foto</span> </label>
                    <input type="hidden" name="MAX_FILE_SIZE" value="4194304">
                    <input type="file" name="file" id="file" accept="image/*" style="display: none" onchange="vistapreliminar(event)">
                </div>
            </div>
            <div class="fields">
                <div class="input-fields">
                    <label>Nombre de la Universidad</label>
                    <input class="controls"  type="text" id="NombreUniversidad" onkeypress="return sletras(event)" required>
                </div>

                <div class="input-fields">
                    <label>Correo electronico</label>
                    <input class="controls" type="email"  id="EmailUni" required>
                </div>

                <div class="input-fields">
                    <label>Telefono</label>
                    <input class="controls" type="text" id="TelefonoUni" onkeypress="return numeros(event)" maxlength="10" required>
                </div>

                <div class="input-fields">
                    <label>Dirección</label>
                    <input class="controls" type="text" id="DireccionUni" required>
                </div>

                <div class="input-fields">
                    <label>Página web</label>
                    <input class="controls" type="text" id="PaginaWeb" required>
                </div>
                
            </div>
            <div class="container-siguienteBtn">
                <button class="nextBtn">
                    <span>Siguiente</span>
                </button>
            </div>
        </div>

        <div class="form second">
            <div class="details-foto">
                <div class=" justify-content-center">
                    <img src="../img/user.png" id="img-fotos">
                </div>
                <div class="row justify-content-center">
                    <label for="file" style="font-size:14px;color: #008CBA;cursor: pointer;"> <i class="fa-solid fa-camera-rotate"></i><span class="text-danger">Ingrese su foto</span> </label>
                    <input type="hidden" name="MAX_FILE_SIZE" value="4194304">
                    <input type="file" name="file" id="file" accept="image/*" style="display: none" onchange="vistapreliminar(event)">
                </div>
            </div>
            <div class="fields">
                <div class="input-fields">
                    <label>Nombre de la Facultad</label>
                    <input class="controls"  type="text" id="NombreUniversidad" onkeypress="return sletras(event)" required>
                </div>

                <div class="input-fields">
                    <label>Correo electronico</label>
                    <input class="controls" type="email"  id="EmailUni" required>
                </div>

                <div class="input-fields">
                    <label>Telefono</label>
                    <input class="controls" type="text" id="TelefonoUni" onkeypress="return numeros(event)" maxlength="10" required>
                </div>

                <div class="input-fields">
                    <label>Dirección</label>
                    <input class="controls" type="text" id="DireccionUni" required>
                </div>

                <div class="input-fields">
                    <label>Página web</label>
                    <input class="controls" type="text" id="PaginaWeb" required>
                </div>
                
            </div>
            <div class="container-siguienteBtn">
                <button class="nextBtn">
                    <span>Siguiente</span>
                </button>
            </div>
        </div>

        <div class="form third">
            <div class="details-foto">
                <div class=" justify-content-center">
                    <img src="../img/user.png" id="img-fotos">
                </div>
                <div class="row justify-content-center">
                    <label for="file" style="font-size:14px;color: #008CBA;cursor: pointer;"> <i class="fa-solid fa-camera-rotate"></i><span class="text-danger">Ingrese su foto</span> </label>
                    <input type="hidden" name="MAX_FILE_SIZE" value="4194304">
                    <input type="file" name="file" id="file" accept="image/*" style="display: none" onchange="vistapreliminar(event)">
                </div>
            </div>
            <div class="fields">
                <div class="input-fields">
                    <label>Nombre de la Carrera</label>
                    <input class="controls"  type="text" id="NombreUniversidad" onkeypress="return sletras(event)" required>
                </div>

                <div class="input-fields">
                    <label>Correo electronico</label>
                    <input class="controls" type="email"  id="EmailUni" required>
                </div>

                <div class="input-fields">
                    <label>Telefono</label>
                    <input class="controls" type="text" id="TelefonoUni" onkeypress="return numeros(event)" maxlength="10" required>
                </div>

                <div class="input-fields">
                    <label>Dirección</label>
                    <input class="controls" type="text" id="DireccionUni" required>
                </div>

                <div class="input-fields">
                    <label>Página web</label>
                    <input class="controls" type="text" id="PaginaWeb" required>
                </div>
                
            </div>
            <div class="container-siguienteBtn">
                <button class="nextBtn">
                    <span>Siguiente</span>
                </button>
            </div>
        </div>
    </div>

<script src="../js/formulario.js"></script>

<?php
include "../inicio/footer.php";
?>