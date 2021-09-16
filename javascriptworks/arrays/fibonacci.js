var num1=0,num2=1,limit=6;
for(i=1;i<=limit;i++){
    console.log(num1);
    next=num1+num2;
    num1=num2;
    num2=next;
}