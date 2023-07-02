// 1. Find Occurance of a target value in given array;
// arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
// target = 19;

var arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
undefined
arr.filter(ele=>ele==19);
(3) [19, 19, 19]

//---------------------------------------------------------------------------------------------------

// 2 . Reverse a given string using reverse() method 
// input = "BrainMentors"
// output = "srotnemniarB"

var input = "BrainMentors";
console.log(input.split("").reverse().join(""));

srotneMniarB

//---------------------------------------------------------------------------------------------------

// 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"

// output: count = 4

function count(){
    var str = "brainmentors";
    var count=str.split("").filter(e=> e=='a'||e=='e'||e=='i'||e=='o'||e=='u');
    console.log(count.length);
}

count();
4

//---------------------------------------------------------------------------------------------------

// 4. Write a function to find the sum of all elements in an array.
// ex:- arr = [1,2,3,4,5];

// output = 15;

arr.reduce((acc,e)=>(acc+e));
15

//---------------------------------------------------------------------------------------------------

// 5-Write a function to reverse the order of elements in an array.
// don't Use reverse() Method 
// ex:- 
// var arr = ['a','b','c','d','e','f']
// output = ['f','e','d','c','b','a']

function rev(arr){
    console.log(arr.sort((a,b)=> b.localeCompare(a)));
}
var arr = ['a','b','c','d','e','f'];
rev(arr);

(6)['f', 'e', 'd', 'c', 'b', 'a']

//---------------------------------------------------------------------------------------------------

// 6. Write a function to remove a specific element from an array.

// 	arr = [1,2,3,4,5];
// 	remove = 3

// 	output :- [1,2,4,5]

arr = [1,2,3,4,5];
arr1.filter(e=>e!=3);

(4) [1, 2, 4, 5]

//------------------------------------------------------------------------------------------------------

// 7- Write a function to find the second largest number in an array.

// ex:- 
// var arr = [12,4,6,9,2,15,3,9];
// output second largest : 12

function  largest(arr){
    arr.sort(function(a,b){
        return b-a;
    });
    return arr[1];
}
var arr = [12,4,6,9,2,15,3,9];
var secondLargest=largest(arr);
    
console.log(secondLargest);
12

//------------------------------------------------------------------------------------------------------

// 8.Write a function to rotate an array by a given number of steps to the right.

// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [5,4,1,2,3]



//------------------------------------------------------------------------------------------------------

// 9-Write a function to find the intersection of two arrays (common elements between the two arrays).

// ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// output = [1,4,7]

var arr1 = [2,4,1,7,4,2];
var arr2 = [5,1,4,7,3,1];

arr1.filter(x=>arr2.indexOf(x)!==-1);
(4) [4, 1, 7, 4]

//------------------------------------------------------------------------------------------------------

// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// ex:- 
// arr = [1,2,5,2,5,1,6,7,7]
// output:- [1,2,5,6,7]

var arr = [1,2,5,2,5,1,6,7,7];
function removeDuplicate(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
} 

console.log(removeDuplicate(arr));
 (5) [1, 2, 5, 6, 7]













