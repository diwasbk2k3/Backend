var message = "Hello";
var message2 = "TypeScript";
console.log(message, message2);
// message = 1; //auto
// message2 = true // error - type enforced
// Primitive types
var booleanVar = true;
var numberVar = 42;
var stringVar = "TypeScript";
var nullVar = null;
var undefinedVar = Symbol("unique");
// any and unknown types
var anyVar = "10";
anyVar = anyVar + 1; // no error
var unknownVar = "10";
// uknownVar = unknownVar + 1 // error
// any type can be used for any operation
// array/tuples
var scores = [90, 80, 70];
var userData = ["Alice", 30]; //fixed legth and types
// userData[0] = 1 //error
console.log(scores, userData);
// Union
var age = 25; // can be either
console.log(age);
age = "Twenty";
console.log(age);
// age = false //error
// Function with types
function add(num1, num2) {
    var sum = num1 + num2;
    return "Sum is ".concat(sum, ".");
}
var result = add(10, 20);
console.log(result);
var greet = function (name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello ".concat(name));
};
greet(); // name optional
greet("Bob");
// greet(123) // error
// Object types -- Defination and Structure
// 1. Object Literals
var person;
person = { name: "Charlie", age: 20 };
console.log(person.name);
var product1 = { id: 1, name: "Laptop", price: 999.0 };
console.log(product1);
var student1 = { id: 101, name: "Diwas" };
console.log(student1);
// Generics
// Datatype injection at runtime
function identity(arg) {
    return arg;
}
var output1 = identity("Hello Generics");
var output2 = identity(12345);
console.log(output1, output2);
// differs from any as it preserves type information
// Enum: named constants
var Direction;
(function (Direction) {
    Direction[Direction["ADMIN"] = 0] = "ADMIN";
    Direction[Direction["USER"] = 1] = "USER";
    Direction[Direction["GUEST"] = 2] = "GUEST";
})(Direction || (Direction = {}));
var userRole = Direction.USER;
console.log(userRole);
console.log(Direction[userRole]); //USER
// Compare usecase
console.log(userRole === Direction.USER); // exact comparison / single source
var usrRole = "USER";
console.log(usrRole == "User"); // Inconsistent prone to typo and mistake
var user1 = { id: 1, name: 'Eve', role: Direction.ADMIN };
var user2 = { id: 2 }; // all properties optional
console.log(user2);
var user3 = { id: 3, name: "Frank", role: Direction.GUEST };
// user3.name = "New Name" //error - readonly
console.log(user3);
console.log("End of File");
