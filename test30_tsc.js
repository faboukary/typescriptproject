var Adult = /** @class */ (function () {
    function Adult() {
    }
    Object.defineProperty(Adult.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length > 2) {
                this._name = newName;
            }
            else {
                throw new Error("Name is too short!");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adult.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge >= 18) {
                this._age = newAge;
            }
            else {
                throw new Error("Age must be over 18!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Adult;
}());
var person = new Adult();
// person._name = "Z"; // Error: Name is too short! 
// person._age = 10; // Error: Age must be over 18! 
// person._name = "Joseph";
// person._age = 38;
person.name = "Albert";
person.age = 35;
console.log("".concat(person.name, " is ").concat(person.age, " years old."));
// Joseph is 38 years old.
// Albert is 35 years old.
