/* const arrays = {
  x: 10,
  y: 20,
  print: function () {}, //*une méthode de type propriete de l'objet
}; */
const arrays = {};

//tableaux,fonctions et objets
arrays.exp01 = function () {
  let t1 = [20, 30, 40, 50];
  console.log("t1.length", t1.length);

  for (let index = 0; index < t1.length; index++) {
    console.log(" - ", t1[index]);
  }
};
arrays.exp02 = function () {
  let t1 = []; //<=> t1=new Array()
  t1[0] = 20;
  t1[3] = 40;
  t1[5] = 60;
  console.log("t1.length", t1.length);

  for (let index = 0; index < t1.length; index++) {
    console.log(" - ", t1[index]);
  }
};
arrays.exp03 = function () {
  //let t1 = [];
  let t1 = new Array();
  t1[0] = 20;
  t1[3] = 40;
  t1[5] = 60;

  t1["0"] = 60;
  t1["a"] = 70;
  t1.a = 80;

  logVar("t1", t1);
  console.log("t1.length", t1.length);

  for (let index in t1) {
    console.log(" - ", index, t1[index]);
  }
};

arrays.exp04 = function () {
  let t1 = [];
  t1[0] = 20;
  t1[3] = 40;
  t1[5] = 60;
  t1["0"] = 60;
  t1["a"] = 70;
  console.log("t1.length", t1.length);

  for (let index of t1) {
    console.log(" - ", index);
  }
};

arrays.exp05 = function () {
  let t1 = []; //<=> t1=new Array()
  t1.push(20);
  t1.push(30);
  t1.push(60);
  console.log("t1.length", t1.length);
  for (let index = 0; index < t1.length; index++) {
    console.log(" - ", t1[index]);
  }
};
