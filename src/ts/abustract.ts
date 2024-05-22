abstract class Users1 {
  username;
  age;
  role;
  constructor(username: string, age: number, role: string) {
    this.username = username;
    this.age = age;
    this.role = role;
  }
    abstract display(): void;
}

class Students1 extends Users1 {
  id;
  constructor(id: string, username: string, age: number, role: string) {
    super(username, age, role);
    this.id = id;
  }
  display(): void {
    console.log(
      `{id:${this.id},name: ${this.username},age: ${this.age},role: ${this.role}}`
    );
  }
}

const s3 = new Students("232423asdfaasdfasdf", "swaonsaha", 34, "student");
console.log(s1);
