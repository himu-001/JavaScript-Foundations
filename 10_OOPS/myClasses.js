class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
//inside a class we dont write function keyword
    encryptPassword() {
       return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Himanshu", "Hima@email", "!@#");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene above and below are doing same work

function User1(username, email, password) {
    this.username = username;
    this.password = password;
    this.email = email;
}
// // injecting method
User1.prototype.encryptPassword1 = function () {
    return `${this.password}abc`;
}

User1.prototype.changeUsername1 = function () {
    return `${this.username.toUpperCase()}`
}

const user = new User1("Himanshu", "Hima@email", "!@#");

console.log(user);
console.log(user.encryptPassword1());
console.log(user.changeUsername1());


