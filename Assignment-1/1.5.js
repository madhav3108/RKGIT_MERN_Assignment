//WAP to find out if 1st January will be a Sunday between 2000 and 2030


function FirstSunday() {
  for (var y = 2000; y <= 2030; y++) {
    var d = new Date(y, 0, 1);
    if (d.getDay() === 0){
        console.log("The first january have number of sunday is:"+y)
}
}
}

console.log(FirstSunday());
// The first january have number of sunday is:2012
// The first january have number of sunday is:2017
// The first january have number of sunday is:2023
// The first january have number of sunday is:2006