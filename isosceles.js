function alturaIsosceles(lado, base){
    const h = Math.sqrt(Math.pow(lado,2) - Math.pow((base/2),2));
    return h;
}

function esIsosceles(lado1, lado2, lado3){
    if (lado1 === lado2) {
        let lado = lado1;
        let base = lado3;
        const altura = alturaIsosceles(lado, base);
        return altura;
    } else if (lado1 === lado3) {
        let lado = lado1;
        let base = lado2;
        const altura = alturaIsosceles(lado, base);
        return altura;
    } else if (lado2 === lado3) {
        let lado = lado2;
        let base = lado1;
       const altura = alturaIsosceles(lado, base);
       return altura;
    } else {
        return false;
    }
}


function calcularAltura(){
    const lado1 = Number((document.getElementById("lado1")).value)
    const lado2 = Number((document.getElementById("lado2")).value)
    const lado3 = Number((document.getElementById("lado3")).value)

    const esIso = esIsosceles(lado1, lado2, lado3);

    if(esIso){
        alert("La altura del triángulo es: " + esIso + " cm.");
    } else if(isNaN(esIso)  || esIso === 0){
        alert ("Triángulo Isosceles IMPOSIBLE");
    } else {
        alert("EL TRIÁNGULO NO ES ISOSCELES");
    }
}