//Cálculo del cuadrado********************
console.group("Cuadrado");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();

//Cálculo del Triángulo*********************
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();
 
//Cálculos del Círculo*************************
console.group("Círculo");

function diametroCirculo(radio){
    return 2 * radio;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return radio * radio * Math.PI;
}

console.groupEnd();

//Conexiones con HTML_______________________

//CUADRADO************************************
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert('El Perímetro del cuadrado es: ' + perimetro + ' cm.');
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert('El Área del cuadrado es: ' + area + ' cm2.');
}

//TRINAGULO*********************************
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("lado1Triangulo");
    const lado1Triangulo = Number(inputLado1.value);

    const inputLado2 = document.getElementById("lado2Triangulo");
    const lado2Triangulo = Number(inputLado2.value);

    const inputBase = document.getElementById("baseTriangulo");
    const baseTriangulo = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo);
    alert('El Perímetro del Triángulo es: ' + perimetro + ' cm.');
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("baseTriangulo");
    const baseTriangulo = inputBase.value;

    const inputAltura = document.getElementById("alturaTriangulo");
    const alturaTriangulo = inputAltura.value;

    const area = areaTriangulo(baseTriangulo, alturaTriangulo);
    alert('El Área del Triángulo es: ' + area + ' cm2.');
}

//CIRCULO***********************************
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert('El Perímetro del Círculo es: ' + perimetro + ' cm.');
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert('El Área del Círculo es: ' + area + ' cm2.');
}