const functions = {};
// l'objet est constant c-à-d , je pourrai pas changer changer son réf mais sa structure oui
functions.exp01 = function () {
  function sum(x, y) {
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    return x + y;
  }

  logVar("sum", sum);
  let s = sum(10, 52, 30);

  console.log("s : " + s);

  let f = sum; // sum est un object
  s = f(50, 10);

  // sum.length = return the agrs count
  console.log("s : " + s);
  console.log("f.name : " + sum.name + ", f.length : " + sum.length);

  let s2 = sum(10);
  console.log("s2 : " + s2);
};

//! arguments c'est un objet qui se comporte comme un tableau
functions.exp02 = function () {
  const sum = function () {
    // ES6 = ES-2015 => templates String ` ${var}`
    console.log(`argments.length : ${arguments.length}`); // arguments is array like , but it doesnt array and it defined inside of function
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
      s += arguments[i];
    }
    return s;
  };

  let s = sum(10, 52, 30);
  console.log("s : " + s);
};

functions.exp03 = function () {
  // ES-6 : sread opertor ...name
  const sum = function (...args) {
    // args is array
    let s = 0;
    for (let i = 0; i < args.length; i++) {
      s += args[i];
    }
    return s;
  };

  let s = sum(10, 52, 30);
  console.log("s : " + s);
};

functions.exp04 = function () {
  // ES-6 : spread opertor ...name
  const sum = function (...args) {
    // args is array
    let s = args.reduce(function (pr, cur) {
      return pr + cur;
    }, 0); //
    // reduce return un obj
    return s;
  };

  let s = sum(10, 52, 30);
  console.log("s : " + s);
};

functions.exp05 = function () {
  // ES-6 : arrow function
  // array function is like functionnal interface
  // but if u hv an other function , u cannot use it
  const sum = function (...args) {
    return args.reduce((pr, cur) => pr + cur, 0);
  };
  let s = sum(10, 52, 30);
  console.log("s : " + s);
};
