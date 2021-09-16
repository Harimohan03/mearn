class Bank{
    accountCreate(acno,ac_type,bal){
        this.acno=acno;
        this.ac_type=ac_type;
        this.bal=bal


    }

    deposit(amount){
        this.bal+=amount;
        console.log(`Your account ${this.acno} has been credited with ${amount}.Available balance=${this.bal}`);

    }

    withdrawal(amount){
        if(this.bal>amount){
            this.bal-=amount;
            console.log(`${amount} has bee debited. Available balance is ${this.bal}`);
        }
        else{
            console.log("insufficient balance");
        }
    }
    balEnquiry(){
        console.log(`Your balance is ${this.bal}`);

    }


}

var obj=new Bank();
obj.accountCreate(10001,"savings",5000);
obj.deposit(500);
obj.withdrawal(100)
obj.balEnquiry();