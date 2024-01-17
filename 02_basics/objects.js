console.log("Har_Har_Mahadev");

// two wyas to declare javascript object -> constructor method AND literal method;

// constructor method -> object.create

// literal method **************************

const MySymb1 = Symbol("key1");

const JsUser = {
      name : "Satyam",
      age : 23,
      "full name" : "Satyam Pal",
      location : "Mumbai",
      email: "satyam@yahoo.com",
      isLoggedin: false,
      LastLoginDate : ["Monday" , "Tuesday"],
      [MySymb1] : "key2"
};

// console.log(JsUser.name);
// console.log(JsUser.LastLoginDate[0]);

// console.log(JsUser);
// console.log(typeof JsUser[MySymb1]);

JsUser.email = "Satyam@chatgpt.com";

// console.log(JsUser);

// Object.freeze(JsUser);

JsUser.email = "Satyam@microsoft.com";

// console.log(JsUser);

JsUser.Appy = function() {
      console.log('Hi Appy bro');
};

JsUser.Appy2 = function() {
      console.log(`Hi ${this.name} bro`);
};

// console.log(JsUser.Appy);
// console.log(JsUser.Appy());
// console.log(JsUser.Appy2());

// const tinerUser = new Object();

const regularUser= {
      email : "Sp@gmail.com",
      fullName : {
            firstName : {
                 name: "Satyam",
                 lastName : "Pal"
            }
      }
}

// console.log(regularUser);
// console.log(regularUser.fullName.firstName); 

const obj1 = {1:"Hi" , 2: "oh..."};
const obj2 = {3:"Yeh.." , 5 : "yeh..."};

let obj3 = {obj1 , obj2}; 
// console.log(obj3);

obj3 = {...obj1 , ...obj2};
// console.log(obj3);

user = [
      {
         name : "Satyam",
         lastName : "Pal"  
      },
      {
            name : "Satyam",
            lastName : "Pal"  
      },
      {
            name : "Satyam",
            lastName : "Pal"  
      }
];

// console.log(user[0]);

const _obj = {};

_obj.id = "Hey";
_obj.age = "69";
_obj.isLogged = false;

// console.log(Object.keys(_obj));
// console.log(Object.values(_obj));
// console.log(Object.entries(_obj));

// console.log(_obj.hasOwnProperty("isLoggedin"));

const course = {
      courseName : "The Legacy",
      coursePrice : "1 gram Radium",
      courseInsrtuctor : "The LORD"
};

const {courseInsrtuctor : Insrtuctor} = course;

console.log(Insrtuctor);