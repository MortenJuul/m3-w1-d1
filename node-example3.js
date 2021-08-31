const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(l, w){
    if(l<=0 || w<=0){
        console.log(`Rectangle must be greater than zero. Values: ${l}, ${w}`);
    } else{
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectanlge: ${rect.perimeter(l,w)}`);
    }
}

solveRect(4, -1);