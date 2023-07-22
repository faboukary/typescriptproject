// E1 
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["lion"] = 1] = "lion";
    Animals[Animals["dog"] = 2] = "dog";
    Animals[Animals["cow"] = 3] = "cow";
    Animals[Animals["monkey"] = 4] = "monkey";
})(Animals || (Animals = {}));
var c = Animals.cat;
console.log(Animals[3]); // cow 
console.log(Animals.monkey); // 4
// E2 
var Animalss;
(function (Animalss) {
    Animalss[Animalss["catt"] = 1] = "catt";
    Animalss[Animalss["lionn"] = 2] = "lionn";
    Animalss[Animalss["dogg"] = 11] = "dogg";
    Animalss[Animalss["coww"] = 12] = "coww";
    Animalss[Animalss["monkeyy"] = 13] = "monkeyy";
})(Animalss || (Animalss = {}));
var cc = Animalss.catt;
// console.log(Animalss[3]); // undefined
console.log(Animalss.monkeyy); // 13
