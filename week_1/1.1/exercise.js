// javascript countdown from 30 to 0

// let count = 30;

// let timer = setInterval(function() {
//     console.log(count);
//     count = count - 1;

//     if (count < 0) {
//         clearInterval(timer);
//     }
// }, 1000);




// time delay between calling setTimeout and when the function executes


// function measureDelay() {
//     let start = Date.now(); // Record start time

//     setTimeout(function() {
//         let end = Date.now(); // Record end time
//         console.log("Delay:", end - start, "ms");
//     }, 1000); // 1 second timeout
// }

// measureDelay();


// hh mm ss


function showTime() {
    let now = new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();

    console.log(hh + ":" + mm + ":" + ss);
}

setInterval(showTime, 1000);
