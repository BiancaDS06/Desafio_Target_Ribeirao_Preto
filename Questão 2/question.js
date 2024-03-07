function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;

    while (b <= number) {
        if (b === number) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

// Você pode alterar o número a ser verificado aqui
const numeroInformado = 21;

if (isFibonacciNumber(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
