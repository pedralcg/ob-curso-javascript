// Sets o conjuntos (en castellano) --> Permite asegurarnos que no va a tener valores repetidos/duplicados

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", {id: 5}, {id: 5}, "hola"]
//console.log({id:5} == {id: 5})

const miSet = new Set(array)

console.log(array)
console.log(miSet)


// .add() --> Añadir valores
miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet) // No añade al ser repetido


//.delete() --> Eliminar valores
miSet.delete("hola")
console.log(miSet)

// .clear() --> Limpia/elimina todo el set
// miSet.clear()
// console.log(miSet)


// .has() --> SAber si existe un valor en el set
//console.log(array.includes(2))

console.log(miSet.has(2))


// size --> Conocer el tamaño del set (valores únicos)
console.log(miSet.size)



// Iteración dentro de los valores del set
miSet.forEach( valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)


const ar_miSet = [...miSet]
console.log(ar_miSet)
console.log(ar_miSet[7])