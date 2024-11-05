const  a = 56;
const numbers= [454,154,4154,545,4545,454,554,55,454,55,45,45,45]
const person ={
    name:'sakib mia'
}
// template string
const msg = `hi,${person.name} has a: ${a} access to ${numbers[3]}`

//arrow function
const square = x = x*x;
const mul = (a,b) => a+b;

//distructring
const {age,z,...others} = {x:2,y:2,z:3, name:"nafij",age:55}
//arraay distructuring
const [first,second,...remaining] = ['nam','sam','fred','bill','will','feel'];

//object.keys ,object.values, object.entries
//for of used in array and string
//for in loop used in object
