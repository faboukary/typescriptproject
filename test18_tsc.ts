// E1 
let elemWidth: number|string = 10; // Ok 
elemWidth = "50%"; // Ok 
// elemWidth = [12, 30]; // Error 
let elemPadding: number|number[] = 20; // Ok 
elemPadding = [5, 10, 5, 20]; // Ok 
// elemPadding = [5, "10", 15, 20]; // Error
// E2

