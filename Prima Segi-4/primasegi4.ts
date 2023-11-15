function primaSegi4(number: number): boolean {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrima(start: number, count: number): number[] {
    const prima: number[] = [];
    let angkaa = start;

    while (prima.length < count) {
        if (primaSegi4(angkaa)) {
            prima.push(angkaa);
        }
        angkaa++;
    }

    return prima;
}

function primaSegiempat(wide: number, high: number, start: number): void {
    let hasil = '';

    for (let i = 0; i < high; i++) {
        const barisPrima = generatePrima(start, wide);
        hasil += barisPrima.join('  ') + '\n';
        start = barisPrima[barisPrima.length - 1] + 1;
    }

    const totalSum = generatePrima(start, wide * high).reduce((sum, number) => sum + number, 0);
    hasil += totalSum;

    console.log(hasil);
}

primaSegiempat(2, 3, 13);
/*
13  17
19  23
29  31
280
*/

primaSegiempat(5, 2, 1);
/*
2  3  5  7  11
13  17  19  23  29
510
*/
