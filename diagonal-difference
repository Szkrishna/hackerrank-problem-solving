function diagonalDifference(arr) {
    let d1 = 0;
    let d2 = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        d1 += arr[i][i];             // Primary diagonal
        d2 += arr[i][n - i - 1];     // Secondary diagonal
    }

    return Math.abs(d1 - d2);
}

let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log(diagonalDifference(arr));