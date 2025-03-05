// Carga y Sobrecarga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola! soy la función hola()")
}

saludar()

//// Como funciona la carga de funciones desde el intérprete
// 1. Carga la función global()
// 2. saludar() global ()
// 3. hola() saludar() global()
// 4. saludar() global ()
// 5. global ()


// StackOverFlow --> Sobrecarga de funciones
// function recursivo() {
//     recursivo()
// }
// recursivo()