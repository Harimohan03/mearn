var employee={
    eid:1001,
    e_name:"ram",
    desig:"developer",
    salary:5000

}
// emp name
// console.log(employee.e_name);

// ck for exp is present if not add exp=1 else current exp+1
// "exp" in employee?employee.exp+=1:employee.exp=1

for(let key in employee){
console.log(employee[key]);

}