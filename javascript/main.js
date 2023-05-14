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

// Arrays y objetos
class TasaPorPais {
        constructor(pais, tasaRetiro, tasaAgregar) {
                this.pais = pais;
                this.tasaRetiro = tasaRetiro;
                this.tasaAgregar = tasaAgregar;
        }
} 

class ComisionPorMoneda{
        constructor(moneda, valorComision) {
                this.moneda = moneda;
                this.valorComision = valorComision;                
        }
}

const tasaArgentina = new TasaPorPais("Argentina", 4708, 0.0002123);
const tasaChile = new TasaPorPais("Chile", 16306, 0.00006132);
const tasaColombia = new TasaPorPais("Colombia", 93407, 0.00001071);
const tasaDolares = new TasaPorPais("Estados Unidos", 20, 0.04831506);
const tasaUruguay = new TasaPorPais("Uruguay", 38, 0.0012455);

const comisionArs = new ComisionPorMoneda("ARS", 15.30);
const comisionClp = new ComisionPorMoneda("CLP", 15.30);
const comisionCop = new ComisionPorMoneda("COP", 20.30);
const comisionUsd = new ComisionPorMoneda("USD", 12.30);
const comisionUyu = new ComisionPorMoneda("UYU", 13.20);


const tasas = [tasaArgentina, tasaChile, tasaColombia, tasaDolares, tasaUruguay];
const comisiones = [comisionArs, comisionClp, comisionCop, comisionUsd, comisionUyu];


// Simulador
alert("Bienvenido a UnicoinWallet")
let tipoDeOperacion = prompt("Ingrese tipo de operacion: Retirar, Agregar, Ver tasas, Ver comisiones").toLowerCase();

while (tipoDeOperacion != "retirar" && tipoDeOperacion != "agregar" && tipoDeOperacion != "ver tasas" && tipoDeOperacion != "ver comisiones") {
        alert("Ingrese una operacion valida");
        tipoDeOperacion = prompt("Ingrese tipo de operacion: Retirar, Agregar, Ver tasas, Ver comisiones").toLowerCase();
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
} else if (tipoDeOperacion === "ver tasas") {
        tasas.forEach((item) => {
                alert(`
                Pais: ${item.pais}
                Tasa de retiro: ${item.tasaRetiro}
                Tasa para agregar: ${item.tasaAgregar}
                `);
        })
} else if (tipoDeOperacion === "ver comisiones") {
        let filtro = prompt("Desea filtrar comisiones?").toLowerCase();
        while(filtro != "si" && filtro != "no") {
                filtro = prompt("Desea filtrar comisiones?").toLowerCase();
        }
        if (filtro === "si") {
                let parametroFiltro = parseFloat(prompt("Ingrese valor minimo de comision por el que quiere filtrar"));
                while(parametroFiltro <= 0 || isNaN(parametroFiltro)){
                        alert("Ingresar un valor valido");
                        parametroFiltro = parseFloat(prompt("Ingrese valor minimo de comision por el que quiere filtrar"));
                }
                let comisionFiltro = comisiones.filter(item => item.valorComision > parametroFiltro);
                comisionFiltro.forEach((item) => {
                        alert(`
                        Moneda: ${item.moneda}
                        Comision: ${item.valorComision}
                        `);
                })
        } else if(filtro === "no") {
                comisiones.forEach((item) => {
                        alert(`
                        Moneda: ${item.moneda}
                        Comision: ${item.valorComision}
                        `);
                })
        }
}