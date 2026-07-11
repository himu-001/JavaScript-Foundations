const user = {
  name: "Shadow",

  greet() {
    console.log(this.name);
  },
};

const fn = user.greet.bind(user);

fn(); // ✅ Shadow
// No matter who calls this function later, always use user as this."
// bind() is used to permanently set the value of this for a function.
/*

| `call()`                           | `bind()----------------------------------------------------------------------------
|                                    |
| Calls the function **immediately** | Returns a **new function**                           |
| Doesn't create a new function      | Creates a new function with `this` fixed                                |
| Used for one-time calls            | Used when you want to call the function later                       |

*/ 