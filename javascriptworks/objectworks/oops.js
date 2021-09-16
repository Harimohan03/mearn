class Person{
    setPerson(age,name){
        this.age=age;
        this.name=name;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}

var obj=new Person()
obj.setPerson(25,"ram");
console.log(obj.getName());