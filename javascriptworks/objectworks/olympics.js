var olympics=[
    {country:"us",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"australia",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},
]

// county name

// for(let key in olympics){
// console.log(key.country);
// }

// olympics.map(nation=>nation. country).forEach(c_name=>console.log(c_name))

// country with most gold medal
// var max_gold=olympics.reduce((nation1,nation2)=>nation1["gold"]>nation2["gold"]?nation1:nation2)
// console.log(max_gold);

// country with most medal
// var max_medal=olympics.reduce((nation1,nation2)=>nation1["total"]>nation2["total"]?nation1:nation2)
// console.log(max_medal);

// sortcountries based on gold
// var sort_gold=olympics.sort((nation1,nation2)=>nation1.gold-nation2.gold)
// console.log(sort_gold);

// sort by total
// var sort_total=olympics.sort((nation1,nation2)=>nation1.total-nation2.total)
// console.log(sort_total);

// silver>10
// var silver=olympics.filter((nation)=>nation.silver>10)
// console.log(silver);

// gold=0
// var gold=olympics.filter((nation)=>nation.gold==0)
// console.log(gold);

// gold>20

// pakistan in 
var present=olympics.some((nation)=>nation.country=="pakistan")
console.log(present);
