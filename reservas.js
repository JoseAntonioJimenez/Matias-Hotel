
let reservas = (function(inicio) {
    //variables
    let checkin, checkout, tipo_hab, precio_base = 0;
    return {
        //funciones
        precio_base: function(){
            if (tipo_hab == "ind"){
                precio_base = 30;
                
            } else {
                precio_base = 50;
            }
        },
        temporada_alta: function(valor){
            precio_añadido = valor * 0.4;
        }
    }
})();