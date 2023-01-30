function numFinite(num) {
  res = Number.isFinite(num);
  alert("num is finite or not" + res);
}

function numInt(num) {
  res = Number.isInteger(num);
  alert("num is integer or not" + res);
}

function numParseFloat(num1) {
  num = Number.parseFloat(num1);
  alert("type of number" + typeof num);
}

function numParseInt(str) {
  str = Number.parseInt(str);
  alert("type of var:" + typeof str);
}
function numExp(num) {
  num = Number.toExponential(num);
  alert("exponential of number is: " + num);
}
function numFixed(p) {
  y = (9.68759).toFixed(p);
  alert("fixed number: " + y);
}
function numString(n) {
  str = n.toString();
  alert("number to string: " + typeof str);
}
