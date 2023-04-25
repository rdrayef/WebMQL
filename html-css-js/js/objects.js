const objects = {};

objects.exp01 = function () {
  let p1 = {
    x: 20,
    y: 30,
    print: function () {
      console.log("Point[" + this.x + "," + this.y + "]");
    },
    toString: function () {
      return "{" + this.x + "," + this.y + "}";
    },
  };
  p1.print();
  //* La méthode toString() qui est invoqué
  console.log("p1= " + p1.toString());
  console.log("p1= ", p1);

  let p2 = Object.create(p1);
  console.log("p1==p2", p1 == p2);
  //* p1 est le prototye de p2
  //!a chaque fois qu'on crée un objet il a un prototype

  console.log("p2= " + p2);
  p2.x = 28;
  p1.x = 100;
  console.log("p2= " + p2);
  console.log("p1= " + p1);

  //* Déterminer le prototype de p2
  let pp2 = Object.getPrototypeOf(p2);
  console.log("Prototype de p2 :" + pp2);

  let ppp2 = Object.getPrototypeOf(pp2);
  console.log("Prototype de pp2 :" + ppp2);

  let pppp2 = Object.getPrototypeOf(ppp2);
  console.log("Prototype de pp2 :" + pppp2);
};

objects.exp02 = function () {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.print = function () {
    console.log("Point[" + this.x + "," + this.y + "]");
  };
  Point.prototype.toString = function () {
    return "{" + this.x + "," + this.y + "}";
  };

  Point(20, 30);
  //? Ou seront insérés x et y de cette façon
  console.log("Window.x : ", window.x);
  console.log("Window.y : ", window.y);
  //* Donc ils s'insèrent dans window mais pas dans le mode stricte

  //* Je me serve de la fonct constr Point
  let p1 = new Point(20, 30);
  let p2 = new Point(42, 34);

  p1.print();
  p2.print();
};
