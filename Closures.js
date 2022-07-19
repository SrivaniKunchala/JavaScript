//closures is function inside a function 
//inner function is accessible to outer function and need not to specially cal the inner function

class ClosuresEx {
    
     student1 = () => {
        this.stName = 'Deevena';
        this.stAge = 24;
        this.marks = () =>
        {
            this.maths = 95;
            this.physics = 92;
            this.chemistry = 94;
            this.total = this.maths + this.physics + this.chemistry;
            console.log(`Total Marks of ${this.stName} are`, this.total);
        }
        console.log(`Student1 Details...
        Student Name = ${this.stName}
        Student Age = ${this.stAge}`);
        this.marks();
     }

}
class Students extends ClosuresEx {
    student2 = () => {
        this.stName2 = 'Vani';
        this.stAge2 = 24;
        this.marks2 = () =>
        {
            this.maths = 94;
            this.physics = 91;
            this.chemistry = 96;
            this.total2 = this.maths + this.physics + this.chemistry;
            console.log(`Total Marks of ${this.stName} are`, this.total2);
        }
        console.log(`Student2 Details...
        Student Name = ${this.stName2}
        Student Age = ${this.stAge2}`);
        this.marks2();
        
    }
   
}

const obj = new Students();
obj.student1();
obj.student2();