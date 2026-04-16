// let obj={
//     name:'tej',
//     email:'tej23@gmail.com',
//     phone:1245789632
// }

// // converts obj into json
// let json=JSON.stringify(obj);
// // console.log(obj);
// // console.log(json);

// // converts json into obj
// let obj2=JSON.parse(json);
// console.log(json);
// console.log(obj2);

// let jsonData={
//     name:'raj',
//     address:{
//         street:"unr street"
//     }
// }

// let arrayJsonData=[
//     {},{},{}
// ]

// async function fetchData(){
//     let res=await fetch('https://jsonplaceholder.typicode.com/users/1')
//     // console.log(res);
//     let user=await res.json();
//     console.log(user);
//     console.log(user.name);
//     console.log(user['username']);

//     // re-initialize
//     user.name='new Name';
//     console.log(user.name);
    
//     // delete
//     console.log(user.email);
//     delete user.email;
//     console.log(user.email);

//     async function fetchData(){

//     }
    // fetchData();

    // let obj={
    //     "name":"Gauri",
    //     "email":"gauri34@gmail.com",
    //     "phone":124589637
    // }
    // console.log(obj);
    // // destructing the obje
    // let{name,email}=obj;
    // console.log(name);
    // console.log(email);
    // // destructing and remaing
    // let{name:username,email:useremail}=obj;
    // console.log(username);
    // // add new values
    // let{address="banglore"}=obj;
    // console.log(address);

    // console.log(obj);


   // let res2=await fetch('https://jsonplaceholder.typicode.com/users/1')
    // // console.log(res);
    // let user2=await res2.json();
    // console.log(user2);

    // let combine={...user,...user2}
    // let combine=Object.assign(user,user2)
    // console.log('combined data',combine)

    // let obj1={
    //     'Fristname':'radha'
    // }

    // let obj2={
            // 'FristName':'Gauri'
    //     'Lastname': 'Shinde'
    // }

    // // let combine={...obj1,...obj2};
    // let combine=Object.assign(obj1,obj2);
    // console.log(combine);
// }
// fetchData();

async function fetchData(){
    let res=await fetch('https://jsonplaceholder.typicode.com/users/1')
    let user=await res.json()
    console.log(user)
    // forloop

    // printing only keys
    for(let key in user){
        console.log(key);
    }

    // printing only values
//     for (const key in user){
//         console.log(user[key]);
//     }

//     // printing key-value pairs

//     for (const key in user){
//         console.log(key,"--",user[key]);
//     }

// let res1=Object.keys(user);
// console.log(res1);


// for each function
// iterating keys using 
Object.keys(user).forEach(
    (key)=>{
        console.log(key);
    }
)
// iterating values
Object.values(user).forEach(
    (values)=>{
        console.log(values);
    }
)
// iterating key-value pair
Object.entries(user).forEach(
    (pair)=>{
        console.log(pair);
    }
)

};
fetchData()