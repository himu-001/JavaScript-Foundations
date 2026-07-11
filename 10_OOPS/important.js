// Modern JavaScript has private class fields using # i.e. hash

// _password:
// - Just a naming convention (not truly private).
// - Can still be accessed from outside: user._password.
// - Used to indicate "internal use only" by convention.

// #password:
// - True private class field introduced in modern JavaScript.
// - Cannot be accessed outside the class (user.#password → SyntaxError).
// - Privacy is enforced by the JavaScript language itself.

//---------------------------------------------------------------------------//

// _password (Convention only)
// It tells developers "don't access this directly",
// but JavaScript does NOT stop you.

class User1 {
    constructor(password) {
        this._password = password;
    }
}

const user1 = new User1("abc");

console.log(user1._password); // ✅ abc (accessible from outside)


// ------------------------------------------------------------


// #password (True private field)
// JavaScript enforces privacy.

class User2 {
    #password;

    constructor(password) {
        this.#password = password;
    }

    tomPassword() {
        return this.#password;
    }
}

const user2 = new User2("abc");

console.log(user2.tomPassword()); // ✅ Correct
//  console.log(user.#password); // ❌ SyntaxError as #password is private and cannot be accessed outside the class

//--------------------------------------------------------------------------//
// using getter and setter 

class User {
    #password;

    constructor(password) {
        this.#password = password;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }
}

const user = new User("abc");

console.log(user.password); // ✅ abc
user.password = "xyz";       // ✅ Setter runs

// Because the getter and setter are inside the class, so they are allowed to access #password.

// You only get a private access error when outside code tries to access the private field directly:
// console.log(user.#password); // ❌ SyntaxError