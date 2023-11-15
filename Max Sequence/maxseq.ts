function maxSequence(arr: any) {
    if (arr.length === 0) {
        return 0;
    }

    let maksAngka = 0;
    let tambahNilai = 0;

    for (let i = 0; i < arr.length; i++) {
        if (tambahNilai <= 0) {
            tambahNilai = arr[i];
        } else {
            tambahNilai += arr[i];
        }

        if (tambahNilai > maksAngka) {
            maksAngka = tambahNilai;
        }
    }

    return maksAngka > 0 ? maksAngka : 0;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //output: 6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])); //output: 7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); //output: 7
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])); //output: 8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])); //output: 12