<?php
    include "menu.php";
?>

<div class="container">
        <!-- TITULO -->
    <div class="container-encabezado">
        <h1>Registro de Departamento</h1>
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
                <div class="formulario__grupo" id="grupo__NombreDep">
                    <!-- <label for="NombreAdmin" class="formulario__label">Nombre</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="NombreDep" id="NombreDep" onkeypress="return sletras(event)" maxlength="30" placeholder="Nombre">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo: codigo departamento -->
                <div class="formulario__grupo" id="grupo__CodigoDep">
                    <!-- <label for="CedulaAdmin" class="formulario__label">Cedula</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="CodigoDep" id="CodigoDep" minlength="10" maxlength="10" onkeypress="return numeros(event)" placeholder="Codigo Departamento">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">La cedula debe tener 10 dígitos.</p>
                </div>

                <!-- Grupo: link de reunión -->
                <div class="formulario__grupo" id="grupo__LinkReunionDep">
                    <!-- <label for="CelularAdmin" class="formulario__label">Celular</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="LinkReunionDep" id="LinkReunionDep" onkeypress="return numeros(event)" maxlength="10" placeholder="Link Reunión">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El telefono solo puede contener 7 a 10 dígitos.</p>
                </div>

                
                <!-- Grupo: Numero de personal -->
                <div class="formulario__grupo" id="grupo__NumeroPersonal">
                    <!-- <label for="ContraseñaAdmin" class="formulario__label">Contraseña</label> -->
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="NumeroPersonalDep" id="NumeroPersonalDep" maxlength="15" placeholder="Cantidad del personal">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">La contraseña tiene que ser de 6 a 15 dígitos.</p>
                </div>

                <!-- BOTON REGISTRAR -->
            <div class="container-guardar">
                <button id="BtnRegistrar" onclick="RegistrarDep();">
                    <span class="btnText">Guardar</span>
                </button>
            </div>
        </div>
    </div>

    <!-- LISTADO DE ADMINISTRADORES -->
    <!-- <div id="DivlistaAdmin">
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
    </div> -->
    
</div>
    
<?php
    include "../inicio/footer.php";
?>