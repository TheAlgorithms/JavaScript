// old way of creating classes
function Person(first_name,last_name,birthYear){
    this.first_name=first_name;
    this.last_name=last_name;
    this.birthYear=birthYear;
    this.getAge=function(){
        return (new Date()).getFullYear()-this.birthYear;
    }
}

// javascript Es6 version intrduced classes
class es6_Person{

    first_name;
    last_name;
    birthYear;
    
    constructor(first_name,last_name,birthYear){
        this.first_name=first_name;
        this.last_name=last_name;
        this.birthYear=birthYear;
    }
    getAge(){
        return (new Date()).getFullYear()-this.birthYear;
    }
}

let person1 = new Person("Jack","Sparrow",1700),
    person2 = new es6_Person("Johnny","Depp",1963);
console.log(person1,"\nAge:",person1.getAge())
console.log(person2,"\nAge:",person2.getAge())
/* Output:
    Person {
    first_name: 'Jack',
    last_name: 'Sparrow',
    birthYear: 1700,
    getAge: [Function]
    }
    Age: 320
    es6_Person { first_name: 'Johnny', last_name: 'Depp', birthYear: 1963 } 
    Age: 57
*/