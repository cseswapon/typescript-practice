type User1 = { name: string; age: number };
const user: User1[] = [];
const users1: User1 = {
  name: "swapon",
  age: 10,
};

user.push(users1);

console.log(users1);

type RequestType = "GET" | "POST" | "PUT" | "DELETE";

const getRequestType: RequestType = "GET";

console.log(getRequestType);

const requestHandler = (param: RequestType): string => {
  return param;
};

requestHandler("DELETE");

function sum(a: number, b: number): number {
  return a + b;
}
