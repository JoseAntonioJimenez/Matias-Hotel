let reservas = (function (inicio) {
    //variables
    let checkin, checkout, tipo_hab, precio_base, mes, dia_actual, plazo, descuento, precio_final, dias = new Array(),
        dias_cont = 0;
    return {
        //funciones
        dar_valor: function () {
            mes = moment().get('month') + 1;
            precio_base = 0;
            dia_actual = moment();
            checkout = moment(document.getElementById("checkout").value);
            descuento = 0;
            plazo = moment.duration(checkout.diff(dia_actual)).asDays();
            precio_final = 0;
        },
        precio_base: function () {
            if (tipo_hab == "ind") {
                precio_base = 30;
            } else {
                precio_base = 50;
            }
            if (plazo > 7) {
                reservas.tiempo_reserva(precio_base);
                precio_final = precio_base - descuento;
            }
            if (mes == 6 || mes == 7 || mes == 8 || mes == 9) {
                reservas.temporada_alta(precio_base);
                precio_final = precio_final + precio_añadido;
            }

        },
        temporada_alta: function (valor) {
            precio_añadido = valor * 0.4;
        },
        tiempo_reserva: function (valor) {
            descuento = valor * 0.1;
        },
        calcular_dias: function () {

        }
    }
})();
