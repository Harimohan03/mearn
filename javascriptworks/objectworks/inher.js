// single inheritence

// class parent{
//     phone(){
//         console.log("inside parent method");
//     }
// }

// class child extends parent{

// }

// var c=new child();
// c.phone();


class parent{
    m1(){
        console.log("m1");
    }
}
class subChild extends parent{
    m2(){
        console.log("m2");}
    }

class child extends subChild{
    m3(){
    console.log("m3");}

}



// var c=new child();
// c.m3();
// c.m2();
// c.m1();


var sc=new subChild();

sc.m2();
sc.m1();

