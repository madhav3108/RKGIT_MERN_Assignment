// Create a function Employee, having id, name, basic_Salary as arguments.

// Compute HRA, DA, TA, GS, NS.

// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.

// GS = Basic Salary + HRA + DA + TA;

// TAX DEDUCTION is 10% of GS.

// NS = GS - TAX DEDUCTION.

// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.

function salarySlip(){
    var id = prompt("Enter ID:");
    var name = prompt("Enter Name:");
    var basic_Salary = parseFloat(prompt("Enter Basic Salary:"));
    function hra(){
        return 0.3*basic_salary;
    }
    function da(){
        return 0.1*basic_salary;
    }
    function ta(){
        return 0.2*basic_salary;
    }
    function gs(){
        return basic_salary+hra()+da()+ta();
    }
    function taxDd(){
        return (0.10*gs());
    }
    function ns(){
        return gs()-taxDd();
    }
        
    console.log("E_ID:"+id);
    console.log("E_Name:"+ name);
    console.log("Basic Salary:"+basic_Salary);
    console.log("HRA:"+ hra());
    console.log("DA:"+ da());
    console.log("TA:"+ ta());
    console.log("Gross Salary:"+ gs());
    console.log("Tax Deduction:"+ taxDd());
    console.log("Net Salary:"+ ns());
    }

    salarySlip();

// E_ID:1
// E_Name:Madhav Thakur
// Basic Salary:100000
// HRA:30000
// DA:10000 
// TA:20000
// Gross Salary:160000
// Tax Deduction:16000
// Net Salary:144000
           
