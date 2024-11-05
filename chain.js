//data access
const data =[{id:1,name:'will smith',address:'chicago'},{id:2,name:' smith',address:'chicago  c'}]
// console.log(data[1].address)


const products = {
    count: 5000,
    data: [
        {id:1,name:'lenovo laptop',price:65000},
        {id:2,name:'lenovo xr laptop',price:265000},
        {id:3,name:'dell laptop',price:165000},
    ]
}

// console.log(products.data[1].price)

const user ={
    id:50001,
    name:'raj',
    address:{
        street: 
        {
            first:"12 road",
            second:"fvillgae",
            third:"dk home",
        },

        city:"chickago",

    }
}

const user2={
    id:50001,
    name:'raj',
    address:{

        city:"chickago",
        country:"usa"

    }
}
console.log(user2.address.street?.second);
// console.log(user.address.street.third);