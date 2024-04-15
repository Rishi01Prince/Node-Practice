
var a = async ()=>{
    console.log("Hello World");
    for(let i=0; i<5; i++){
        var b = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log(i);
                resolve();
            }, 5000);
        });
    }
}

a();