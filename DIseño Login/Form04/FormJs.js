$(document).ready(function () {
    $("#datosPersonalesForm").validate({
        rules: {
            nombre: {
                required: true,
                lettersonly: true
            },
            apellido: {
                required: true,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            fecha_nacimiento: {
                required: true,
                date: true
            },
            pais_residencia: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "Por favor, introduce tu nombre",
                lettersonly: "El nombre solo debe contener letras"
            },
            apellido: {
                required: "Por favor, introduce tu apellido",
                lettersonly: "El apellido solo debe contener letras"
            },
            email: {
                required: "Por favor, introduce tu email",
                email: "Por favor, introduce un email válido"
            },
            fecha_nacimiento: {
                required: "Por favor, introduce tu fecha de nacimiento",
                date: "Por favor, introduce una fecha válida"
            },
            pais_residencia: {
                required: "Por favor, introduce tu país de residencia"
            }
        },
        errorClass: "invalid-feedback",
        errorElement: "div",
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+$/.test(value);
    }, "El campo solo debe contener letras");
});