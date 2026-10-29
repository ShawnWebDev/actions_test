
function toRomanLazy(num) {
    const convert = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'L' : 50,
        'XL':40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    let romanArr = [];

    for (key in convert) {
        while (num >= convert[key]) {
            romanArr.push(key)
            num -= convert[key]
        }
    } 

    return romanArr.join('')

}

console.log("num to roman - return value:", toRomanLazy(2026))
console.log("num to roman - return value:", toRomanLazy(4))
console.log("num to roman - return value:", toRomanLazy(150))
console.log("num to roman - return value:", toRomanLazy(944))