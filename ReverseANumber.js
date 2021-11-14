let reversedNum = 0;

const reverse = n => {
    for (let i = n - 1; i > 0; i--) {
        if (n > 0) {
            reversedNum = (reversedNum * 10) + (n % 10);
            n = Math.floor(n / 10);
        }
    }
    return reversedNum;
}
console.log(reverse(123));