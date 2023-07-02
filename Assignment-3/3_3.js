// Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army

function checkAnagram(str1,str2){
    for(var i=0;i<str1.length;i++){
        var ch=str1.charAt(i);var count=0;
        for(var j=0;j<str2.length;j++){
            if(ch===str2[i]){
                count++;
            }
        }
       
    }
     if(count===str1.length){
            console.log('It is Anagram');
        }
        else{
            console.log('It is not a Anagram');
        }
}

checkAnagram('Mary','Army');

//M257:12 It is Anagram