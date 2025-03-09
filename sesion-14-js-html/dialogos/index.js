const boton = document.querySelector("#btn")

//console.log(boton)

boton.addEventListener("click", () => {
    //console.log("click")
    //alert("Se ha hecho click")
    //confirm("¿Estás de acuerdo?")
    //confirm("¿Estás de acuerdo?") && console.log("OK")

    // confirm("¿Estás de acuerdo?") 
    //     ? console.log("OK")
    //     : console.log(" NO!!")

    const respuesta = confirm("¿Seguro?")
    if (respuesta) {
        console.log("Estás de acuerdo")
    } else {
        console.log("NO estás de acuerdo")
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre= prompt("¿Cual es tu nombre?")
    if (nombre) {
        console.log("Tu nombres es " + nombre)
    } else {
        console.log("No has escrito nada")
    }
    
})

const lista = [{
    nombre: "Pedro",
    edad: 34
}, {
    nombre: "Julia",
    edad: 35
}, {
    nombre: "Mario",
    edad: 3
}]

//console.log(lista)
console.table(lista)