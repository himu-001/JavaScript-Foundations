// let name = "Meow   ";
// console.log(name.length);
// console.log(name.trueLength);


// we are gonna make a method

let heroPower = {
    thor: "hammer",
    spiderMan: "Web",
    
    spidyPower: function () {
        console.log(`Meow ${this.spiderMan}`);
        
    }
}

Object.prototype.meowPower = function () {
    console.log("WEB POWER")
}

heroPower.meowPower()

let arr = [1, 2, 3, 4];
arr.meowPower()

// if we give a special property in an Object its accessible to all the data types like array string object

// below we are gonna give a special power to an array lets check it its accesible to other data types or objects

Array.prototype.heyHimanshu = (power) => {
    console.log(`Himanshu has Great power of ${power}`);
};
arr.heyHimanshu("invisibilty");
// Object.heyHimanshu();// this doesnt have access to special prototype property given to an array
// It means that when you give power to higher hierarchy everyone has access but to lower only that specific has an access


// concept of inheritance

const user = {
    name: "Meow",
    email : "meow@meow.com"
}

const teacher = {
    makeVideo : true,
}

const teachingSupport = {
    isAvailable :false
}

const TA_Support = {
    makeASsignment: `JS Asssignment`,
    __proto__:teachingSupport, //can access the properties of teachingSupport object
}

teacher.__proto__ = user; //now teacher can access properties of user

// The above approach is old

// Modern syntax

Object.setPrototypeOf(teacher, user); //teacher inherits from user


// making trueLength() our own method
let newUser = "Meow    ";

String.prototype.trueLength = function() {
    console.log(this);
    console.log(`True length is ${this.trim().length}`)
}

newUser.trueLength();
"  Tea".trueLength()