let reservas = (function (inicio) {
    //variables
    let checkin, checkout, tipo_hab, precio_base, mes, dia_actual, plazo, descuento, precio_final, dias = new Array(),
        dias_cont = 0,
        i = 1,
        o = 0,
        diferencia;
    return {
        //funciones
        dar_valor: function () {
            // Dar valores a las variables
            tipo_hab = document.getElementById("tipo_habitacion").value;
            mes = moment().get('month') + 1;
            precio_base = 0;
            dia_actual = moment();
            checkout = moment(document.getElementById("checkout").value);
            checkin = moment(document.getElementById("checkin").value);
            descuento = 0;
            plazo = moment.duration(checkin.diff(dia_actual)).asDays();
            diferencia = moment.duration(checkout.diff("checkin").asDays());
            precio_final = 0;
        },
        precio_base: function () {
            // Declarar el precio base
            if (tipo_hab == "ind") {
                precio_base = 30;
            } else {
                precio_base = 50;
            }
            // Si reserva con mas de 7 dias
            if (plazo > 7) {
                reservas.tiempo_reserva(precio_base);
                precio_final = precio_base - descuento1;
            }
            // Si es temporada alta
            if (mes == 6 || mes == 7 || mes == 8 || mes == 9) {
                reservas.temporada_alta(precio_base);
                precio_final = precio_final + precio_añadido1;
            }
            // Si hay un sabado o un domingo
            dias[0] = dia_actual.format('dddd');
            while (i < diferencia) {
                dias[i] = dia_actual.add(i, 'd').format('dddd');
                i = i + 1;
            }
            while (o < i) {
                if (dias[i] == "Sunday" || dias[i] == "Saturday") {
                    reservas.calcular_dias(precio_base);
                }
                o = o + 1;
            }
            // Si solo reserva un dia
            if (diferencia == 1) {
                reservas.una_noche(precio_base);
            }

        },
        temporada_alta: function (valor) {
            precio_añadido1 = valor * 0.4;
        },
        tiempo_reserva: function (valor) {
            descuento1 = valor * 0.1;
        },
        calcular_dias: function (valor) {
            precio_añadido2 = valor * 0.15;
        },
        una_noche: function (valor) {
            precio_añadido3 = valor * 0.2;
        }
    }
})();
