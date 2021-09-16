for (var i = 1; i <= 4; i++) { //1 1<6 
    var str = "";
    for (var j = 4; j > i; j--) { //6 6>=1 .......0
        str += " ";
    }
    for (var k = 1; k <= i; k++) {
        if (sum == 5 || i == 4 || min == 3) {
            str += "* ";
        }
        else {
            str += "-";
        }
    }

    console.log(str);
}