//arithmetic operators
var result = 0;

function add() {
  a = document.getElementById("arith-input-1").value;
  b = document.getElementById("arith-input-2").value;
  result = Number(a) + Number(b);
  document.getElementById("arith-output-1").innerHTML =
    "addition result= " + result;
}
function sub() {
  a = document.getElementById("arith-input-3").value;
  b = document.getElementById("arith-input-4").value;
  result = a - b;
  document.getElementById("arith-output-2").innerHTML = "sub result= " + result;
}
function mul() {
  a = document.getElementById("arith-input-5").value;
  b = document.getElementById("arith-input-6").value;
  result = 1;
  result = a * b;
  document.getElementById("arith-output-3").innerHTML = "mul result= " + result;
}
function div() {
  a = document.getElementById("arith-input-7").value;
  b = document.getElementById("arith-input-8").value;
  result = a / b;
  document.getElementById("arith-output-4").innerHTML = "div result= " + result;
}
function mod() {
  a = document.getElementById("arith-input-9").value;
  b = document.getElementById("arith-input-10").value;
  result = a % b;
  document.getElementById("arith-output-5").innerHTML =
    "Mod result= " + result;
}
function exp() {
  a = document.getElementById("arith-input-11").value;
  b = document.getElementById("arith-input-12").value;
  result = a ** b;
  document.getElementById("arith-output-6").innerHTML = "mod result= " + result;
  console.log("exponential result= " + result);
}
function inc() {
  a = document.getElementById("arith-input-13").value;
  result = ++a;
  document.getElementById("arith-output-7").innerHTML = "result= " + result;
}

function dec() {
  a = document.getElementById("arith-input-14").value;
  result = --a;
  document.getElementById("arith-output-8").innerHTML = "result= " + result;
}

//comparison operators
let res = false;
function isEqualTo() {
  a = document.getElementById("comp-input-1").value;
  b = document.getElementById("comp-input-2").value;
  if (a == b) {
    res = true;
  }
  console.log(a, b);
  document.getElementById("comp-output-1").innerHTML =
    "isEqualTo result= " + res;
}
function Identical() {
  a = document.getElementById("comp-input-3").value;
  b = document.getElementById("comp-input-4").value;
  if (a === b) {
    res = true;
  }
  console.log(a, b);
  document.getElementById("comp-output-2").innerHTML =
    "Identical result= " + res;
}
function notEqualTo() {
  a = document.getElementById("comp-input-5").value;
  b = document.getElementById("comp-input-6").value;
  if (a != b) {
    res = true;
  }
  document.getElementById("comp-output-3").innerHTML =
    "notEqualTo result= " + res;
}
function notIdentical() {
  a = document.getElementById("comp-input-7").value;
  b = document.getElementById("comp-input-8").value;
  if (a !== b) {
    res = true;
  }
  document.getElementById("comp-output-4").innerHTML =
    "notIdentical result= " + res;
 
}
function greaterThan() {
  a = document.getElementById("comp-input-9").value;
  b = document.getElementById("comp-input-10").value;
  if (a > b) {
    res = true;
  }
  document.getElementById("comp-output-5").innerHTML =
    "greaterThan result= " + res;

}
function greaterThanEq() {
  a = document.getElementById("comp-input-11").value;
  b = document.getElementById("comp-input-12").value;
  if (a >= b) {
    res = true;
  }
  document.getElementById("comp-output-6").innerHTML =
    "graterThanto result= " + res;

}
function lesserThan() {
  a = Number(document.getElementById("comp-input-13").value);
  b = Number(document.getElementById("comp-input-14").value);
  if (a < b) {
    res = true;
  }
  console.log(a, b);
  document.getElementById("comp-output-7").innerHTML =
    "leeserThan result= " + res;

}
function lesserThanEq() {
  a = Number(document.getElementById("comp-input-15").value);
  b = Number(document.getElementById("comp-input-16").value);
  if (a <= b) {
    res = true;
  }
  console.log(a, b);
  document.getElementById("comp-output-8").innerHTML =
    "lesserThanEqual result= " + res;
  
}

//bitwise

