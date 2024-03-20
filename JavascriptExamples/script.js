const object = {
    y: 2,
    getX: ()=>{
        let x;
        return x;
    }
}

let person = {
    firstName: "John",
    lastName : "Connor",
    age:25,
    eyeColor:"blue",
    fullName : function() {
        let firstName = "dd";
        let fullName = "ff";
        return this.firstName + " " + fullName;
    }
};

const person2 = {};

person2.firstName = "Iven";
person2['lastName'] = "Ivanov";
person2.fullName = function(){
    return this['firstName'] + " " + this.lastName
}

console.log(person.fullName())
console.log(person2.fullName())

object.x = 5;
object["ole boje"] = "Mi da"

const toRound = "5+4"/3;

let obect2=null;

const statement = `Zashto be ${(2<1) ? 2 : (1<2 ? 3 : (true? 4 :0))}`

console.log(statement);