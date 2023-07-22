// With strictNullChecks set to true
// let a: number = undefined; // Error
// let b: number = null; // Error
let c: number = 3;
let d: number = 0b111001; // Binary
let e: number = 0o436; // Octal
let f: number = 0xadf0d; // Hexadecimal
// let g: number = "cat"; // Error
// With strictNullChecks set to false
let a1: number = undefined; // Ok
let b1: number = null; // Ok
let c1: number = 3;
let d1: number = 0b111001; // Binary
let e1: number = 0o436; // Octal
let f1: number = 0xadf0d; // Hexadecimal
// let g1: number = "cat"; // Error
