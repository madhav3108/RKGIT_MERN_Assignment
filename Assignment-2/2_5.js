// Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1

function occurence(){
    var str=prompt("enter string");
    var s="";
    var j;
    var len=str.length;
    for(var i=0;i<len;i++)
    {  if(str.charAt(i)===' ')
        continue;
       var s1="";
       var count=1;
       var posi=str.charAt(i);
       for(j=i+1;j<len;j++){
           var posj=str.charAt(j);
           if(posi===posj&&(s.indexOf(posj)===-1))
           {
               // console.log("char position called for"+str.char)
               count++;
           }
       }
       if(s.indexOf(posi)===-1){
       s+=str.charAt(i)+count;
       console.log(str.charAt(i)+count);}
    }
    
}
occurence();

// b-1
// r-2
// a-1
// i-1
// n-2
// V-1
// e-1
//  -1
// o-1
// s-1