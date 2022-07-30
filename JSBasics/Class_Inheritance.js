class College {
    constructor(collegeName,departments){

    this.collegeName = collegeName;
    this.departments = departments;
    }
    displayDetails()
    {
        console.log(`Welcome to ${this.collegeName} College..`);
        console.log(`In our college we have ${this.departments} `);
    }
    

}
class Student1 extends College {
    constructor(collegeName,departments,stName,stAge,stPOY){
    super(collegeName,departments)
    this.stName = stName
    this.stAge = stAge
    this.stPOY = stPOY      //student pass out year
    }  
    displayStudent1 ()
    {
        console.log(`Hi this is ${this.stName} with ${this.departments} background
        and I'm graduated from ${this.collegeName} in ${this.stPOY} `);
        
    }

}
const obj1 = new Student1('MLRIT','CSE,ECE,IT,MECH');
const obj2 = new Student1('MLRIT','CSE','Jimin',24,2020);
console.log(obj1.displayDetails());
console.log(obj2.displayStudent1());