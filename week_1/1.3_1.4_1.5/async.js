// function onDone(){
//     console.log("hi there");
// }

// setTimeout(onDone,1000);
// console.log("after settimeout");

// for(let i = 0; i<1000000000; i++ ){
    
// }
/*
your javascript thread doesnt have access to everything
immediately 

there are some tasks it needs to wait 

for eg
 1) reading a file
 2) sending a network request.
 3) a deliberate moment.
*/

//use an async to read till then complete other

// function onDone(){
//     console.log("hi there!" );

// }

// setTimeout(onDone,1000);
// console.log("AFTER SET TIMEOUT: ");


const fs = require('fs');

let a=1;
console.log(a);


fs.readFile("D:/100xDevs/week_1/1.3_1.4_1.5/a.txt", "utf-8", (err,data)=>{
    console.log("data from file is: ");
    console.log(data);
})

let ans = 0;
for(let i=0;i<100;i++){
    ans=ans+i;
}
console.log(ans);