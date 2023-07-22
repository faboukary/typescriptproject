// E1
var a = "apple";
var b = 14;
var c = false;
var d = ["door", "kitchen", 13, false, null];
b = "people";
// E2
var a1; // Ok 
// let b1: never = false; // Error 
// let c1: never = null; // Error 
// let d1: never = "monday"; // Error 
function stuck() {
    while (true) {
    }
}
