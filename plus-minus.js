function plusMinus(arr) {
    const len = arr.len;
    let plus = 0;
    let minus = 0;
    let zero = 0;
    for(let i = 0; i < len; i++) {
        if(arr[i] > 0) {
            plus++;
        } else if (arr[i] < 0) {
            minus++;
        } else {
            zero++;
        }
    }
    const plusPer = (plus/len).toFixed(6);
    const MinusPer = (minus/len).toFixed(6);
    const zeroPer = (zero/len).toFixed(6);
    console.log(plusPer, MinusPer, zeroPer);
}

const numArr = [-4, 3, -9, 0, 4, 1];
plusMinus(numArr);