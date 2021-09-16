var arr1=[1,2,3,4];
var arr2=[4,3,2,1];
flag=0;
// for(let i of arr1){
//     for(let j of arr2){
//         if(i==j)
//         {flag++;}
//     }

// }
// console.log(flag==arr1.length & flag==arr2.length?"both are same":"not same");
arr1.sort((num1,num2)=>num1-num2)
console.log(arr1);
arr2.sort((num1,num2)=>num1-num2)
console.log(arr2);
var limit=arr1.length-1;
if(arr1 .length!=arr2.length){
    console.log("not same");
}
else{
    for(let i=0;i<=limit;i++){
        if(arr1[i]==arr2[i]){
            continue;
        }
        else{
            flag++;
        }
    }
    console.log(flag==0?"both are same":"not same");
}
