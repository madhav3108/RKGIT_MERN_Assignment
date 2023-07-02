// Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
//     3==multiply, 4==divide ).Don`t use switch statement or if else statements
     
//     1.add,
//     2.subtract,
//     3.multiply,
//     4.divide 
//  
//write the calc function for all the operations

function Calc(){
   
    var add=function(x,y){
        return x+y;
    }
    var sub=function(x,y){
        return x-y;
    }
    var mul=function(x,y){
        return x*y;
    }
    var div = function(x,y){
        return x/y;
    }
    return [add,sub,mul,div];
}
 var x=parseInt(prompt("Enter first number"));
    var y=parseInt(prompt("Enter second number"));
    var z=parseInt(prompt("Enter the operation"));
Calc()[z-1](x,y);

console.log(Calc());

