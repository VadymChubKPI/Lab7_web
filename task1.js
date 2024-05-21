function checkNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return "";
    } else {
        if (num % 2 === 0) {
            return "Число парне";
        } else {
            return "Число не парне";
        }
    }
}

document.getElementById("Task1-result-1").innerHTML=(checkNumber(5));
document.getElementById("Task1-result-2").innerHTML=(checkNumber(10));
document.getElementById("Task1-result-3").innerHTML=(checkNumber("abc"));
