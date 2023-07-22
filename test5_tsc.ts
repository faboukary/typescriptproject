function perimeterTriangle(a: number, b: number, c: number) {
    console.log(`Perimeter of the triangle is: ${a + b + c}`);
}
// perimeterTriangle(20, 30, "Potato");
// Error: Argument of type string not assignable to type number. 
// perimeterTriangle("Potato", 10);
// Error: Expected three arguments but got 2. 
// perimeterTriangle();
// Error: Expected three arguments but got 0. 
perimeterTriangle(20, 30, 50);
// Perimeter of the triangle is 100.

