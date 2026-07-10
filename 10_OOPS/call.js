function setUserName(username) {
    // complex DB cals
    this.username = username;
    console.log(`Username : ${username}`);
    
}

function createUsername(username,email,password) {
    setUserName.call(this, username); //"Call setUserName, but use the same this that createUsername is using."
    // Now both functions work on the same object.

    this.email = email;
    this.password = password;
    console.log(`email : ${email}\n password :${password}`);
    
}

const user = new createUsername("Meow", "Ghop Ghop", "OhYeah@mai.com");

console.log(user)


// what if function is not inside an object 
function test_sample(sample) {
    console.log(this.sample);
    console.log(sample);

};

const proto_test = {
    sample: "Mouse DNA",
};

// how do we tell the function test_sample to use sample from proto_test
// this is where call comes
test_sample.call(proto_test);
test_sample.call(this,proto_test);
