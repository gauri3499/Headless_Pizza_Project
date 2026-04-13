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
function issuccess(){
    console.log("authentication sucess");
}
function isfailure(){
    console.log("login failed")
}
function isAuthentication(username,password,success,failure){
    if(username=='user' && password=='user123'){
        success();

    }
    else{
        failure();
    }
}
isAuthentication('user','user123',issuccess,isfailure)