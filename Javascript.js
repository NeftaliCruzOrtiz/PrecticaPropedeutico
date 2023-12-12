console.log("Hola Mundo");
function milliseconds(x) {
    if (isNaN(x)) {
        return "Not a Number";
    }
    return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output "Not a Number"

console.log(milliseconds(3.1416));
// Expected output: 3140
console.log(parseInt("a"));