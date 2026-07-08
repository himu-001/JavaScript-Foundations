const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB call, Crptography, network call
    setTimeout(() => {
        console.log("Async task completed");
        resolve()
    },1000)
});

// consuming promise needs resolve() to consume 
// consuming promise
promiseOne.then(() => {
    console.log("promise is consumed");
});


new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(() => {
    console.log("async 2 completed")
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username:"Chai",email:"meow@ghopghop"})
    },1000)
});
promiseThree.then((user) =>{
    console.log(user)
})


const promise_four = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username:"meow",password:"ghop ghop"})
        }
        else {
            reject("ERROR : MEOW GHOP GHOP")
        }
    },1000)
})

promise_four.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err); 
}).finally(() => {
    console.log("Promise is either resolved or rejected")
})
// .finally() is a Promise method that runs after a Promise finishes, whether it succeeds or fails.
// Think of it as:
// "No matter what happens, always run this code at the end."
// ------x-----------x--------------------x-----------//

/*
Both .then()/.catch() and async/await do the same job: they handle Promises. The difference is mainly syntax and readability.
*/

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "java meooow", password: "ghop ghop" });
      } else {
        reject("ERROR : MEOW2 GHOP GHOP");
      }
    }, 1000);
})

async function consumePromise() {
    try {
        const response = await promiseFive;
    console.log(response)
    }
    catch(error) {
        console.log(error)
    }
}
consumePromise()

async function GetAllUsers() {
    try {
        const resposne = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(resposne);
        // response is not in json
        
        const meow = await resposne.json();
    // response.json() returns a Promise, not the actual JSON object.  Therefore you need await // 
       console.log(meow);
    }
    catch (error) {
        console.log(`E: ${error}`)
    }
}
GetAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Meooow ghuup guup")
})