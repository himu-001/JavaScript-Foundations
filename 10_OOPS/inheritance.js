class User{
    constructor(username) {
        this.username=username
    }
    logMe() {
        return `username: ${this.username}`
    }
}
// extends is used for inheritance
//  "This class inherits the properties and methods of another class."

class teacher extends User {
    // super() is used inside a child class to call the parent class's constructor. ---> run the parent constructor first

    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`new course was added by : ${this.username}`);
        
    }
}

const access = new teacher("Hima", "hima@email", "ppp");
console.log(access)
access.addCourse();

console.log(access.logMe()); //constructor teacher inherits from user hence it even has access of its fucntion whereas vice versa not true as user dont inherit from teacher

const permission = new User("masalaChai");

console.log(access===permission);

console.log(access instanceof teacher);
