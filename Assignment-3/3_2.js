// Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.


// Output:
// "true" if the triangle is equilateral and "false" if its not.

function triangle(a , b , c , callback){
    if(a==b && b==c){
        callback(true);
    }
    else{
        callback(false);
    }
}
    function equilateralTriangle(result){
        if(result){
            console.log("Equilateral triangle");
        }
        else{
            console.log("Not Equilateral Triangle");
        }
    }
triangle(3,3,3,equilateralTriangle);
triangle(3,4,6,equilateralTriangle);
    
// Equilateral triangle
// Not Equilateral Triangle
