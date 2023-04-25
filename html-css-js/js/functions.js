//*const veut dire que je ne peut plus reaffecter mais je peux modifier
const functions = {};

functions.exp01 = function () {
  function sum(x, y) {
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    return x + y;
  }
  logVar("sum", sum);
  let s = sum(20, 30);
  console.log("s : " + s);

  let f = sum;
  s = f(50, 40);
  console.log("s : " + s);
  //* La taille de fonction est le nbrs d'arguments pour cette fonction
  console.log("f.name : " + f.name + ",sum.length:" + sum.length);

  let s2 = sum(10);
  console.log("s2: " + s2);
};

functions.exp02 = function () {
  sum = function () {
    //!ES-6 = ES-2015 => Templates String
    console.log(`Nbr D'arguments : 
    ${arguments.length}
    `);
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
      s += arguments[i];
    }
    return s;
  };
  logVar("sum", sum);
  let s = sum(20, 30);
  console.log("s : " + s);
};
functions.exp03 = function () {
  //! ES-6 :spread operator ....
  const sum = function (...args) {
    let s = args.reduce(function (prev, cur) {
      return prev + cur;
    }, 0);
    console.log("s : " + s);
  };
};
functions.exp04 = function () {
  const sum = function (...args) {
    let s = args.reduce(function (prev, cur) {
      return prev + cur;
    }, 0);
    console.log("s : " + s);
  };
};

functions.exp05 = function () {
  //!ES-6 :arrow function ....
  const sum = function (...args) {
    return args.reduce((prev, cur) => prev + cur, 0);
    console.log("s : " + s);
  };
};
