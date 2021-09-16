class BookLibrary{
    books={
        "randamoozham":{book_name:"randamoozham",price:470,author :"mt" ,avl_copies:100,sold_copies:100 },
        "aadujeevitham":{book_name:"aadujeevitham",price:500,author :"benyamin" ,avl_copies:150,sold_copies:145 },
        "rainrising":{book_name:"rainrising",price:500,author :"nirupama" ,avl_copies:200,sold_copies:140 },
        "half girlfriend":{book_name:"half girlfriend",price:550,author :"chetan bagat" ,avl_copies:150,sold_copies:140 }
    }

findBook(book_name){
    if(book_name in books){
        console.log("found");
    }
    else{
        console.log("book not available");
    }

}

orderBySold(){

}



}

var obj=new BookLibrary();
obj.findBook("aadujeevitham")