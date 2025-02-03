// function square(n){
//     return n*n;

// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfSquares(a,b){
//     let square1= square(a);
//     let square2= square(b);
//     return square1+square2;
// }

// function sumOfCubes(a,b){
//     let cube1 =cube(a);
//     let cube2 =cube(b);
//     return cube1+cube2;
// }

// let ans = sumOfSquares(1,2);
// console.log(ans);

// let ans2= sumOfCubes(1,2);
// console.log(ans2);


// above was a dry approach dont repeat yourself..

function square(n){
    return n*n;

}

function cube(n){
    return n*n*n;
}

function sumOfAnything(a,b,fn){
    let no1= fn(a);
    let no2= fn(b);
    return no1+no2;
}

let ans = sumOfAnything(1,2,cube);
console.log(ans);