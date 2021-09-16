var num1=24,num2=18;
arr1=[];
arr2=[];
for(let i=1;i<=num1;i++){
    if(num1%i==0){
        arr1=i;
    }

    for(let j=1;j<=num2;j++){
     if(num2%j==0){
        arr2=j;
        if(arr1==arr2){
        gcd=arr1;
        }
     }
}
}
console.log(gcd);