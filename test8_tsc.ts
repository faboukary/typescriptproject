
// With strictNullChecks set to true 
let a1: null = null; // Ok 
// let b1: undefined = null; // Error 
let c1: number = null; // Error 
// let d1: void = null; // Error 
// With strictNullChecks set to false 
let a2: null = null; // Ok 
let b2: undefined = null; // Ok 
let c2: number = null; // Ok 
let d2: void = null; // Ok

