function upper(parts, ...args){

    console.log('parts',parts);
    console.log('args',args);
    
    
    var str="";
    var x=0;
    for(var part of parts){
        var arg=args[x] ||"";
        str+=`${part}${arg.toString().toUpperCase()}`;
        x++;
    }

    return str;
}


var title="The Accursed God";
var author="Vivek Dutta Mishra";

var str= upper`The book ${title} is written by ${author}`;

console.log('str',str);

