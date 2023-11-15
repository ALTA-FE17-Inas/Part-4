function maxSequence(arr: any) {
    let currentSum = 0;
    let maxSum = arr[0];

    for(let i = 0; i < arr.length; i++){
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //output: 6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])); //output: 7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); //output: 7
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])); //output: 8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])); //output: 12