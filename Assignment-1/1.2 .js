//2.Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function GETDATE(){
  const d = new Date();
  var m=d.getMonth();
  var y=d.getMonth();
  var date=d.getDate();
  const today=`$\{m\} / $\{date\} / $\{y\} , $\{m\} - $\{date\} - $\{y\} `; console.log(today);}

console.log(GETDATE());
      6 / 1 / 6      ,           6 - 1 - 6 
}