let ans = false;
function bitwiseAnd() {
  a = document.getElementById("bit-input-1").value;
  b = document.getElementById("bit-input-2").value;
  c = document.getElementById("bit-input-3").value;
  if ((a == b) & (b == c)) {
    ans = true;
  }
  document.getElementById("bit-output-1").innerHTML =
    "bitwiseAnd result= " + ans;
  
}
function bitwiseOr() {
  a = document.getElementById("bit-input-4").value;
  b = document.getElementById("bit-input-5").value;
  c = document.getElementById("bit-input-6").value;
  if ((a == b) | (b == c)) {
    ans = true;
  }
  console.log("bitor", a, b, c, ans);
  document.getElementById("bit-output-2").innerHTML =
    "bitwiseOr result= " + ans;
  
}
function bitwiseXor() {
  a = document.getElementById("bit-input-7").value;
  b = document.getElementById("bit-input-8").value;
  c = document.getElementById("bit-input-9").value;
  if ((a == b) ^ (b == c)) {
    ans = true;
  }
  console.log("bitxor", ans);
  document.getElementById("bit-output-3").innerHTML =
    "bitwiseXor result= " + ans;
  
}
let answer;
function bitwiseNot() {
  a = document.getElementById("bit-input-10").value;
  answer = ~a;
  console.log(answer);
  document.getElementById("bit-output-4").innerHTML =
    "bitwiseNot result= " + answer;
 
}
function bitwiseLeftShift() {
  a = document.getElementById("bit-input-11").value;
  answer = a << 2;
  console.log("bit-lfshift", a, " ", answer);
  document.getElementById("bit-output-5").innerHTML =
    "bitwiseLeftShift result= " + answer;
 
}
function bitwiseRightShift() {
  a = document.getElementById("bit-input-12").value;
  answer = a >> 2;
  console.log("bit-lfshift", a, " ", answer);
  document.getElementById("bit-output-6").innerHTML =
    "bitwiseRightShift result= " + answer;
  
}
function bitwiseRightShiftZero() {
  a = document.getElementById("bit-input-13").value;
  answer = a >>> 2;
  console.log("bit-lfshift-w/zero", a, " ", answer);
  document.getElementById("bit-output-7").innerHTML =
    "bitwiseRightShiftZero result= " + answer;

}

//logical operators
ans = false;
function logicalAnd() {
  a = document.getElementById("logic-input-1").value;
  b = document.getElementById("logic-input-2").value;
  c = document.getElementById("logic-input-3").value;
  if (a == b && b == c) {
    ans = true;
  }
  console.log(ans);
  document.getElementById("logic-output-1").innerHTML = "And result= " + ans;
  
}
function logicalOr() {
  a = document.getElementById("logic-input-4").value;
  b = document.getElementById("logic-input-5").value;
  c = document.getElementById("logic-input-6").value;
  if (a == b || b == c) {
    ans = true;
  }
  console.log(ans);
  document.getElementById("logic-output-2").innerHTML = "OR result= " + ans;
 
}
function logicalNot(a, b) {
  a = document.getElementById("logic-input-7").value;
  b = document.getElementById("logic-input-8").value;
  if (!(a == b)) {
    ans = true;
  }
  console.log(ans);
  document.getElementById("logic-output-3").innerHTML = "NOT result= " + ans;
  
}

//assignOp(x)
let z = 0;

function addAssign() {
  x = document.getElementById("as-input-1").value;
  res += Number(x);
  document.getElementById("as-output-1").innerHTML = "add-assign" + res;
  console.log("add-assign", res, x);
}
function subAssign(x) {
  x = document.getElementById("as-input-2").value;
  res -= Number(x);
  document.getElementById("as-output-2").innerHTML = "sub-assign" + res;
  console.log("sub-assign", res, x);
}
function mulAssign(x) {
  x = document.getElementById("as-input-3").value;
  
  x *= 3;
  document.getElementById("as-output-3").innerHTML = "mul-assign" + x;
  console.log("mul-assign",x);
}
function divAssign() {
  x = Number(document.getElementById("as-input-4").value);
  x /= 2;
  document.getElementById("as-output-4").innerHTML = "div-assign" + x;
  console.log("div-assign", x);
}
function modAssign() {
  x = document.getElementById("as-input-5").value;

  res %= x;
  document.getElementById("as-output-5").innerHTML = "mod-assign" + res;
  console.log("mod-assign", res, x);
}

//ternary operators
function ternaryOp(a, b) {
  a = Number(document.getElementById("ter-input-1").value);
  b = Number(document.getElementById("ter-input-2").value);

  res = a > b ? "yes" : "no";
  document.getElementById("ter-output").innerHTML = "ternary result= " + res;
  console.log("result", res, a, b);
}
function typeOfOp(x) {
  console.log("type of ", typeof x);
}
