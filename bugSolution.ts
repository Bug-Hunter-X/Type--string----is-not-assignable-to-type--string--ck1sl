function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(", ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane User", "John User"];
console.log(greeter(user)); //This will not cause an error

let user2 = "Jane User";
console.log(greeter(user2)); //This will not cause an error