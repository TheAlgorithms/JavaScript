class Teacher {
    designation = "Teacher";
    collegeName = "randomUni";
    does(){
        console.log("Teaching");
    }
}
class PhysicsTeacher extends Teacher{
    mainSubject = "Physics";
}
let teacher1 = new Teacher(),
    teacher2 = new PhysicsTeacher();

console.log(teacher1)
teacher1.does()

console.log(teacher2)
teacher2.does()
/* Out put
    Teacher { designation: 'Teacher', collegeName: 'randomUni' }
    Teaching

    PhysicsTeacher {
        designation: 'Teacher',
        collegeName: 'randomUni',
        mainSubject: 'Physics'
    }
    Teaching
*/