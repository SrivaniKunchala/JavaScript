const student1 = {
    name : "Jungkook",
    age : 25,
    marks :{
        korean : 75,
        hindi : 72
    }
}
console.log(student1.name, student1.age);
const student2 = {
    name : "Taehyung",
    age : 27,
    marks : {
        korean : 74,
        hindi : 72
    }
     
}
console.log(student2.marks.korean  );
console.log(student1,student2);

exports.Objects = student1 ;