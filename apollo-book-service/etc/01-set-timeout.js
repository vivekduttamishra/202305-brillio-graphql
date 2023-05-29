var id = setTimeout( () =>{

	console.log(new Date().toLocaleTimeString(),'Hello World'); //after 5 seconds

}, 5000);

console.log(new Date().toLocaleTimeString(),'wait for a very special broadcast');

setTimeout( () =>{

    console.log(new Date().toLocaleTimeString(),"sorry the broadcast is cancelled");
    clearTimeout(id);

},3000);