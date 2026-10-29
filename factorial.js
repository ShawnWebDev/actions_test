

function factorial_iteration(num) {
    if (num === 0 || num === 1) {
        return 1
    }

    let product = 1

    for (let i = 2; i <= num; i++) {
        product *= i;

        //console.log("curr num:", i)
        //console.log("curr product:", product)
    }

    return product;
}

//console.log("start iteration...")
//console.log("factorial_iteration 4!: ", factorial_iteration(4))



/* function factorial_recursion(num) {
    // Base case, 0 or 1, breaks recursion loop
    if (num === 0 || num === 1) {
        return 1
    }

    // Enter new function call, passing in (num - 1)
    const product = num * factorial_recursion(num - 1);

    // After recursion is broken, log from lowest -> highest
    console.log("curr num:", num)
    console.log("curr product:", product)


    return product
}

console.log("start recursion...")
console.log("factorial_recursion 4!: ", factorial_recursion(4)) */


module.exports = {factorial_iteration};
