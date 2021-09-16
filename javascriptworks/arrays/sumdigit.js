var num=151,total=0;
while(num!=0){
    let digit=num%10;
    total+=digit   
    num=Math.floor(num/10);
}
console.log(total);