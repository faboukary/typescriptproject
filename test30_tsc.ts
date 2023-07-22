class Adult {
    private _name: string;
    private _age: number;
    get name() {
        return this._name;
    }
    set name(newName: string) {
        if(newName.length > 2) {
            this._name = newName;
        } else {
            throw new Error("Name is too short!");
        }
    }
    get age() {
        return this._age;
    }
    set age(newAge: number) {
        if(newAge >= 18) {
            this._age = newAge;
        } else {
            throw new Error("Age must be over 18!");
        }
    }
}
let person = new Adult();
// person._name = "Z"; // Error: Name is too short! 
// person._age = 10; // Error: Age must be over 18! 
// person._name = "Joseph";
// person._age = 38;
person.name = "Albert";
person.age = 35;
console.log(`${person.name} is ${person.age} years old.`);
// Joseph is 38 years old.
// Albert is 35 years old.

