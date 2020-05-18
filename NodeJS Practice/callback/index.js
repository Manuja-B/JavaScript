var rect = require('./rectangle');

function solveRect(l,b){
    console.log("l= "+l+"b= "+b);
    rect(l,b, (err, rectangle) => {
        if(err){
            console.log("Error: "+err.message);
        }
        else{
            console.log("Area "+rectangle.area());
            console.log("Perimeter "+rectangle.perimeter());
        }
    });
    console.log("After callback");
}
solveRect(2,4);
solveRect(3,5);
