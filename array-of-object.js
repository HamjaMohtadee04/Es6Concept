const products =[
    {id:1,name:'lenovo',price:658888},
    {id:2,name:'lenovo1',price:65888},
    {id:3,name:'lenovo2',price:6588},
    {id:4,name:'lenovo3',price:65888008},
]

//map
const names = products.map(product=>product.name)
// console.log(names)

const prices = products.map(p=> p.price)
// console.log(prices)
products.forEach(p=>console.log(p.id))

//filter
const expensive =products.filter(p=>p.price>50000)
// console.log(expensive)
//find
const affordable = products.find(p=>p.price<50000)
console.log(affordable)
const total = products.reduce((acum,current) => acum+current.price,0)
console.log(total);