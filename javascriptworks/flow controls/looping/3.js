var num1=23,num2=43,num3=22;

// num1>n2 & num1>num3?l=num1:num2>num1 & num2>num3?l=num2:l=num3;
// console.log(l);
// num1==l?num1=0:num2==l?num2=0:num3=0;
// num1>num2 & num1>num3?s=num1:num2>num1 & num2>num3?s=num2:s=num3;
// console.log(s);


var res=num1>num2 & num1>num3? num2>num3?num2:num3:num2>num1 & num2>num3?num1>num3?num1:num3: num3>num1& num3>num2?num2>num1?num2:num1:"equal";
console.log(res); 