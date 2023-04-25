function sum() {
  let x = document.getElementById("x");
  let y = document.getElementById("y");
  let result = document.getElementById("result");

  result.innerHTML = parseFloat(x.value) + parseFloat(y.value);
}
