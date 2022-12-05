// direct object
var abc={
    name:"aryan",
    age:17,
    roll_no:52,
    method1:call()
}
// method of class abc
function call(){
    console.log("calling method");
}
// this is constructor method which is invoked when we use new keyword
function student(name,age,roll_no){
    this.name=name;
    this.age=age;
    this.roll_no=roll_no;
}

// object created using constructor
let aryan = new student("aryan",17,52);
// invoking method of object of class abc
aryan.method1;

console.log(aryan.age);

class demo{
     new(a,b){
     this.a=a;
    this.a-b;
     }

}

let a=new demo(10,20);