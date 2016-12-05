
let reservas = (function(inicio) {
    //variables
    let checkin, checkout, tipo_hab, precio_base = 0, mes = moment().format('MMMM');
    return {
        //funciones
        precio_base: function(){
            if (tipo_hab == "ind"){
                precio_base = 30;
                if (mes == "June" ||mes == "July" ||mes == "August" ||mes == "September"){
                    reservas.temporada_alta(precio_base);
                    precio_base = precio_base + precio_añadido;
                }
            } else {
                precio_base = 50;
            }
        },
        temporada_alta: function(valor){
            precio_añadido = valor * 0.4;
        }
    }
})();