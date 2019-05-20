var prime = (num) => {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return console.log("Not prime number")
        }
    }
    return console.log("its a prime number")
}

prime(1);