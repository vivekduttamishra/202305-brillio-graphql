
var count=10;

var id= setInterval(()=>{
    console.log(count);
    count--;
},1000);

setTimeout(()=>{
    clearInterval(id);
},(count+1)*1000);