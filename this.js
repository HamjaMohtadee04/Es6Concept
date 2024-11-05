class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`now sleeping ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
const Koll = new Person("kol",21)
console.log(Koll)
Koll.sleep();
const jen = new Person("jenny",23)
console.log(jen)
jen.sleep();