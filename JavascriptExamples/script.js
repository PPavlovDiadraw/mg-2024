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

function myFunction(resolve, reject){
    reject("Грешка")
    resolve("Ресултат");
}

const promise = new Promise(myFunction);

promise.then((result)=>{
    console.log(result);
})

promise.catch((error)=>{
    console.warn(error);
})

let isLoading = false;

async function asynctFunction(){
    console.log("Before await");
    isLoading = true;
    const result = await new Promise(myFunction);
    // result do neshto si
    isLoading = false;
    return result;
}

if(isLoading){
    // show spiner
}
else{
//  show result
}

asynctFunction().then((result)=>{
    console.log("This is the result: ", result)
})

object.x = 5;
object["ole boje"] = "Mi da"

const toRound = "5+4"/3;

let obect2=null;

const statement = `Zashto be ${(2<1) ? 2 : (1<2 ? 3 : (true? 4 :0))}`

console.log(statement);