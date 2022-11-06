<?php
    include "menu.php";
?>

<div class="container">
    <!-- TITULO -->
    <div class="container-encabezado">
        <h1>Administradores</h1>
    </div>

    <!--REGISTRAR ADMINISTRADOR -->
    <div class="contenedor ">
        <button id="btn-abrir-popup" class="btn-abrir-popup">NUEVO</button>

        <div class="overlay" id="overlay">
            <div class="popup" id="popup">
                <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup">
                    <i class='bx bxs-x-circle' ></i>                
                </a>

                <div class="container">
                    <div class="container-encabezado">
                        <h1>Registro de Administradores</h1>
                    </div>

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
                                    <label for="NombreAdmin" class="formulario__label">Nombre</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="NombreAdmin" id="NombreAdmin" onkeypress="return sletras(event)" maxlength="30">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">Complete este campo.</p>
                                </div>

                                <!-- Grupo: Apellido -->
                                <div class="formulario__grupo" id="grupo__ApellidoAdmin">
                                    <label for="ApellidoAdmin" class="formulario__label">Apellido</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="ApellidoAdmin" id="ApellidoAdmin" onkeypress="return sletras(event)" maxlength="30">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">Complete este campo. </p>
                                </div>

                                <!-- Grupo: cedula -->
                                <div class="formulario__grupo" id="grupo__CedulaAdmin">
                                    <label for="CedulaAdmin" class="formulario__label">Cedula</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="CedulaAdmin" id="CedulaAdmin" minlength="10" maxlength="10" onkeypress="return numeros(event)">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">La cedula debe tener 10 dígitos.</p>
                                </div>

                                <!-- Grupo: Teléfono -->
                                <div class="formulario__grupo" id="grupo__CelularAdmin">
                                    <label for="CelularAdmin" class="formulario__label">Celular</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="CelularAdmin" id="CelularAdmin" onkeypress="return numeros(event)" maxlength="10">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El telefono solo puede contener 7 a 10 dígitos.</p>
                                </div>

                                <!-- Grupo: Correo Electronico -->
                                <div class="formulario__grupo" id="grupo__EmailAdmin">
                                    <label for="correo" class="formulario__label">Correo Electrónico</label>
                                    <div class="formulario__grupo-input">
                                        <input type="email" class="formulario__input" name="EmailAdmin" id="EmailAdmin" maxlength="30">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">Formato de correo incorrecto</p>
                                </div>

                                <!-- Grupo: Direccion -->
                                <div class="formulario__grupo" id="grupo__DireccionAdmin">
                                    <label for="DireccionAdmin" class="formulario__label">Direccion</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="DireccionAdmin" id="DireccionAdmin" maxlength="30">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error"> Complete este campo</p>
                                </div>

                                <!-- Grupo: Contraseña -->
                                <div class="formulario__grupo" id="grupo__ContraseñaAdmin">
                                    <label for="ContraseñaAdmin" class="formulario__label">Contraseña</label>
                                    <div class="formulario__grupo-input">
                                        <input type="password" class="formulario__input" name="ContraseñaAdmin" id="ContraseñaAdmin" maxlength="15">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">La contraseña tiene que ser de 6 a 15 dígitos.</p>
                                </div>

                                <!-- Grupo: Contraseña 2 -->
                                <div class="formulario__grupo" id="grupo__ConfirmarContraseña">
                                    <label for="ConfirmarContraseña" class="formulario__label">Repetir Contraseña</label>
                                    <div class="formulario__grupo-input">
                                        <input type="password" class="formulario__input" name="ConfirmarContraseña" id="ConfirmarContraseña" maxlength="15">
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
                                </div>

                                <!-- Boton Registrar -->
                                <!-- <div class="container-guardar">
                                    <button id="BtnRegistrar" onclick="RegistrarAdmin();">
                                        <span class="btnText">Guardar</span>
                                    </button>
                                </div> -->
                            </div>
                            <!-- BOTON REGISTRAR -->
                            <div class="container-guardar">
                                <button id="BtnRegistrar" onclick="RegistrarAdmin();">
                                    <span class="btnText">Guardar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <th>Correo</th>
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