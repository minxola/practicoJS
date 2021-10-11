function calcularPrecio (precio, descuento){
    const porcentajeAPagar = 100 - descuento;
    const nuevoPrecio = (precio * porcentajeAPagar)/100;
    
    return nuevoPrecio;
}

const coupons = [
    {name: "PLATZI", discount: 30},
    {name: "WELCOME", discount: 25},
    {name: "SECOND", discount: 20}
];

function precioFinal(){
    const inputPrice = document.getElementById("price");
    const precio = inputPrice.value;

    const inputDiscount = document.getElementById("discount");
    const descuento = inputDiscount.value;

    const inputCoupon = document.querySelector("#coupon");
    const cupon = inputCoupon.value;

    const resultado = document.querySelector("#resultado");
    const cuponero = document.querySelector("#cuponero");

    const c = coupons.find(function(i){return i.name === cupon;}
    );
    
    
   

    if (precio > 0) {
        if (descuento > 0 || cupon) {
            let finalPrice = calcularPrecio(precio, descuento);

            if (c && descuento) {
                const couponDiscount = c.discount;
                finalPrice = calcularPrecio(finalPrice, couponDiscount);
                resultado.innerText = "Se le aplicó un descuento de: " + descuento + "%."
                cuponero.innerText = "Adicionalmente, se le aplicó un Cupon de descuento de: " + couponDiscount + "% y finalmente pagará: S/. " + finalPrice;
            } else if (c && !descuento) {
                const couponDiscount = c.discount;
                finalPrice = calcularPrecio(finalPrice, couponDiscount);
                cuponero.innerText = "Se le aplicó un cupon de descuento de: " + couponDiscount + "% y parará: S/." + finalPrice;
            }else{
                const couponDiscount = 0;
                finalPrice = calcularPrecio(finalPrice, couponDiscount);

                resultado.innerText = "Se le aplicó un descuento de: " + descuento + "% y pagará finalmente: S/. " + finalPrice;
                cuponero.innerText = "No ingresó un cupón válido";      
            }

        } else{
            alert("Ingresa descuento o cupon");
        }
    } else {
        alert("Ingresa Precio del Producto");
    }




}