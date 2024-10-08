// CLOSURE  source @Yoshita Jain Youtube Channel

//Closure

/*
function fun1() {
  let a = 5;
  console.log(a);
}

fun1();

output: 5

*/

//****** */

//Now Suppose we have another function fun2() iniside func1().

/*
function fun1() {
  let a = 5;
  console.log(a);

  function fun2() {
    let a = 6;
    console.log(a);
  }
  fun2();
}
fun1();

output: 5
        6
*/
//*********/

//Now remove variable from function fun2() and  return fun2() and store all this in variable const abc

/*
function fun1() {
  let a = 5;
  console.log(a);

  function fun2() {
    console.log(a);
  }
  return fun2;
}

const abc = fun1();
abc();

output: 5
        5

*/
//************* */

//Now remove console.log(a) from the outer function fun1()

/*
function fun1() {
  let a = 5;

  function fun2() {
    console.log(a);
  }
  return fun2;
}

const abc = fun1();
abc();

output: 5

*/

//*********** */

/*
function fun1() {
  let a = 5;

  function fun2() {
    console.log(a);
  }
  a = 8;
  return fun2;
}

const abc = fun1();
abc();

output: 8

*/

// It is returning "8" because function fun2 will return function along with its lexical environment parent environment .
It will not return value of "a"it will return reference of "a" . That's why console.log(a) is returning value of a = 8 not a =5 even 
  if it is after console.log(a). As a = 5; and a =8; is in the same parent environment.

//*********** */

/*
function fun1() {
  let a = 5;

  function fun2() {
    console.log(a);

    function fun3() {
      console.log(a);
    }
    fun3();
  }
  a = 8;
  return fun2;
}

const abc = fun1();
abc();

output: 8
        8
*/

//*********** */

/*
function fun1() {
  let a = 5;

  function fun2() {
    let a = 9;
    console.log(a);

    function fun3() {
      console.log(a);
    }
    fun3();
  }
  a = 8;
  return fun2;
}

const abc = fun1();
abc();

output: 9
        9
*/

// This will return 9 fun3 will log for variable in its scope , if not find look for variable in its parent scope that
  is fun2 and here it is 9.And it will return 9. If there were no variable in fun2 also it will search in fun1 and then then print.
//************
/*
function fun1() {
  let a = 5;
  console.log(a);

  function fun2() {
    let a = 6;
    console.log(a);

    function fun3() {
      const a = 30;
      console.log(a);

      function fun4() {
        console.log(a);

        function fun5() {
          var a = 7;
          console.log(a);

          function fun6() {
            console.log(a);

            function fun7() {
              let a = 9;
              console.log(a);
            }
            fun7();
          }
          fun6();
        }
        fun5();
      }
      fun4();
    }
    fun3();
  }
  fun2();
}
fun1();

// output:5
          6
          30
          30
          7
          7
          9
*/

//***********

/*
function fun1() {
  let a = 5;
  let b = 6;
  let c = 7;

  function fun2() {
    console.log(a);
    console.log(b);
    console.log(c);
  }
  a = 8;
  b = 99;
  c = 100;

  return fun2;
}

const abc = fun1();
abc();

// output:
          8
          99
          100
*/

//************************************************************************* */

// "this" keyword in Javascript @Yoshita Jain Youtube
  
// In javascript , the "this" keyword always refers to an object.

//Some different ways to use "this" keyword
//1.By itself
//2.Inside object method
//3.inside function

// by itself
/*

console.log(this)

output: 
Window object

*/

//*************** */

// inside object model.

/*
const obj = {
  name: "Ashutosh",
  lastName: "Singh",
  fullName: function () {
    return this;
  },
};

console.log(obj.fullName())

output:{name: 'Ashutosh', lastName: 'Singh', fullName: ƒ}
        fullName
        : 
        ƒ ()
        lastName
        : 
        "Singh"
        name
        : 
        "Ashutosh"
        [[Prototype]]
        : 
        Object
*/

/*
const obj = {
  name: "Ashutosh",
  lastName: "Singh",
  fullName: function () {
    return this.name + " " + this.lastName;
  },
};

console.log(obj.fullName())

output: Ashutosh Singh
*/

//************ */

// inside function

/*
function xyz() {
  return this;
}

console.log(xyz());

output: window object
*/

//Explaination: Again this will print "window" object. This will refer to object , Lekin yaha pe koi object nhi hai kewal ek function hai jo 
.As "this" always refers to an object. Wo kya krega sbse bada jo object hai global object that is "window" object usko refer krega.

