# Prompt desde navegadores web

Abrimos navegador e introducimos --> *about_blank*

Activamos la **Consola de desarolladores** con **F12**   

**Promt()** --> Pide un dato al usuario desde una ventana emergente

    prompt("Cual es tu edad)


Si queremos que el valor de prompt quede recogido en una variable

    const edad = prompt("¿Cual es tu edad?")
    edad

Vemos que de manera predeterminada guarda el valro como string, para pasarlo a númérico utilizaremos

    const num_edad = Number(edad)
    num_edad