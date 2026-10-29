
function bottlesOfBeer(n) {

    for (let i = n; i > 0; i--) {
        if (i > 1) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
        } else {
            console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
        }


        if (i - 1 > 1 || i - 1 === 0) {
            console.log(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
        } else {
            console.log(`Take one down and pass it around, ${i - 1} bottle of beer on the wall.`);
        }
        
    }

    console.log('No more bottles of beer on the wall, no more bottles of beer.');
    console.log(`Go to the store and buy some more, ${n} bottles of beer on the wall.`);
}
