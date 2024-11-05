const products =[
    {id:1,name:'lenovo',price:658888},
    {id:2,name:'lenovo1',price:65888},
    {id:3,name:'lenovo2',price:6588},
    {id:4,name:'lenovo3',price:65888008},
]

// class: has some properties ,method
class Product{
    country ='bangladesh';
    constructor(name){
        this.name =name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const lenovo = new Product('lenovo')
// console.log(lenovo)

// lenovo.speak('hi')

class Teacher{
//object definig using constructor
constructor(name,sub){
    this.name = name;
    this.sub =sub;
}

    //method
    lecture(){
        console.log("teaching eng")
    }
}

//instance
const tapan = new Teacher('Tapan sir','eng')
console.log(tapan)


const saju = new Teacher("sajan sir","math")
console.log(saju)