// 15. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]

// output = 
// maxno. : 15
// minno. : -1

function Maxmin(arr){
    arr=arr.sort(function(a,b){return a-b});
    var max=arr[arr.length-1]; 
    var min=arr[0];
    console.log("Max is:"+max);
    console.log("MIn is :"+min);
}

var arr=[1,2,3,4,5];

// Max is : 5
// Min is : 1