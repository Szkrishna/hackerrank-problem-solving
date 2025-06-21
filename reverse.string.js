function reverseString(s) {
    let temp = '';
    for(let i = s.length - 1; i >= 0; i--) {
        temp = temp + s[i];
    }
    return temp;
}

const str = "abcde";
console.log(reverseString(str));