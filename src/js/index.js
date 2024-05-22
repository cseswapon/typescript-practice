"use strict";
// build in type: number, string, boolean, void, undefine, null, never
var _a;
var id;
var userId = 1;
var firstName = "Swapon";
var lastName = "Saha";
var isActive = true;
var fullName = firstName.concat(lastName);
console.log("My Name is ".concat(fullName, ". UserId is ").concat(userId));
function display() {
    return "Swapon Saha";
}
console.log(display());
function voidType() {
    console.log("Hello kaku");
}
voidType();
/* function throwError(message:string):never {
    throw new Error(message)
}

throwError('Something went wrong'); */
// user `union` data type
function display2() {
    return 58;
}
console.log(display2());
function builder(value) {
    if (typeof value === "number") {
        console.log("".concat(value, " is a number"));
    }
    else if (typeof value === "string") {
        console.log("".concat(value, " is a string"));
    }
    else if (typeof value === "boolean") {
        console.log("".concat(value, " is a boolean"));
    }
    else {
        console.log("Something went wrong with this ".concat(value));
    }
}
builder(true);
// array
var names = ["amir", "kodu", "jodu", "hakim", ["x"]];
var userNames = ["x", "y", "z"];
var multipleType = ["1", 2];
var sortArray = names.sort();
console.log(sortArray);
// tuple
var employee = ["Mr.x", 2];
// enum  -> stor constant value, duplicate value not allow (numeric,string, heterogenous)
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["ReadData"] = 0] = "ReadData";
    UserRequest[UserRequest["DeleteData"] = 1] = "DeleteData";
    UserRequest[UserRequest["EditData"] = 2] = "EditData";
    UserRequest[UserRequest["SaveData"] = 3] = "SaveData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
var RequestData;
(function (RequestData) {
    RequestData["ReadData"] = "Please Data Request";
})(RequestData || (RequestData = {}));
var UserRequestMap = (_a = {},
    _a[UserRequest.ReadData] = "hello world",
    _a);
console.log(UserRequestMap);
var user1 = {
    name: "Swapon Saha",
    role: "admin",
    department: "account",
    employeesManaged: 10,
};
var user2;
var users;
users = {
    userId: 1,
    name: "Mr.x",
};
user2 = [];
user2.push(users);
console.log(user2);
var students = {
    name: "swapon",
    age: 10,
};
var mans = ["a", "b", "c", "c", []];
