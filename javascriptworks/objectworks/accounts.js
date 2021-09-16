var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}
    ]},
    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"ball"},
        {to:1002,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}
    ]},
    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}
    ]},


]

// // 1005 presnt or not
// console.log(datas.some(account=>account.acno==1005));

// high bala
// console.log(datas.reduce((acc1,acc2)=>acc1.balance<acc2.balance?acc2:acc1));

// sort dec
// datas.sort((acc1,acc2)=>acc2.balance-acc1.balance).forEach(acc=>console.log(acc))

// debit transacyion of 1000
// datas.filter(account=>account.acno==1000).forEach(account=>console.log(account.transactions))

// credit transaction
// datas.map(account=>account.transactions).forEach(transactions=>{
//     transactions.forEach(trans=>{
//         trans.to==1000?console.log(trans):""
//     })
// })

// payment history
var payment=[]
var credit=datas.map(account=>account.transactions).forEach(transactions=>{
    transactions.forEach(trans=>{
        trans.to==1000?payment.push(trans):""
    })
})
datas.filter(account=>account.acno==1000).map(account=>payment.push(account.transactions))

console.log(payment);