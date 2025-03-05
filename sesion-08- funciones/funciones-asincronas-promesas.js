// Funciones asíncronas --> Funciones que pueden tardar algo de tiempo en ejecutarse (llamadas a otros servicios)

function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}

// Promesas --> Promise()
// Pueden ejecutarse o no de forma exitosa
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random()*2)
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

// Como podemos consumir estas Promesas - Promise()
miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me he ejecuto siempre"))


// async await --> más adelante