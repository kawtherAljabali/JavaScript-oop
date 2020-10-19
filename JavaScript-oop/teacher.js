
class Teacher extends Student {
    constructor(Salary ,subjects=[]){
        this.Salary=Salary;
        this.subjects = subjects=[];
        super(id,Name,Email,mobile_number);

    }
}

let teacher = new Student(800,'[English,Arabic,Math,science]',123443,'sara','sara@orange.com',0777777777);
console.log(teacher);