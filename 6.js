//6 - Filtrado de elementos
function filtrar(arreglofiltrar, numerocomparacion){
    return arreglofiltrar.filter(num => num > numerocomparacion);
 }
 let numerosfiltrar = [12,5,76,4,]
 let numerocomparacion = 56;
 console.log("Los elementos mayores que ", numerocomparacion, " son: ", filtrar(numerosfiltrar, numerocomparacion));