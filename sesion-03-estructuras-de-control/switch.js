// Sentencias Switch

let nota = 3;


switch (nota) {
    case 5:
        console.log("Enhorabuena, has obtenido un sobresaliente");
        break;
    case 4: 
        console.log("Buen trabajo, has obtenido un notable");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("Lo siento, has suspendido");
        break;
    case 1:
        console.log("Dedicate a otra cosa, campeón");
        break;
    default:
        console.log("Nota no válida");
        break;
}