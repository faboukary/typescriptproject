// E1
let a: any = "apple";
let b: any = 14;
let c: any = false;
let d: any[] = ["door", "kitchen", 13, false, null];
b = "people";
// E2
let a1: never; // Ok 
// let b1: never = false; // Error 
// let c1: never = null; // Error 
// let d1: never = "monday"; // Error 
function stuck(): never {
    while (true) {
    }
}
