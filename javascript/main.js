// Variables
let tasaRetiroAPesos = 6720;
let tasaRetiroADolares = 14;
let tasaAgregarEnPesos = 0.000148;
let tasaAgregarEnDolares = 0.0714;

// Funciones
const conversionUnicoinPesos = (monto) => monto * tasaRetiroAPesos;
const conversionUnicoinDolares = (monto) => monto * tasaRetiroADolares;
const conversionDolaresUnicoin = (monto) => tasaAgregarEnDolares / monto;
const conversionPesosUnicoin = (monto) => tasaAgregarEnPesos / monto;

// Simulador

alert("Bienvenido a UnicoinWallet")
let tipoDeOperacion = prompt("Ingrese tipo de operacion: Retirar, Agregar").toLowerCase();

while (tipoDeOperacion != "retirar" && tipoDeOperacion != "agregar") {
        alert("Ingrese una operacion valida");
        tipoDeOperacion = prompt("Ingrese tipo de operacion: Retirar, Agregar").toLowerCase();
}

if (tipoDeOperacion === "retirar") {
        let billeteraVirtual = prompt("A donde desea retirar su dinero? MercadoPago si desea retirar en pesos o PayPal si desea retirar en dolares").toLowerCase();
        while (billeteraVirtual != "mercadopago" && billeteraVirtual != "paypal") {
                alert("Ingrese un metodo de pago valido.");
                billeteraVirtual = prompt("A donde desea retirar su dinero? MercadoPago si desea retirar en pesos o PayPal si desea retirar en dolares").toLowerCase();
        }
        let monto = parseFloat(prompt("Ingrese cantidad"));
        while (monto <= 0 || isNaN(monto)) {
                alert("Ingresar un monto valido");
                monto = parseFloat(prompt("Ingrese cantidad"));
        }
        if (billeteraVirtual === "mercadopago") {
                let nuevoMontoPesos = conversionUnicoinPesos(monto);
                alert(`Se han retirado a su cuenta ${nuevoMontoPesos} ARS`)
        } else if (billeteraVirtual === "paypal") {
                let nuevoMontoEnDolares = conversionUnicoinDolares(monto);
                alert(`Se han retirado a su cuenta ${nuevoMontoEnDolares} USD`);
        }
} else if (tipoDeOperacion === "agregar") {
        let billeteraVirtual = prompt("Con que desea agregar dinero a su cuenta? MercadoPago si desea agregar con pesos o PayPal si desea agregar con dolares").toLowerCase();
        while (billeteraVirtual != "mercadopago" && billeteraVirtual != "paypal") {
                alert("Ingrese un metodo de pago valido.");
                billeteraVirtual = prompt("Con que desea agregar dinero a su cuenta? MercadoPago si desea agregar con pesos o PayPal si desea agregar con dolares").toLowerCase();
        }
        let monto = parseFloat(prompt("Ingrese cantidad"));
        while (monto <= 0 || isNaN(monto)) {
                alert("Ingresar un monto valido");
                monto = parseFloat(prompt("Ingrese cantidad"));
        }
        if (billeteraVirtual === "mercadopago") {
                let nuevoMontoUCPesos = conversionPesosUnicoin(monto);
                alert(`Se han agregado ${nuevoMontoUCPesos} Unicoin a su wallet`);
        } else if (billeteraVirtual == "paypal") {
                let nuevoMontoUCDolares = conversionDolaresUnicoin(monto);
                alert(`Se han agregado ${nuevoMontoUCDolares} Unicoin a su wallet`);
        }
}


