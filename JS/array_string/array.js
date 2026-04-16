// // Creating an array
// // array literal

// let arr=[10,20,30,40];
// console.log(arr)
// console.log(arr.length)//size or length
// console.log(arr[0]);//10
// console.log(arr[4])//undefined

// let arr2=[10,"mango",true,{"name":"raj"}]
// console.log(arr2);

// // using new keyword

// let arr3=new Array(10,20,30,40);//[10,20,30,40]
// console.log(arr3);
// let arr4=new Array(4);//[_,_,_,,_]
// console.log(arr4);

// // from function
// let value="hello world";
// let arr5=Array.from(value);
// console.log(arr5);

// let arr6=new Array(10,20,30,40)
// console.log(arr6);
// let arr7=Array.of(2);
// console.log(arr7)

let arr=[10,20,30]
// accessing values from array
console.log(arr[0]);//10
console.log(arr[3])//undefined
console.log(arr[-1])//undefined

console.log(arr.at(0))//10
console.log(arr.at(-2))//20
console.log(arr.at(4))//undefined

