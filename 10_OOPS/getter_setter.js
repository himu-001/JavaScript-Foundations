// Getters and setters are one of the most important OOP concepts in JavaScript.

// Instead of directly reading or writing a property, you can control how it is read (get) and how it is written (set).

// IMPORTANT -> classes and constrcutor based getter and setter is used as syntax is clearer

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  //  getter and setter should have the same name as the property
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}ijo0/[8]`;
  }
  // setter job is only to set value hence no return is used
  set password(value) {
    this._password = value.toUpperCase();
  }
}

const newUser = new User("Hima", "meow@email", "abc");
console.log(newUser.password);
console.log(newUser.email);
// Since we're using a getter and setter for `password`, the object doesn't
// store a normal `password` property. Instead, JavaScript automatically
// calls the setter/getter whenever `password` is written or read, while
// the actual value is stored in `_password`.
console.log(newUser) 

// Never access the same property inside its own getter or setter.

// Inside a getter or setter, never read or write the same property that triggered the getter/setter. Use a different backing property.

// Maximum call stack size exceeded:
// Occurs when recursive function calls never stop, causing the call stack
// to overflow beyond its maximum limit.

// The constructor runs only once.
// Inside the getter, `this.password` tries to access the same property again.
// This invokes the getter repeatedly, creating infinite recursion.
// Each call is pushed onto the call stack.
// When the stack limit is exceeded, JavaScript throws "Maximum call stack size exceeded".

// Use the setter when you want the data to be stored in a normalized format (e.g., always uppercase, trimmed, validated).
// Use the getter when you want to change only how the data is presented, while keeping the original stored value.

//----------------->----------------------------------->---------------//

// Function Based Getter and Setter
// Earlier before ES6 and classes this method was used most work is same
// but its older and classes is used mostly ,the first one as its syntax is cleaner and readable

function User1(username, email, password) {
    this._username = username;
    this._password = password;
    this._email = email;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set : function (value) {
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () { 
            return `${this._password.toUpperCase()}.[;[[;.]]]`
        },
        set: function (value) {
            this._password = value;
        }
    })
}

const myUser = new User1("hima", "hima@email", "anc");
console.log(myUser);

console.log(myUser.password);

console.log(myUser.email);
// Why do we use _email inside the getter but myUser.email outside?
// The property email is not storing any value. It's an accessor property (getter/setter).
// So outside the object we use `myUser.email`, which automatically calls the getter.
// Inside the getter/setter, we use `this._email` because it stores the real value.
// Using `this.email` inside the getter would call the getter again, causing infinite recursion.

//------------------->------------------------------->---------------------//

// Object Based getter and setter

// This is used very rarely or you can say no use

const user = {
    _email: "HK@EMAIL",
    _password: "SOUP",
    
    get email() {
        return this._email.toLowerCase();
    },
    set email(value) {
        this._email = value;
    }
}

// we use factory function here not new keyword
const ourUser = Object.create(user);
console.log(ourUser); //ourUser is empty. It does not copy user hence empty object

console.log(ourUser.email);
