class parent{
    phone(){
        console.log("iqoo z3");
    }
}

class child extends parent{
    phone(){
        super.phone()
        console.log("iphone");
    }

}

var c=new child();
c.phone();

// super for calling parent method
