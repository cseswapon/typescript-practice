// public, private, protected, readonly
class Users2 {
  public username;
  protected age;
  protected role;
  constructor(username: string, age: number, role: string) {
    this.username = username;
    this.age = age;
    this.role = role;
  }
  protected display(): void {
    console.log(`{name: ${this.username},age: ${this.age},role: ${this.role}}`);
  }
}

class Students2 extends Users2 {
  private id;

  constructor(id: string, username: string, age: number, role: string) {
    super(username, age, role);
    this.id = id;
  }

  protected display(): void {
    console.log(
      `{id:${this.id},name: ${this.username},age: ${this.age},role: ${this.role}}`
    );
  }

  public set userIdSet(value: string) {
    this.id = value;
  }

  public get userIdGet(): string {
    return this.id;
  }
}

const s4 = new Students2("232423asdfaasdfasdf", "swaonsaha", 34, "student");
s4.userIdSet = "0272777700005101102";

console.log(s4.userIdGet);
