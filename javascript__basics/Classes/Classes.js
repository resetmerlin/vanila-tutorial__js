
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
// person.printGender(); //different class... so need to use super()

class Idol{
    constructor(){
        this.member = ['1dol','2dol','3dol'];

    }

    printMember(){
        console.log(this.member);
    }
}


class Exmaple1 extends Idol{
    //constructor() is a default function method
    constructor(){
        //this is the example how to reach to different value at different class
        super();
        this.ex = 'Example';
    }

    printMyname1(){
        console.log(this.ex);
    }


}

const example = new Exmaple1();
example.printMyname1();
example.printMember();