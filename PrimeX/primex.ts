function prime(num: number): boolean {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeX(a: number): number | undefined {
    if (a <= 0) {
        return undefined;
    }

    let count = 0;
    let angka = 2;

    while (count < a) {
        if (prime(angka)) {
            count++;
        }

        if (count < a) {
            angka++;
        }
    }

    return angka;
}

console.log(primeX(1));  // output: 2
console.log(primeX(5));  // output: 11
console.log(primeX(10)); // output: 29
console.log(primeX(-1)); // output: undefined
