// build in type: number, string, boolean, void, undefine, null, never

let id: any;
let userId: number = 1;
let firstName: string = "Swapon";
let lastName: string = "Saha";
let isActive: boolean = true;

let fullName: string = firstName.concat(lastName);

console.log(`My Name is ${fullName}. UserId is ${userId}`);

function display(): string {
  return "Swapon Saha";
}

console.log(display());

function voidType(): void {
  console.log("Hello kaku");
}

voidType();

/* function throwError(message:string):never {
    throw new Error(message)
}

throwError('Something went wrong'); */

// user `union` data type

function display2(): string | number {
  return 58;
}

console.log(display2());

function builder(value: string | number | boolean) {
  if (typeof value === "number") {
    console.log(`${value} is a number`);
  } else if (typeof value === "string") {
    console.log(`${value} is a string`);
  } else if (typeof value === "boolean") {
    console.log(`${value} is a boolean`);
  } else {
    console.log(`Something went wrong with this ${value}`);
  }
}

builder(true);

// array

let names: (string | string[])[] = ["amir", "kodu", "jodu", "hakim", ["x"]];
let userNames: Array<string> = ["x", "y", "z"];
let multipleType: (string | number)[] = ["1", 2];

const sortArray = names.sort();

console.log(sortArray);

// tuple

let employee: [string, number] = ["Mr.x", 2];

// enum  -> stor constant value, duplicate value not allow (numeric,string, heterogenous)

enum UserRequest {
  ReadData,
  DeleteData,
  EditData,
  SaveData,
}

console.log(UserRequest);

enum RequestData {
  ReadData = "Please Data Request",
}
const UserRequestMap = {
  [UserRequest.ReadData]: "hello world",
};
console.log(UserRequestMap);


// type 

/* type Employee = {
  name: string;
  role: string;
};

type Manager = {
  department: string;
  employeesManaged: number;
};

type multipleType2 = Employee & Manager;

const user1 = {
    name: 1,
    role: 'admin',
    department: 'account',
    employeeManaged:'kalam'
} */


let user2: object[];

let users: {
    userId: number,
    name: string,
}

users = {
    userId: 1,
    name:'Mr.x'
}

user2 = [];
user2.push(users);

console.log(user2);