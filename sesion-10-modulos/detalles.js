function factorial(a) {
    // factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 1; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

const fact = factorial(10)
console.log(fact)