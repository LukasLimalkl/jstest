// Questao 2

function fibonacci(number) {
    let a = 0, b = 1, temp;
    while (b < number) {
        temp = a;
        a = b;
        b = temp + b;
    }
    if (b === number) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
}

const num = 21;
fibonacci(num);
