//function declaration :
// function f1(){
//     console.log("Hello world")
// }
// f1();//calling a function ---function caller

// function f2(name){//Argumented/parameterized function
//     console.log(`my name is ${name}`);
// }
// f2(); //my name is undefined
// f2("gauri");

// //function expression:
// let f1=function(){//f1 is function name
//     console.log("Function expression");
// }
// f1();

// //arrow function 
// let f3=()=>{
//     console.log("arrow function")
// }
// f3();

// //Anonymous Function : 
// // ()=>{
// //     console.log("Anonymous function ");
// // }

// setTimeout(() => {
//     console.log("Anonymous function");
// },timeout);

//call back functions
// function issuccess(){
//     console.log("authentication sucess");
// }
// function isfailure(){
//     console.log("login failed")
// }
// function isAuthentication(username,password,success,failure){
//     if(username=='user' && password=='user123'){
//         success();

//     }
//     else{
//         failure();
//     }
// }
// isAuthentication('user','user123',issuccess,isfailure)

//constructor function
// function Student(name,email,phone,rollNum){
//     this.name=name;
//     this.email=email;
//     this.phone=phone;
//     this.rollnumber=rollNum;
// }
// let s1=new Student('gauri','gauri123@gmail.com',652323,101);
// let s2=new Student('Sakshi','sakshi123@gmail.com',434567,102);
// console.log(s1);
// console.log(s2);

// //ExceLR
// function* excelrGenerator(){
//     let value=1;
//     while(value<=50){
//         yield`ExcelR_00${value}`
//         value++;
//     }
// }
// let num=1;
// while(num<=50){

// }


// function f1(){
//     console.log('hello world')
// }
// f1();//function caller
// // console.log(f1());

// function f2(){
//     return 'function returns value'
    
// }
// f2();//no output

// let result=f2();
// console.log(result);
// //higher order function

// higher order function
function calculator(a,b,operation){
    return operation(a,b)

}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(calculator(10,20,add));//30
console.log(calculator(10,20,sub));//10
