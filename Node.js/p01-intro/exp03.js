// Spread Operator <=> Opérateur de décomposition
function f01() {
  let t1 = [20, 14, 54, 64, 78];

  // ... Il prend le tableau est lé décompose
  let t2 = [...t1];
  console.log(t2);
  console.log(...t2);
  let t3 = [10, ...t2, 67, 75];
  console.log(t3);
}

function f02() {
  let p1 = {
    x: 10,
    y: 20,
  };

  // On peut même modifier p1 directement
  //ou creer un nv let p2={...}
  p1 = {
    name: "p2",
    ...p1,
    y: 30,
    print() {
      console.log(this.name + "(" + this.x + "," + this.y + ")");
    },
  };
  p1.print();
}

//Object Destructuring
//Déstructuration ou DéComposition d'un Objet
function f03() {
  let p1 = { x: 20, y: 30, z: 14, print() {} };
  /*let x=p1.x;
  let y=p1.y;
  let z=p1.z;*/

  //Résolution des champs est faite par nom
  let { x: a, z } = p1;
  console.log("a = ", a);
  console.log("z = ", z);
}

f01();
f02();
f03();
