// 1.Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38


function GetDay() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunnday"];
    const d = new Date(); var h;
    const h1 = d.getHours();
    if (h1 < 12) {
        h = h1 + "AM";
    } else if (h1 == 12) {
        h = 12 + "pm";
    }
    else {
        h = h1 - 12 + "PM";
    }
    var m = d.getMinutes();
    var s = d.getSeconds();
    console.log("Today is :" + days[d.getDay() - 1]);
    console.log("Current time is :" + h + ":" + m + ":" + s);
}

console.log(GetDay()); 

//Today is: Saturday
//Current time is: 2AM: 2: 34