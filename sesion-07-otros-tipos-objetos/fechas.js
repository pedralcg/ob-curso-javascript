// Trabajando con Fechas

const fecha = new Date()
console.log(fecha)

// Atención los meses inicializan en 0 (0-Enero, 11-Diciembre)
const fecha2 = new Date(1990,8) //Septiembre 1990
console.log(fecha2)

const fecha3 = new Date(1990, 7, 1) // 1 de Agosto de 1990
console.log(fecha3)


const fecha4 = new Date(1000000000000)
console.log(fecha4)


const fecha5 = new Date("August 1, 1990 17:30:00")
console.log(fecha5)


/// Comparar fechas
console.log(fecha > fecha2)

const fecha6 = new Date(1990,8)
console.log(fecha6 == fecha2)
console.log(fecha6 === fecha2) //No se pueden comparar fechas de esta manera

// .getTime() --> Transforma la fecha es milisegundo apra despues compararla correctamente
console.log(fecha2.getTime() === fecha6.getTime())


//// Obtener el día, mes y año de una fecha

// .getDate() --> Obtener el día
console.log(fecha3.getDate())

// .getMonth() --> Obtener el mes (Hay que sumar 1 al mes (Enero=0, diciembre=11))
console.log(fecha3.getMonth() +1 )

// getFullYear() --> Obtener el año
console.log(fecha3.getFullYear())

console.log(fecha3)
console.log(fecha3.toLocaleDateString("es-ES"))