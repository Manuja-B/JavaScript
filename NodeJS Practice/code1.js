var rect ={
    perimeter: (x,y) => (2*(x+y)), 
    area: (x,y) => (x*y)
}

function solveRect(l,b){
    console.log("l= "+l+"b= "+b);
    console.log("Area "+rect.area(l,b));
    console.log("Perimeter "+rect.perimeter(l,b));
}
solveRect(2,4);
solveRect(3,5);
