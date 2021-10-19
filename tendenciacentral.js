/********** Cálculo de la Media Aritmética *************/

//CALCULO DE LA MEDIA ARITMETICA
function mediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    //Alternativa usando el método .reduce() para arrays
    const sumaLista = lista.reduce(
        function(sumaTotal = 0, nuevoItem){
            return sumaTotal + nuevoItem;
        }
    );
    const mediaAritmetica =sumaLista/lista.length;
    return mediaAritmetica;
}


//******* Cálculo de la Mediana ********/

//ORDENAR UNA LISTA DE MENOR A MAYOR
function orderLista(lista){
    const ordered = lista.sort((a,b) => a - b);

    return ordered;
}

//CALCULAR SI UN NUMERO ES PAR
function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//FUNCION CALCULO DE LA MEDIANA
function mediana(lista){
    let mediana;
    const listaOrdenada = orderLista(lista);
    const mitadLista = parseInt(listaOrdenada.length/2);
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
    
        const promedio1y2 = mediaAritmetica([elemento1, elemento2]);
    
        mediana = promedio1y2;
        return mediana;
    } else {
        mediana = listaOrdenada[mitadLista];
        return mediana;
    }
}

/************ Cálculo de la Moda ****************/

function moda(lista){
    const listaObject = {};

    lista.map(
        function(i){
            if (listaObject[i]) {
                listaObject[i] += 1;
            } else {
                listaObject[i] = 1;
            }
        }
    );

    const listaArr = Object.entries(listaObject).sort(
        function(i, j){
        return i[1] - j[1];
        }
    );

    const modaArr = listaArr[listaArr.length - 1];
    const moda = modaArr[0];
    return moda;
}

/******* Calcular la media Armónica ********/
function armonica(lista){
    const listReverse = lista.map(x => 1/x);
    const sumReverse = listReverse.reduce(
        function(xi =0, yi){
            return xi + yi;
        }
    );
    const armonic = lista.length/sumReverse;
    return armonic;
}

/****** Calcular la media Geométrica *******/
function geometrica(lista){
    const listaProducto = lista.reduce((a,b)=>a*b);
    console.log(listaProducto);
    const pot = 1/(lista.length);

    const mg = Math.pow(listaProducto,pot);
    console.log(mg);
    return mg;
}











/******** Cálculo Final **********/
function calcular(){
 const data = document.querySelector("#lista").value;

 if (data === '') {
     const error = document.querySelector("#error");
     error.innerText = "Ingresa solo números separados por comas";
 } else {

    const lista = data.split(',').map(x => Number(x));

    const ma = mediaAritmetica(lista);
    const me = mediana(lista);
    const mo = moda(lista);
    const arm = armonica(lista);
    const mg = geometrica(lista);
   
   const maOutput = document.querySelector("#maOutput");
       maOutput.innerText = ma;
   
   const meOutput = document.querySelector("#meOutput");
       meOutput.innerText = me;
   
   const moOutput = document.querySelector("#moOutput");
       moOutput.innerText = mo;
    
    const armOutput = document.querySelector("#armOutput");
        armOutput.innerText = arm;
    
    const mgOutput = document.querySelector("#mgOutput");
        mgOutput.innerText = mg;
 }

} 
