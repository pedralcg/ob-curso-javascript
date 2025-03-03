# Fundamentos de JavaScript

## Configuración de VS Code y extensiones recomendadas
Instalar extensiones para mejorar la experiencia de desarrollo en JavaScript.  
Algunas extensiones recomendadas son :
- **JavaScript (ES6) code snippets**: Ayuda a escribir código más rápido con atajos.
- **Prettier**: Formatea el código para que sea más legible [1, 2]. Se puede configurar para que formatee automáticamente al guardar o usando Shift + Alt + F.
- **Bracket Pair Colorizer**: Colorea los pares de corchetes para facilitar la identificación de bloques de código.
- **Indent Rainbow**: Añade colores a la indentación para mejorar la legibilidad del código.
- **Quokka**: Proporciona un espacio para experimentar con código JavaScript y ver los resultados en tiempo real.
- **Live Server**: Permite visualizar los cambios en el navegador en tiempo real al guardar el archivo HTML.

## ¿Qué es JavaScript?
JavaScript es un lenguaje de programación interpretado, lo que significa que no necesita ser compilado.  
El navegador actúa como intérprete, ejecutando el código línea por línea.  
Inicialmente, se creó para añadir interactividad a las páginas web.  
Permite crear aplicaciones web interactivas donde el usuario puede interactuar con elementos como botones y formularios.  
Hoy en día, JavaScript se utiliza para mucho más que solo interactividad web, incluyendo la creación de servidores web, aplicaciones móviles y de escritorio.

## ¿Qué es Node.js?
Node.js es un entorno de ejecución para JavaScript que permite ejecutarlo fuera del navegador. Fue creado en 2009 por Ryan Dahl.  
Permite utilizar JavaScript para desarrollar aplicaciones de servidor, herramientas de línea de comandos y aplicaciones de escritorio, entre otros.  
Node.js es multiplataforma, lo que significa que el código puede ejecutarse en diferentes sistemas operativos como Windows, macOS y Linux.

## ¿Qué es npm (Node Package Manager)?
npm es el gestor de paquetes para Node.js.  
Se utiliza para instalar y gestionar dependencias (módulos y librerías) en proyectos de Node.js.
npm facilita la reutilización de código y la gestión de dependencias en proyectos JavaScript.

## Declaración de variables
JavaScript utiliza tipado inferido, lo que significa que no es necesario declarar el tipo de una variable. El tipo se determina en tiempo de ejecución.  
Hay tres formas de declarar variables:
- **var**: Tiene un alcance de función o global.
- **let**: Tiene un alcance de bloque.
- **const**: Se utiliza para declarar constantes, que son variables cuyo valor no puede ser reasignado después de la inicialización.

## Notación en JavaScript
- **Punto y coma (;)**: Se utiliza para delimitar el final de una línea.  
*Aunque es opcional, se recomienda usarlo para evitar errores*.
- **Punto (.)**: Se utiliza para acceder a las propiedades de un objeto.
- **Corchetes cuadrados ([])**: Se utilizan para definir y acceder a elementos de listas (arrays).
- **Paréntesis (())**: Se utilizan en funciones, tanto para definir los parámetros como para invocar la función.
- **Llaves ({})**: Se utilizan para definir objetos, funciones y estructuras de control (como if, else, bucles).

## Listas (Arrays)
Una lista (o array) es una colección ordenada de elementos.  
Los arrays pueden contener elementos de diferentes tipos (números, strings, booleanos, objetos, etc.).  

Se pueden declarar de dos maneras:
- Usando corchetes: const lista = [1, "hola", true];
- Usando el constructor Array: const lista = new Array(1, "hola", true);  

Se accede a los elementos de un array mediante su índice, comenzando desde 0.

## Objetos 
Un objeto es una colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor.  
Los objetos se definen usando llaves {}.  
Se accede a las propiedades de un objeto utilizando el punto (.) o los corchetes [].  
Los nombres de las propiedades pueden ser strings, pero si no son identificadores válidos (por ejemplo, si contienen espacios o caracteres especiales), deben ir entre comillas.

## Fechas
JavaScript tiene un objeto Date para trabajar con fechas y horas.  
Se pueden crear objetos Date para representar fechas y horas específicas, o para obtener la fecha y hora actual.  
Existen librerías como Moment.js que facilitan el manejo de fechas en JavaScript.

## Estructuras de control: Bifurcaciones, comparaciones y bucles
Las estructuras de control permiten dirigir el flujo de ejecución del código basándose en condiciones.

### Bifurcaciones: if, else if, else
La estructura if permite ejecutar un bloque de código si una condición es verdadera.  

La estructura else permite ejecutar un bloque de código si la condición del if es falsa.  

Se pueden encadenar múltiples condiciones con else if.  

    if (condición) {
    // Código a ejecutar si la condición es verdadera
    } else if (otraCondición) {
    // Código a ejecutar si otraCondición es verdadera
    } else {
    // Código a ejecutar si ninguna condición es verdadera
    }

### Bifurcaciones: switch
La sentencia switch permite ejecutar diferentes bloques de código dependiendo del valor de una expresión.  

Cada caso (case) representa un valor posible de la expresión.  

La sentencia break se utiliza para salir del switch después de ejecutar un caso.  

El caso default se ejecuta si ninguno de los casos coincide con el valor de la expresión.

    switch (expresión) {
    case valor1:
        // Código a ejecutar si expresión === valor1
        break;
    case valor2:
        // Código a ejecutar si expresión === valor2
        break;
    default:
        // Código a ejecutar si no coincide ningún caso
    }

### Comparaciones
Los operadores de comparación se utilizan para comparar valores:

    == :  Igualdad débil (solo compara el valor).
    === :  Igualdad estricta (compara el valor y el tipo).
    != :  Desigualdad débil.
    !== :  Desigualdad estricta.
    > :  Mayor que.
    * :  Menor que.
    >= :  Mayor o igual que.
    <= :  Menor o igual que.

### Bucles

Los bucles permiten repetir un bloque de código varias veces .

#### for: 
Se utiliza cuando se conoce el número de iteraciones .

    for (inicialización; condición; actualización) {
    // Código a ejecutar en cada iteración
    }

**inicialización**: Se ejecuta al principio del bucle (ej., declarar una variable contador).  
**condición**: Se evalúa antes de cada iteración. El bucle se ejecuta mientras la condición sea verdadera.  
**actualización**: Se ejecuta al final de cada iteración (ej., incrementar el contador).


#### while: 
Se utiliza cuando no se conoce el número de iteraciones y se quiere repetir el bloque de código mientras una condición sea verdadera.

    while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
    }

#### do...while: 
Similar al while, pero el bloque de código se ejecuta al menos una vez, incluso si la condición es falsa desde el principio.

    do {
    // Código a ejecutar al menos una vez
    } while (condición);

### Ámbito de los bucles: 
Es importante entender cómo las variables declaradas dentro de un bucle (con var, let o const) son accesibles fuera del bucle.  

let y const tienen un ámbito de bloque, mientras que var tiene un ámbito de función.
