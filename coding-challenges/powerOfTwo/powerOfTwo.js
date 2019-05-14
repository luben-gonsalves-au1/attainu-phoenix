var isPowerOfTwo = (num) => {
    while (num > 1) {
        if (num % 2 == 1) return false;
        else {
            num = num / 2;
        }
    }
    return true;
}

console.log(isPowerOfTwo(32));