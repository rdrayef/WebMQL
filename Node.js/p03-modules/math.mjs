//Si c'est lobjet par défaut je met:
export default function random(max) {
  return Math.floor(Math.random() * max);
}

export function sum({ x, y }) {
  //Object Destructuring
  return x + y;
}
