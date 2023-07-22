// E1
// With strictNullChecks set to false 
var a = [1, 12, 93, 5];
var b = ["a", "apricot", "mango"];
// let c: number[] = [1, "apple", "potato"]; // Error 
var d = [null, undefined, 10, 15];
var e = ["pie", null, ""];
// With strictNullChecks set to true 
var a1 = [1, 12, 93, 5];
var b1 = ["a", "apricot", "mango"];
// let c1: number[] = [1, "apple", "potato"]; // Error 
// let d1: Array<number> = [null, undefined, 10, 15]; // Error 
// let e1: Array<string> = ["pie", null, ""]; // Error
// E2
var a2 = [11, "monday"];
// let b2: [number, string] = ["monday", 11]; // Error 
// let c2: [number, string] = ["a", "monkey"]; // Error 
// let d2: [number, string] = [105, "owl", 129, 45, "cat"];
// let e2: [number, string] = [13, "bat", "spiderman", 2];
e[13] = "elephant";
// e[15] = false; // Error
