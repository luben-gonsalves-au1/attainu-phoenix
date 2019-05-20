var prime = (num) => {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return console.log("Not prime number")
        }
    }
    return console.log("its a prime number")
}

prime(5);


var primeArray = (num) => {
    var arr = [];
    while (num > 1) {
        for (var i = 2; i < num; i++) {
            flag = 0;
            if (num % i == 0) {
                flag = 1;
                break;
            }
        }
        if (!flag) {
            arr.push(num)
        }
        num--;
    }
    return arr.reverse();
}

console.log(primeArray(35));