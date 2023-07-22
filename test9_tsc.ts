// With strictNullChecks set to true 
let a: undefined = undefined; // Ok 
let b: undefined = null; // Error 
let c: number = undefined; // Error 
let d: void = undefined; // Ok 
// With strictNullChecks set to false 
let a1: undefined = undefined; // Ok 
let b1: undefined = null; // Ok 
let c1: number = undefined; // Ok 
let d1: void = undefined; // Ok