// if we use " use strict" it will give undefined.

/*
"use strict";
function xyz() {
  return this;
}

console.log(xyz());

output: undefined
*/
//***************************************************************************************************************************/

// call apply bind in JavaScript @Yoshita Jain Youtube

/*
const person1 = {
  FName: "Satya",
  LName: "LastName",
  fullName: function () {
    return this.FName + " " + this.LName;
  },
};

const person2 = {
  FName: "Aman",
  LName: "Surname",
  fullName: function () {
    return this.FName + " " + this.LName;
  },
};
*/

//So we have person1 object and person2 object both have same method name that is "fullName" so here we have 2 object person1 and person2 suppose you have n object .Then it is not correct apprach to write same method repeatedly multiple times for different object . Here comes "Call" into picture .

// So with the help of "call" method we can use object of one method into different onject.

/*
const person1 = {
  FName: "Satya",
  LName: "LastName",
  fullName: function () {
    return this.FName + " " + this.LName;
  },
};

const person2 = {
  FName: "Aman",
  LName: "Surname",
};

console.log(person1.fullName.call(person2));

output: Aman Surname
*/

//********* */
//use hometown as parameter in function fullName

/*
const person1 = {
  FName: "Satya",
  LName: "LastName",
  fullName: function (hometown) {
    return this.FName + " " + this.LName + " " + hometown;
  },
};

const person2 = {
  FName: "Aman",
  LName: "Surname",
};

console.log(person1.fullName.call(person2));

output:Aman Surname undefined
*/

/*
const person1 = {
  FName: "Satya",
  LName: "LastName",
  fullName: function (hometown) {
    return this.FName + " " + this.LName + " " + hometown;
  },
};

const person2 = {
    FName: "Aman",
    LName: "Surname",
  };
  
console.log(person1.fullName.call(person2,"Pune"))

output: Aman Surname Pune
*/

/*
const person1 = {
    FName: "Satya",
    LName: "LastName",
    fullName: function (hometown ,country) {
      return this.FName + " " + this.LName + " " + hometown + " "+ country;
    },
  };
  
  const person2 = {
      FName: "Aman",
      LName: "Surname",
    };
    
  console.log(person1.fullName.call(person2,"Pune" ,"India"))
  
  output: Aman Surname Pune India

*/

//************* */

//Apply

// purpose of "call" and apply is almost same . But difference is how we pass arguments.In "call" method we pass arguments by comma seperated(person2,"Pune" ,"India") but in "apply" we pass arguments as as array (person ,["Pune", "India"])

/*
const person1 = {
  FName: "Satya",
  LName: "LastName",
  fullName: function (hometown, country) {
    return this.FName + " " + this.LName + " " + hometown + " " + country;
  },
};

const person2 = {
  FName: "Aman",
  LName: "Surname",
};

console.log(person1.fullName.call(person2, "Pune", "India"));
console.log(person1.fullName.apply(person2, ["Pune", "India"]));

output:
Aman Surname Pune India
Aman Surname Pune India
*/

//************************ */

//bind

/*
const person1 = {
  FName: "Satya",
  LName: "LastName",
  fullName: function (hometown, country) {
    return this.FName + " " + this.LName + " " + hometown + " " + country;
  },
};

const person2 = {
  FName: "Aman",
  LName: "Surname",
};

console.log(person1.fullName.call(person2, "Pune", "India")); //call
console.log(person1.fullName.apply(person2, ["Pune", "India"])); //apply

const result = person1.fullName.bind(person2, "Pune", "India"); //bind
console.log(result);

output:
Aman Surname Pune India
Aman Surname Pune India
ƒ (hometown, country) {
    return this.FName + " " + this.LName + " " + hometown + " " + country;
  }
*/

/*
const person1 = {
  FName: "Satya",
  LName: "LastName",
  fullName: function (hometown, country) {
    return this.FName + " " + this.LName + " " + hometown + " " + country;
  },
};

const person2 = {
  FName: "Aman",
  LName: "Surname",
};

console.log(person1.fullName.call(person2, "Pune", "India")); //call
console.log(person1.fullName.apply(person2, ["Pune", "India"])); //apply

const result = person1.fullName.bind(person2, "Pune", "India"); //bind
console.log(result);
console.log(result());

output:
Aman Surname Pune India
Aman Surname Pune India
ƒ (hometown, country) {
    return this.FName + " " + this.LName + " " + hometown + " " + country;
  }
Aman Surname Pune India
*/
