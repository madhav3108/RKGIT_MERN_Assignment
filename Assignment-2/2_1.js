// Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1


function sum(){
    var num = 2914;const numString=num.toString(); var evensum=0; var oddsum=0;
    for(i=0;i<numString.length;i++){
        if( (i+1)%2===0){
            	evensum=evensum+parseInt(numString[i]);
	}
	else{
		oddsum=oddsum+parseInt(numString[i]);
	}}
        console.log('Even digit sum :'+evensum);
        console.log('Odd digit sum:'+oddsum);
}

console.log(sum());

// VM1501:10 Even digit sum :13
// VM1501:11 Odd digit sum:3