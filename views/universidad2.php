<?php
    include "menu.php";
?>

<div class="containerUniversidad">
    <div class="container-encabezadoUniversidad">
        <h1>Registro de Universidades</h1>
        <div class="container-selector">
            <select>
                <option>Universidad</option>
                <option>Universidad de Guayaquil</option>
            </select>

            <select id="">
                <option>Facultad</option>
                <option>Ciencia Matematica y Fisica</option>
            </select>

            <select id="">
                <option>Carrera</option>
                <option>Ing. Networking</option>
            </select>
        </div>
    </div>

    <div class="formularioUniversidad">
        <!-- UNIVERSIDAD -->
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
                <div class="formulario__grupo" id="grupo__NombreUniversidad">
                    <label for="NombreUniversidad" class="formulario__label">Nombre</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="NombreUniversidad" id="NombreUniversidad" onkeypress="return sletras(event)" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo:  Abreviatura-->
                <div class="formulario__grupo" id="grupo__AbreviaturaUniversidad">
                    <label for="NombreAbreviatura" class="formulario__label">Abreviatura</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="AbreviaturaUniversidad" id="AbreviaturaUniversidad" onkeypress="return sletras(event)" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo:  Correo-->
                <div class="formulario__grupo" id="grupo__CorreoUniversidad">
                    <label for="NombreCorreo" class="formulario__label">Correo</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input" name="CorreoUniversidad" id="CorreoUniversidad" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo: Teléfono -->
                <div class="formulario__grupo" id="grupo__CelularUniversidad">
                    <label for="CelularUniversidad" class="formulario__label">Celular</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="CelularUniversidad" id="CelularUniversidad" onkeypress="return numeros(event)" maxlength="10">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El telefono solo puede contener 7 a 10 dígitos.</p>
                </div>

                <!-- Grupo: Direccion -->
                <div class="formulario__grupo" id="grupo__DireccionUniversidad">
                    <label for="DireccionUniversidad" class="formulario__label">Direccion</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="DireccionUniversidad" id="DireccionUniversidad" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error"> Complete este campo</p>
                </div>

                <!-- Grupo: Pagina Web -->
                <div class="formulario__grupo" id="grupo__WebUniversidad">
                    <label for="WebUniversidad" class="formulario__label">Página Web</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="WebUniversidad" id="WebUniversidad" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo: Nombre Director-->
                <div class="formulario__grupo" id="grupo__NombreDirector">
                    <label for="NombreDirector" class="formulario__label">Nombre del Director</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="NombreDirector" id="NombreDirector" onkeypress="return sletras(event)" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo: Correo Electronico Director-->
                <div class="formulario__grupo" id="grupo__EmailDirector">
                    <label for="correoDirector" class="formulario__label">Correo del Director</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input" name="EmailDirector" id="EmailDirector" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Formato de correo incorrecto</p>
                </div>

                <!-- Grupo: Correo Electronico Secretaria-->
                <div class="formulario__grupo" id="grupo__EmailSecretaria">
                    <label for="correoSecretaria" class="formulario__label">Correo de Secretaria</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input" name="EmailSecretaria" id="EmailSecretaria" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Formato de correo incorrecto</p>
                </div>

                <!-- ventana modal para direccion google maps -->

                <!-- <section class="modal">
                    <div class="modal__container">
                        <h2 class="modal__title"> Direccion </h2>

                        <iframe class="modal__paragraph" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31902.526990521805!2d-79.5312128!3d-1.8153472000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1666298928568!5m2!1ses!2sec" width="120" height="120" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <a href="#" class="modal__close">Cerrar </a>
                    </div>

                </section> -->

            </div>
            <!-- BOTON SIGUIENTE -->
            <div class="container-siguienteBtn">
                <button class="nextBtn">
                    <i class='bx bxs-chevron-right'></i>
                </button>
            </div>
        </div>

        <!-- Facultad -->
        <div class="form second">
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
                <!-- Grupo: Nombre Facultad-->
                <div class="formulario__grupo" id="grupo__NombreFacultad">
                    <label for="NombreFacultad" class="formulario__label">Facultad</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="NombreFacultad" id="NombreFacultad" onkeypress="return sletras(event)" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo:  Correo Facultad-->
                <div class="formulario__grupo" id="grupo__CorreoFacultad">
                    <label for="CorreoFacultad" class="formulario__label">Correo Facultad</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input" name="CorreoFacultad" id="CorreoFacultad" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo: Teléfono Facultad-->
                <div class="formulario__grupo" id="grupo__CelularFacultad">
                    <label for="CelularFacultad" class="formulario__label">Celular</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="CelularFacultad" id="CelularFacultad" onkeypress="return numeros(event)" maxlength="10">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El telefono solo puede contener 7 a 10 dígitos.</p>
                </div>

                <!-- Grupo: Nombre Decano-->
                <div class="formulario__grupo" id="grupo__NombreDecano">
                    <label for="NombreDecano" class="formulario__label">Nombre del Decano</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="NombreDecano" id="NombreDecano" onkeypress="return sletras(event)" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo:  Correo Decano-->
                <div class="formulario__grupo" id="grupo__CorreoDecano">
                    <label for="CorreoDecano" class="formulario__label">Correo</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input" name="CorreoDecano" id="CorreoDecano" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Complete este campo.</p>
                </div>

                <!-- Grupo: Teléfono Decano-->
                <div class="formulario__grupo" id="grupo__CelularDecano">
                    <label for="CelularDecano" class="formulario__label">Celular</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="CelularDecano" id="CelularDecano" onkeypress="return numeros(event)" maxlength="10">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El telefono solo puede contener 7 a 10 dígitos.</p>
                </div>

                <!-- Grupo: Direccion -->
                <div class="formulario__grupo" id="grupo__DireccionFacultad">
                    <label for="DireccionFacultad" class="formulario__label">Direccion</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" name="DireccionFacultad" id="DireccionFacultad" maxlength="30">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error"> Complete este campo</p>
                </div>

            </div>
        </div>      
    </div>
</div>
    <script src="../js/formulario.js"></script>

<?php
    include "../inicio/footer.php";
?>