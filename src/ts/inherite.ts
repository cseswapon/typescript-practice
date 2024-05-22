class Users {
  username;
  age;
  role;
  constructor(username: string, age: number, role: string) {
    this.username = username;
    this.age = age;
    this.role = role;
  }
  display(): void {
    console.log(`{name: ${this.username},age: ${this.age},role: ${this.role}}`);
  }
}

export class Students extends Users {
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

// const u1 = new Users("Swapon Saha", 25, "admin");
// u1.display();

/* const s1 = new Students("232423asdfaasdfasdf", "swaonsaha", 34, "student");
console.log(s1);
 */