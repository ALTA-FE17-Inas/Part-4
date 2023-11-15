function fibonacci(n: number): number | undefined {
    if (n < 0) {
        return undefined;
    }

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let fibLama = 0;
    let fibBaru = 1;

    for (let i = 2; i <= n; i++) {
        const temp = fibBaru;
        fibBaru = fibLama + fibBaru;
        fibLama = temp;
    }

    return fibBaru;
}

console.log(fibonacci(0));  // output: 0
console.log(fibonacci(2));  // output: 1
console.log(fibonacci(9));  // output: 34
console.log(fibonacci(10)); // output: 55
console.log(fibonacci(12)); // output: 144
