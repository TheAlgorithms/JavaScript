class Person{
    name;
    // to create a private field use # before the name
    #secret;
    constructor(name,secret){
        this.name=name;
        this.#secret=secret;
    }
}
let person= new Person("Willy Wonka","I love candies")
console.log(person,person.name,person.secret)
// > Person { name: 'Willy Wonka' } Willy Wonka undefined

// console.log(person.#secret)
// > SyntaxError: Private field '#secret' must be declared in an enclosing class
