class celular {
    constructor(id, marca, modelo, stocks, precio) {
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.stocks = stocks,
        this.precio = precio
    }
}

const celular1 = new celular(1, "motorola", "e12", 5, 500000) 
const celular2 = new celular(2, "samsung", "a4", 6, 800000) 
const celular3 = new celular(3, "motorola", "e15", 8, 400000) 
const celular4 = new celular(4, "iPhone", "12 Pro", 10, 1200000) 
const celular5 = new celular(5, "Xiaomi", "Mi 11", 7, 900000) 
const celulares = [celular1, celular2, celular3, celular4, celular5] 

function dividir_cuotas(precio, cantidad_cuotas) {
    const cuota_mensual = precio / cantidad_cuotas 
    return cuota_mensual 
}

function buscar(modelo) {
    const celulares_encontrados = celulares.filter((celular) => celular.modelo === modelo) 
    return celulares_encontrados 
}

let nombre_cliente = prompt("Ingrese su nombre: ") 

let opcion = "" 

while (opcion !== "n") {
    Cuotas = prompt(nombre_cliente + " indique la cantidad de cuotas.") 

    if (isNaN(Cuotas)) {
        Cuotas = 0 
        console.log(nombre_cliente + '  cantidad de cuotas ingresadas está mal, vuelva a intentarlo, GRACIAS. ') 
    } else {
        let modelo_celular = prompt(nombre_cliente + " Ingrese el modelo del celular (e12, a4, e15): ") 

        if (modelo_celular === "") {
            console.log(nombre_cliente + " El modelo del celular no puede estar vacío.") 
        } else {
            const celulares_encontrados = buscar(modelo_celular) 

            if (celulares_encontrados.length === 0) {
                console.log("No se encontraron celulares con el modelo " + modelo_celular) 
                for (const celular_ of celulares) {
                    console.log(celular_.marca + '  ' + celular_.modelo + '  precio  :   ' + celular_.precio)
                }
            } else {
                for (const celular of celulares_encontrados) {
                    console.log(nombre_cliente + " " + celular.marca + " " + celular.modelo + " - Precio de cuota " + dividir_cuotas(celular.precio, Cuotas)) 
                }
            }
        }

        opcion = prompt(nombre_cliente + " ¿Quieres buscar otro celular? (s/n)") 
    }
}

console.log("Gracias por usar nuestro programa, #1 CODERHOUSE.") 
