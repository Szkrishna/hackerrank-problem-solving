function timeConversion(s) {
    const timeFregment = s.split(":");
    let newTime;
    let newHours;
    if(timeFregment[2].includes('PM')) {
        if (parseInt(timeFregment[0]) == 12) {
            newHours = parseInt(timeFregment[0]);
        } else {
            newHours = 12+timeFregment[0];
        }
    } else {
        if (parseInt(timeFregment[0]) == 12) {
            newHours = '00';
        } else {
            newHours = timeFregment[0];
        }
    }
    newTime = `${newHours}:${timeFregment[1]}:${timeFregment[2][0]}${timeFregment[2][1]}`
    return newTime;
}

const time = '12:45:54PM';
const result = timeConversion(time);
console.log(result);