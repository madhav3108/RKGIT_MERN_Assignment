//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
//Example string : ‘learn javascript from brain mentors’
//Expected Output : ‘Learn Javascript From Brain Mentors


var str = 'learn javascript from brain mentors';
var ans = '';
var space = true;
str.toLowerCase();
for (var i = 0; i < str.length; i++) {
    if (space) {
        ans = ans + str.charAt(i).toUpperCase();
        space = false;
    } else {
        ans = ans + str.charAt(i);
    }
    if (str[i] == ' ') {
        space = true;
    }
}
console.log(ans);

//VM1482:16 Learn Javascript From Brain Mentors