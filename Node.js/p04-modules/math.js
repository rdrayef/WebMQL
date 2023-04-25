//Si c'est lobjet par défaut je met:
export default function random(max) {
  return Math.floor(Math.random() * max);
}

//Object Destructuring
export function sum({ x, y }) {
  return x + y;
}
