
let reservas = (function(inicio) {
    //variables
    let checkin, checkout, tipo_hab, precio_base, mes, dia_actual, plazo;
    return {
        //funciones
        dar_valor: function(){
            mes = moment().format('MMMM');
            precio_base = 0;
            dia_actual = moment.format();
        },
        precio_base: function(){
            if (tipo_hab == "ind"){
                precio_base = 30;
                if (mes == "June" ||mes == "July" ||mes == "August" ||mes == "September"){
                    reservas.temporada_alta(precio_base);
                    precio_base = precio_base + precio_añadido;
                }
            } else {
                precio_base = 50;
                if (mes == "June" ||mes == "July" ||mes == "August" ||mes == "September"){
                    reservas.temporada_alta(precio_base);
                    precio_base = precio_base + precio_añadido;
                }
                
            }
        },
        temporada_alta: function(valor){
            precio_añadido = valor * 0.4;
        },
        tiempo_reserva: function() {
            plazo = moment.duration(end.diff(dia_actual)).asDays();
        }
    }
})();