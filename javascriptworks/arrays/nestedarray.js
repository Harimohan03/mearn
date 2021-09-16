var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,22000,"qa"]
]

// employee name

// for(let employee of employees){
//     console.log(employee[1]);
// }



// designation

// for(let employee of employees){
//     console.log(employee[4]);
// }




// salar>23000

// for(let employee of employees){
//     if(employee[3]>23000)
//     console.log(employee[1]);
// }



// highest paid employee

var res=0;
for(let i of employees){
    if(i[3]>res){
        res=i;
    
    }
}
console.log(res);




// number of emp work as develop

// var flag=0;
// for(let employee of employees){
//     if(employee[4]=="developer"){
//         flag++;
//     }
    
// }
// console.log(flag);




// num of emp work qa

// var flag=0;
// for(let employee of employees){
//     if(employee[4]=="qa"){
//         flag++;
//     }
    
// }
// console.log(flag);