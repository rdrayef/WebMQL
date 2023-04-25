/* Script Externe */

afficher("Script externe");

var x1 = 20,
  x2 = "Une chaine",
  x3 = true,
  x4,
  x5 = null;

function afficher(msg) {
  //alert(msg);
  //+ invoke toString , invoque la structure de l'objet
  console.log(msg);
}

function logVar(name, v) {
  console.log(name + " : " + v + ", de type: " + typeof v);
}

window.exp01 = function () {
  logVar("x1", x1);
  logVar("x2", x2);
  logVar("x3", x3);
  logVar("x4", x4);
  logVar("x5", x5);
};

function exp02() {
  //window:objet de type Window
  // il s'agit du contexte global
  //ou encore contexte de déclaration global
  logVar("x1", x1);
  logVar("window.x1", window.x1);
  window.console.log("L'objet window");
  window.alert("window.alert");
}

function exp03() {
  let a1 = 20;
  let a2 = new Number(20);
  let a3 = new Number(20);

  logVar("a1", a1);
  logVar("a2", a2);

  console.log("a1==a2", a1 == a2);
  console.log("a2===a3", a2 === a3); //Comparaison Stricte
  console.log("a2==a3", a2 == a3);
}

function exp04(params) {
  let a1 = 0;
  let a2 = "";
  let a3 = [];
  let a4 = false;

  logVar("a1", a1);
  logVar("a2", a2);
  logVar("a3", a3);

  console.log("a1 == a2", a1 === a2);
  console.log("a1 == a3", a1 === a3);
  console.log("a1 == a3", a2 == a3);
  console.log("a1 == a3", a2 === a3);
  console.log("a1 == a4", a1 === a4);

  //même chose pour String et Boolean
  let s1 = "chaîne";
  let s2 = new String("chaîne");

  let b1 = 20 > 10;
  let b2 = new Boolean(true);
}

function exp05() {
  let x1 = "20";
  let x2 = "30";

  let s = parseFloat(x1) + parseFloat(x2);
  console.log("s = ", s);
}

//tableaux,fonctions et objets
function exp06() {
  let t1 = [20, 30, 40, 50];
  console.log("t1.length", t1.length);

  for (let index = 0; index < t1.length; index++) {
    console.log(" - ", t1[index]);
  }
}
function exp07() {
  let t1 = []; //<=> t1=new Array()
  t1[0] = 20;
  t1[3] = 40;
  t1[5] = 60;
  console.log("t1.length", t1.length);

  for (let index = 0; index < t1.length; index++) {
    console.log(" - ", t1[index]);
  }
}
function exp08() {
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
}

function exp09() {
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
}
