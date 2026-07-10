// static means that a property or method belongs to the class itself, not to the objects (instances) created from the class.

class User{
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`username :${this.username}`);
        
    }
    static createId() {
        console.log("124");
    }
}

const access = new User("Meow");
access.logMe()
// access.createId() //this doesnt run as we have used static hence we cant acces this function outside the class

class teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }

    course() {
        console.log(`Course added by ${this.username} , email:${this.email}`);
        
    }
}

const permission = new teacher("MEow", "ghop@Email");
permission.course();
permission.logMe();
// permission.createId(); //this doesnt run as static doesnt allow acces outside the class even to class that inherits it