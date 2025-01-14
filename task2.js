function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function sumFirstFivePrimes() {
    const primes = [];
    let num = 1;

    while (primes.length < 5) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes.reduce((acc, curr) => acc + curr, 0);
}

document.writeln(sumFirstFivePrimes());
