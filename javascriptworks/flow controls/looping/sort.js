var num1=10,num2=22,num3=4;

// num1>num2 & num1>num3?l=num1:num2>num1 & num2>num3?l=num2:l=num3;
// r=l;
// num1==l?num1=0:num2==l?num2=0:num3=0;
// num1>num2 & num1>num3?m=num1:num2>num1 & num2>num3?m=num2:m=num3;
// e=m;
// num1==m?num1=0:num2==m?num2=0:num3=0;
// num1>num2 & num1>num3?n=num1:num2>num1 & num2>num3?n=num2:n=num3;
// s=n;
// console.log(r,e,s);

if(num1>num2 & num1>num3){
    if(num2>num3){
        console.log(num1,num2,num3);
    }
    else
    console.log(num1,num3,num2);

}
else if(num2>num1 &num2>num3){
    if(num1>num3){
        console.log(num2,num1,num3);
    }
    else
    console.log(num2,num3,num1);
}
else if(num3>num1 &num3>num2){
    if(num1>num2){
        console.log(num3,num1,num2);
    }
    else
    console.log(num3,num2,num1);
}
else
console.log(`equal`);