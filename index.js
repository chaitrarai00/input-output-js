var readlineSync=require('readline-sync');
var user=readlineSync.question("Who are you? ");
console.log("Hi "+user);

var foo="check";
foo=1;
foo=true;
console.log(foo);

let foo1="check";
foo1=1;
foo1=true;
console.log(foo1);


console.log(x);
var x=10;
console.log(x);
/*
console.log(y);
let y=10;
console.log(y);
//this will not work
*/
function add( a, b){
  var sum=a+b;
  return sum;
}

var a=0;
var b=0;
var sum=0;
for(var i=1;i<20;i++){
  if(i%2===0)
    a=i;
  else
    b=i;
  sum=sum+add(a,b);
}
console.log(sum);