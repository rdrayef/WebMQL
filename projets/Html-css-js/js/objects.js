const objects = {};

objects.exp01 = function () {
  let p1 = {
    x: 20,
    y: 30,
    print: function () {
      console.log("Point (" + this.x + "," + this.y + ")");
    },
    toString: function () {
      return "Point (" + this.x + "," + this.y + ")";
    },
  };
  p1.print();
  console.log("p1 = " + p1); // invokation du toString qu'on pourra redéfinir
  console.log("p1 = ", p1); // object {}
  let p3 = p1; // juste , tu pointe sur la meme case de mémoire
  let p2 = Object.create(p1); // créer un object comme p1 : c'est le clonage ( Design pattern : prototype ) , il est autonome
  console.log("p2 : ", p2);
  console.log("p1 == p2 : ", p1 == p2);
  // chq object has a prototype , execpt Object
  // héritage en js : est entre des objets

  console.log("p2 = " + p2);
  p2.x = 28;
  p1.x = 30;
  console.log("p2 = " + p2);
  console.log("p1 = " + p1);

  let pp2 = Object.getPrototypeOf(p2);
  console.log("prototype de p2 : " + pp2);

  let ppp2 = Object.getPrototypeOf(pp2);
  console.log("prototype de prototype de prototype de  p2 : " + ppp2);

  let pppp2 = Object.getPrototypeOf(ppp2);
  console.log(
    "prototype de prototype de de prototype prototype de  p2 : " + pppp2
  );
};

objects.exp02 = function () {
  // un constructeur
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  // ces methodes : print et toString sont pas hérités directement mais sont crées dans le prototype de Point
  Point.prototype.print = function () {
    console.log("Point (" + this.x + "," + this.y + ")");
  };
  Point.prototype.toString = function () {
    return "Point (" + this.x + "," + this.y + ")";
  };

  Point(20, 30); // ou seront insérées x et y ?
  console.log("window x : " + window.x + " , window y : " + window.y);
  // Point est un constru , un type et un objet
  let p1 = new Point(20, 30);
  let p2 = new Point(12, 23);
  p1.print();
  p2.print();
};

objects.exp03 = function () {
  let p1 = {}; //*new Object();
  console.log("p1.length: ", p1.length);
  p1.x = 20;
  p1.y = 30;
  p1["x"] = 34;
  p1[0] = 10;
  p1[1] = 30;
  console.log("p1.length ", p1.length);
  p1.length = 2;
  for (let i = 0; i < p1.length; i++) {
    console.log("> ", p1.length);
  }

  console.log(p1);
  console.log("p1.length ", p1.length);

  let prop = "x";
  console.log("prop.x" + prop.x);

  //!je ne peux pas faire p1.MAX-Y (c'est un id)
  p1.MAX_X = 100;
  //*je peux faire va
  p1["MAX-X"] = 150;

  //*Un objet en javascript c'est une sorte d'une hashtable

  for (let prop in p1) {
    console.log(" - " + prop + " : " + p1[prop]);
  }

  let t1 = [];
  //*t1.length va recvoire la taille du dernier indice num+1
  console.log("t1.length: ", t1.length);
};

objects.exp04 = function () {
  //* Création d'objets

  //* Solution N°1

  //* Possibilité ES6
  let x = 29;
  const prototype = {
    x,
    y: 30,
    print: function () {
      console.log("Point(" + this.x + ", " + this.y + ")");
    },
  };

  prototype.print();

  Object.prototype.name = "JS-prototype";

  //*P1.prototype ne crée pas un objet;
  let p1 = Object.create(prototype);

  console.log("prototype", prototype);
  console.log("p1", p1);
  //*La propriété sera chercher dans p1 sinon dans le prototype
  console.log("p1.x", p1.x);
  console.log("p1.name", p1.name);

  p1.name = "P1";
  console.log(p1);

  //*Solution N°2
  //* Parametres par défaut ES6
  function Point(x = 0, y = 0) {
    //!Constructor Function
    this.x = x;
    this.y = y;
    this.print = function () {
      console.log("Point(" + this.x + "," + this.y + ")");
    };
  }

  //*Print sera hérité
  Point.prototype.print = function () {
    console.log("Point(" + this.x + "," + this.y + ")");
  };

  let p2 = new Point(25, 0);
  /* <==>
  p2 = Object.create(Point.prototype);
  p2.x = 25;
  p2.y = 0;
  p2.print=function ()...
    //*Redéfinition de print dans l'objet p2
      p2.print = function () {};

  */

  //Solution N°3: ES6
  class Pixel {
    static MAX_X = 1000;
    #color;
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    print() {
      console.log("Pixel(" + this.x + "," + this.y + "," + this.#color + ")");
    }
    static get PI() {
      return 3.14;
    }
    get color() {
      console.log("getter invoked");
      return this.#color;
    }
    set color(value) {
      console.log("setter invoked");
      this.#color = value;
    }
  }

  let p4 = new Pixel();
  let p5 = new Pixel(10, 14);

  p4.print();
  p5.print();

  p4.color = "red";
  console.log(p4.color);
  p4.print();

  Pixel.PI = 20;
  console.log(Pixel.PI);
  console.log(Pixel.MAX_X);

  class Entity extends Pixel {
    constructor(name, x, y) {
      super(x, y);
      this.name = name;
    }

    print() {
      console.log(this.name + "(" + this.x + ", " + this.y + ")");
    }
  }
  //* =/ en java en a qu'un construct avec params
  let e1 = new Entity("Fès", 20, 30);
  e1.print();
};
