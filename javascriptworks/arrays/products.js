var product=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
    
]


// pdt name
// console.log(product.map(pdt=>pdt[1]));


// available pdt name
// console.log(product.filter(pdt=>pdt[3]!=0).map(pdt=>pdt[1]));


// out of stock pdts
// console.log(product.filter(pdt=>pdt[3]==0).map(pdt=>pdt[1]));

// pdt price>250
// console.log(product.filter(pdt=>pdt[2]>250).map(pdt=>pdt[1]));

// low cost pdt
// console.log(product.reduce((pdt1,pdt2)=>pdt1[2]<pdt2[2]?pdt1:pdt2));
// high cost
// console.log(product.reduce((pdt1,pdt2)=>pdt1[2]>pdt2[2]?pdt1:pdt2));

// highest stock
// console.log(product.reduce((pdt1,pdt2)=>pdt1[3]>pdt2[3]?pdt1:pdt2));

// is there item avail under 200
// console.log(product.some(pdt=>pdt[2]<200));


// console.log(product.find(pdt=>pdt[1]=="complan"));


// forEach
product.forEach(pdt=>console.log(pdt[1]));
    
