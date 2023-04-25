//import random,{sum} from "./math";
import random from "./math.mjs";
import { sum } from "./math.mjs";

function main() {
  console.log(random(100));
  let p1 = { x: 20, y: 30, z: 25, print() {} };
  console.log(sum(p1));
}
main();
