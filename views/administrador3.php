<?php
    include "menu.php";
?>

<div class="container">
        <!-- TITULO -->
    <div class="container-encabezado">
        <h1>Registro de Administradores</h1>
    </div>
    <!-- FORMULARIO DE REGISTRO -->
    <div class="formulario">
        <div class="form first">                
            <div class="fields" id="formulario">
                <!-- DETALLE DE LA FOTO -->
                    <div class="formulario__grupo">
                        <div class="details-foto">
                            <div class=" justify-content-center">
                                <img src="../img/user.png" id="img-foto">
                            </div>
                            <div class="row justify-content-center">
                                    <label for="file" style="font-size:14px;color: #008CBA;cursor: pointer;"> <i class="fa-solid fa-camera-rotate"></i><span class="text-danger">Ingrese su foto</span> </label>
                                    <input type="hidden" name="MAX_FILE_SIZE" value="4194304">
                                    <input type="file" name="file" id="file" accept="image/*" style="display: none" onchange="vistapreliminar(event)">
                            </div>
                        </div>
                    </div>

                <!-- Grupo: Nombre -->
                <div class="formulario__grupo" id="grupo__NombreAdmin">
                    <!-- <label for="NombreAdmin" class="formulario__label">Nombre</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="NombreAdmin" id="NombreAdmin" onkeypress="return sletras(event)" maxlength="30" placeholder="Nombre">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo: Apellido -->
                <div class="formulario__grupo" id="grupo__ApellidoAdmin">
                    <!-- <label for="ApellidoAdmin" class="formulario__label">Apellido</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="ApellidoAdmin" id="ApellidoAdmin" onkeypress="return sletras(event)" maxlength="30" placeholder="Apellido">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo. </p>
                </div>

                <!-- Grupo: cedula -->
                <div class="formulario__grupo" id="grupo__CedulaAdmin">
                    <!-- <label for="CedulaAdmin" class="formulario__label">Cedula</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="CedulaAdmin" id="CedulaAdmin" minlength="10" maxlength="10" onkeypress="return numeros(event)" placeholder="Cedula">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">La cedula debe tener 10 d??gitos.</p>
                </div>

                <!-- Grupo: Tel??fono -->
                <div class="formulario__grupo" id="grupo__CelularAdmin">
                    <!-- <label for="CelularAdmin" class="formulario__label">Celular</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="CelularAdmin" id="CelularAdmin" onkeypress="return numeros(event)" maxlength="10" placeholder="Celular">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El telefono solo puede contener 7 a 10 d??gitos.</p>
                </div>

                <!-- Grupo: Correo Electronico -->
                <div class="formulario__grupo" id="grupo__EmailAdmin">
                    <!-- <label for="correo" class="formulario__label">Correo Electr??nico</label> -->
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input" name="EmailAdmin" id="EmailAdmin" maxlength="30" placeholder="Correo Electr??nico">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Formato de correo incorrecto</p>
                </div>

                <!-- Grupo: Direccion -->
                <div class="formulario__grupo" id="grupo__DireccionAdmin">
                    <!-- <label for="DireccionAdmin" class="formulario__label">Direccion</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="DireccionAdmin" id="DireccionAdmin" maxlength="30" placeholder="Direcci??n">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error"> Complete este campo</p>
                </div>

                <!-- Grupo: Contrase??a -->
                <div class="formulario__grupo" id="grupo__Contrase??aAdmin">
                    <!-- <label for="Contrase??aAdmin" class="formulario__label">Contrase??a</label> -->
                    <div class="formulario__grupo-input">
                        <input type="password" class="formulario__input" name="Contrase??aAdmin" id="Contrase??aAdmin" maxlength="15" placeholder="Contrase??a">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">La contrase??a tiene que ser de 6 a 15 d??gitos.</p>
                </div>

                <!-- Grupo: Contrase??a 2 -->
                <div class="formulario__grupo" id="grupo__ConfirmarContrase??a">
                    <!-- <label for="ConfirmarContrase??a" class="formulario__label">Repetir Contrase??a</label> -->
                    <div class="formulario__grupo-input">
                        <input type="password" class="formulario__input" name="ConfirmarContrase??a" id="ConfirmarContrase??a" maxlength="15" placeholder="Repetir Contrase??a">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Ambas contrase??as deben ser iguales.</p>
                </div>
            </div>
            <!-- BOTON REGISTRAR -->
            <div class="container-guardar">
                <button id="BtnRegistrar" onclick="RegistrarAdmin();">
                    <span class="btnText">Guardar</span>
                </button>
            </div>
        </div>
    </div>

    <!-- LISTADO DE ADMINISTRADORES -->
    <div id="DivlistaAdmin">
        <table class="table">
            <thead class="table-light">
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Operaciones</th>
                </tr>
            </thead>
            <tbody id="TablaAdmins" class="cuerpo-tabla">
            </tbody>
        </table>
    </div>
    
</div>
    
<?php
    include "../inicio/footer.php";
?>