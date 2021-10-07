fetch("https://wttr.in/Detroit?format=j1")
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})