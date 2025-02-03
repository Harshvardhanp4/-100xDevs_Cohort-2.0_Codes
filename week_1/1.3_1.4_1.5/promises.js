function myOwnSetTimeout(duration){
    let p = new Promise((resolve)=>{
        setTimeout(resolve,5000);
    })
    return p;
}

myOwnSetTimeout(5000)
.then(()=>{
    console.log("log the first thing!");
})