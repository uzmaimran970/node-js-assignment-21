21.// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// object has normaly key value pair
// data type of person object
interface person {
    name : string ,
    age :number,
    subject: string,
    totalnumber:number,
    result:boolean

}
let person : person = {
    name : "uzma",
    age: 28,
    subject:"urdu",
    totalnumber: 510,
    result:true
 }

2// we are making car object
interface car{
    color: string,
    auto: boolean,
    number:number
}

let car :car = {
    color: "black",
    auto: true,
    number: 768467
}
console.log(car);










console.log(person);