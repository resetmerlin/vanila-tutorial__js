
class Human{
    constructor(){
        this.gender = 'male';
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person{
    //constructor() is a default function method
    constructor(){
        this.name = 'Max';
    }

    printMyname(){
        console.log(this.name);
    }


}


const person = new Person();
person.printMyname();