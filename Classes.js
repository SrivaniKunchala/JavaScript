class Student1
{
  stName = "Jungkook";
  stAge = 25;
  cgpa = 9.5;

  st1details()
  {
    console.log("Student Name : ", this.stName);
    console.log("Student Age : ", this.stAge);
    console.log("Student CGPA : ", this.cgpa);
  }
 
}

class student2
{
    stName = "Taehyung";
    stAge = 28;
    cgpa = 8.2;
     st2details()
   {
    console.log("Student Name : ", this.stName);
    console.log("Student Age : ", this.stAge);
    console.log("Student CGPA : ", this.cgpa);
    
   }
}
const obj1 = new Student1();
const obj2 = new student2();
console.log(obj1.st1details());
console.log(obj2.st2details());

exports.Student1 = Student1.st1details;