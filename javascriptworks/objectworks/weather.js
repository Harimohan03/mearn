var weather=[
    {dist_name:"tsr",temp:25},
    {dist_name:"tvm",temp:26},
    {dist_name:"ekm",temp:29},
    {dist_name:"pkd",temp:30},
    {dist_name:"idk",temp:15},
    {dist_name:"mpm",temp:29},
    {dist_name:"tsr",temp:27},
    {dist_name:"tvm",temp:23},
    {dist_name:"ekm",temp:31},
    {dist_name:"pkd",temp:27},
    {dist_name:"idk",temp:17},
    {dist_name:"mpm",temp:25},
]
var max_weather={}
for(let data of weather){
    let district=data.dist_name;
    let current_temp=data.temp;
    
    if(!(district in max_weather)){
        max_weather[district]=current_temp;
    }
    else{
        let old_temp=max_weather[district];
        if(old_temp<current_temp){
            max_weather[district]=current_temp;
        }
    }
}


console.log(max_weather);

Object.entries(max_weather).sort((o1,o2)=>o1[1]-o2[1]).forEach(data=>console.log(data))

// weather.map(data=>data.dist_name in max_weather?data.temp<max_weather[data.dist_name]?max_weather[data.dist_name]=data.temp:max_weather[data.dist_name]:max_weather[data.dist_name]=data.temp)
// console.log(max_weather);