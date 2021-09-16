class calculation{
    add(){
        console.log("insde no aarg method");
    }
    add(num1){
        console.log("inside single arg method");
    }
    add(num1,num2){
        console.log("inside 2 arg method");
    }
}

var cal=new calculation();
cal.add();
cal.add(2);
cal.add(1,2);
// only recently imolemented will be invoked