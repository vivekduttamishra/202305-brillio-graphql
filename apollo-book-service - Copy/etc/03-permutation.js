function factorial( x ){

    return new Promise((resolve,reject) =>{

        

        let fx=1;

        var iid= setInterval(()=>{


            if(typeof x !== 'number'){
                clearInterval(iid);
                reject(new Error(`Invalid Number "${x}"`));
            } else{

               
                fx*=x;
                x--;
                if(x===0){
                    clearInterval(iid);
                    resolve(fx);
                }
            }


        },1000);

    });
}

function testFactorial(x){

    var start= new Date();
    
    factorial(x)
        .then(fx =>{
                var end=new Date();
                console.log(`${x}! = ${fx}\t time taken is ${end.getTime()-start.getTime()}`);
            })
        .catch((error)=>console.log('error',error.message));

    console.log(`computing factorial for ${x}`);
}

testFactorial(7);

testFactorial("Hi");

testFactorial(4);







