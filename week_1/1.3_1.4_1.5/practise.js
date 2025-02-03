/*
create a fn that logs something after 1s
and waits for 2 s and logs another thing..
*/
function myOwnSetTimeout(fn,duration){
    setTimeout(fn,duration);
}

myOwnSetTimeout(()=>{
    console.log("log the first thing.");

    myOwnSetTimeout(()=>{
        console.log("log the second thing");
    },2000)
},1000)