function birthdayCakeCandles(candles) {
    let tallest = -1;
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if(candles[i] > tallest) {
            tallest =  candles[i];
        }
    }
    for (let i = 0; i < candles.length; i++) {
        if(candles[i] == tallest) {
            count++;
        }
    }
    console.log(count);
}

const nums = [1, 5, 4, 3, 2, 5];
birthdayCakeCandles(nums);