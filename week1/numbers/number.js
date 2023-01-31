function numFinite(num) {
  res = Number.isFinite(num);
  document.getElementById("output_1").innerHTML = res;
  console.log("num", num, res);
}

function numInt(num) {
  res = Number.isInteger(num);
  console.log(Number.isInteger(num));
  document.getElementById("output_2").innerHTML = res;
}

function numParseFloat(num1) {
  num = Number.parseFloat(num1);
  document.getElementById("output-2").innerHTML = y;
}

function numParseInt(str) {
  str = Number.parseInt(str);
  document.getElementById("output-2").innerHTML = y;
}
function numExp(num) {
  num = Number.toExponential(num);
  document.getElementById("output_3").innerHTML = num;
}
function numFixed(point) {
  num = (9.68759).toFixed(point);
  document.getElementById("output_4").innerHTML = num;
  console.log("num", point, num);
}
function numString(n) {
  str = n.toString();
  document.getElementById("output_5").innerHTML = str + " typeof " + typeof str;
  console.log("num", str);
}
