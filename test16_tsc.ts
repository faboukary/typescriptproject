// E1 
enum Animals {cat, lion, dog, cow, monkey}
let c: Animals = Animals.cat;
console.log(Animals[3]); // cow 
console.log(Animals.monkey); // 4
// E2 
enum Animalss {catt = 1, lionn, dogg = 11, coww, monkeyy}
let cc: Animalss = Animalss.catt;
// console.log(Animalss[3]); // undefined
console.log(Animalss.monkeyy); // 13

