
class Idol{
member = ['1dol','2dol','3dol'];

    

    printMember=()=>{
        console.log(this.member);
    }
}


class Exmaple1 extends Idol{
    //constructor() is a default function method
  
        //this is the example how to reach to different value at different class
  
    ex = 'Example';
    

    printMyname1=()=>{
        console.log(this.ex);
    }


}

const example = new Exmaple1();
example.printMyname1();
example.printMember();