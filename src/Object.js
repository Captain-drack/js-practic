(function () {
  const oldLog = console.log;
  console.log = function (message) {
    const output = document.getElementById("consoleOutputSub");

    if (typeof message === "object") {
      const formattedMessage = formatObject(message);
      output.innerHTML += formattedMessage + "<br>";
    } else {
      output.innerHTML += message + "<br>";
    }

    oldLog.apply(console, arguments); // Keep default console.log behavior
  };

  function formatObject(obj) {
    if (obj === null) return "null";

    let result = obj instanceof Array ? "[" : "{";
    let properties = Object.keys(obj).map(
      (key) => `"${key}": ${JSON.stringify(obj[key])}`
    );

    // Handle symbol properties
    let symbolKeys = Object.getOwnPropertySymbols(obj);
    symbolKeys.forEach((sym) => {
      properties.push(`${sym.toString()}: ${JSON.stringify(obj[sym])}`);
    });

    result += properties.join(", ");
    result += obj instanceof Array ? "]" : "}";

    return result;
  }
})();

//singleton object
const singleton_object = new Object();
console.log(singleton_object);

// non singleton objects
const non_singleton_object = {};

non_singleton_object.id = "123abc";
non_singleton_object.name = "Akshat";
non_singleton_object.isLoggedIn = false;
// console.log(non_singleton_object)

const regular_user = {
  email: "akshat@yahoo.com",
  fullName: {
    userFullName: {
      firstName: "Akshat",
      lastName: "Austin",
    },
  },
};

const all_data = { ...regular_user, ...non_singleton_object };
console.log(all_data, "-=-=-=all Uuser");

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

// Object.create

//object literals
const mySymbol = Symbol("key1");

const user_detail = [
  {
    name: "Akshat",
    "full name": "Akshat Austin",
    city: "Roorkee",
    [mySymbol]: "myKey1",
    email: "akshat@google.com",
    age: 29,
    isLoggedIn: false,
    address: {
      street: "House no. 801/1",
      city: "Azad nagar",
      zip: {
        code: 247887,
        area: "Jail",
      },
    },
  },
];

// console.log(user_detail);

// console.log(user_detail.age);
// console.log(user_detail["email"]);
// console.log(user_detail["full name"]);
// console.log(user_detail[mySymbol]);

// user_detail[0].address

console.log(Object.keys(user_detail))
console.log(Object.values(user_detail))
console.log(Object.entries(user_detail))

// user_detail.email = "akshat@microsoft.com";
// console.log(user_detail.email);
// Object.freeze(user_detail); //if you don't want to change the value of the user_detail or object
// user_detail.email = "akshat@ola.com";
// console.log(user_detail.email);
// user_detail.greeting = function(){
//   console.log("Hello buddy")
// }
// console.log(user_detail.greeting());
