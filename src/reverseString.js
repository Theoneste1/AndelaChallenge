// This is  will reverse the last two letters
const lastTwo = (str) =>
    str.toLowerCase().split("").slice(-2).reverse().join(" ");

console.log(lastTwo('Theoneste'));
