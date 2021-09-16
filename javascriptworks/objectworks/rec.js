var pattern="ABABC"
var word_count={}
// firsat recursive character
for(let char of pattern){
    if(!char in word_count){
        word_count[char]=1
    }
    else{
        console.log(char);
        break;
    }
}