// Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long

function validateNumber(num){ 
    var x= prompt("Enter the phone number");
        if(x.length==10){
            console.log("Valid number");
        }else 
        { 
        console.log("Invalid number");
    }}
   
    console.log(validateNumber());


//    VM1573:4 Valid number