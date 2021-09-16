for(i=1;i<=4;i++){
    let str="";
    for(j=4;j>i;j--)
    {
        str+=" ";
    }

for(k=1;k<=i;k++)
{
    if(i==4|i+k==5|k-i==3)
    {str+="* "
}
}

console.log(str);
}

