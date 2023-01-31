//arithmetic operators
var result = 0;

function add(a, b) {
  result = Number(a) + Number(b);
  alert("addition result= " + result);
}
function sub(a, b) {
  result = a - b;
  alert("sub result= " + result);
}
function mul(a, b) {
  result = 1;
  result = a * b;
  alert("mul result= " + result);
}
function div(a, b) {
  result = a / b;
  alert("div result= " + result);
}
function exp(a, b) {
  result = a ** b;
  alert("div result= " + result);
}
function mod(a, b) {
  result = b % a;
  alert("mod result= " + result);
  console.log("mod result= " + result);
}
function inc(a) {
  result = ++a;
  alert("div result= " + result);
}

function dec(a) {
  result = --a;
  alert("div result= " + result);
}

//comparison operators
let res = false;
function isEqualTo(a, b) {
  if (a == b) {
    res = true;
  }
  console.log(a, b);
  alert("isEqualTo result= " + res);
}
function Identical(a, b) {
  if (a === b) {
    res = true;
  }
  console.log(a, b);
  alert("isEqualTo result= " + res);
}
function notEqualTo(a, b) {
  if (a != b) {
    res = true;
  }
  alert("isEqualTo result= " + res);
}
function notIdentical(a, b) {
  if (a !== b) {
    res = true;
  }
  alert("isEqualTo result= " + res);
  window.location.reload();
}
function greaterThan(a, b) {
  if (a > b) {
    res = true;
  }
  alert("isEqualTo result= " + res);
  window.location.reload();
}
function greaterThanEq(a, b) {
  if (a >= b) {
    res = true;
  }
  alert("isEqualTo result= " + res);
  window.location.reload();
}
function lesserThan(a, b) {
  if (a < b) {
    res = true;
  }
  console.log(a, b);
  alert("isEqualTo result= " + res);
  window.location.reload();
}
function lesserThanEq(a, b) {
  if (a <= b) {
    res = true;
  }
  console.log(a, b);
  alert("isEqualTo result= " + res);
  window.location.reload();
}

//bitwise

let ans = false;
function bitwiseAnd(a, b, c) {
  if ((a == b) & (b == c)) {
    ans = true;
  }
  alert("bitwiseAnd result= " + ans);
  window.location.reload();
}
function bitwiseOr(a, b, c) {
  if ((a == b) | (b == c)) {
    ans = true;
  }
  console.log("bitor", a, b, c, ans);
  alert("bitwiseOr result= " + ans);
  window.location.reload();
}
function bitwiseXor(a, b, c) {
  if ((a == b) ^ (b == c)) {
    ans = true;
  }
  console.log("bitxor", ans);
  alert("bitwiseXor result= " + ans);
  window.location.reload();
}
let answer;
function bitwiseNot(a) {
  answer = ~a;
  console.log(answer);
  alert("bitwiseNot result= " + answer);
  window.location.reload();
}
function bitwiseLeftShift(a) {
  answer = a << 1;
  console.log("bit-lfshift", a, " ", answer);
  alert("bitwiseLeftShift result= " + answer);
  window.location.reload();
}
function bitwiseRightShift(a) {
  answer = a >> 1;
  console.log("bit-lfshift", a, " ", answer);
  alert("bitwiseRightShift result= " + answer);
  window.location.reload();
}
function bitwiseRightShiftZero(a) {
  answer = a >>> 1;
  console.log("bit-lfshift-w/zero", a, " ", answer);
  alert("bitwiseRightShiftZero result= " + answer);
  window.location.reload();
}

//logical operators
ans = false;
function logicalAnd(a, b, c) {
  if (a == b && b == c) {
    ans = true;
  }
  console.log(ans);
  alert("And result= " + ans);
  window.location.reload();
}
function logicalOr(a, b, c) {
  if (a == b || b == c) {
    ans = true;
  }
  console.log(ans);
  alert("OR result= " + ans);
  window.location.reload();
}
function logicalNot(a, b) {
  if (!(a == b)) {
    ans = true;
  }
  console.log(ans);
  alert("NOT result= " + ans);
  window.location.reload();
}

//assignOp(x)
let z = 0;

function addAssign(x) {
  res += Number(x);
  console.log("add-assign", res, x);
}
function subAssign(x) {
  res -= Number(x);
  console.log("sub-assign", res, x);
}
function mulAssign(x) {
  console.log(x);
  res *= x;
  console.log("mul-assign", res, x);
}
function divAssign(x, y) {
  res = y /= x;
  console.log("div-assign", res, typeof x);
}
function modAssign(x, y) {
  res = y %= x;
  console.log("mod-assign", res, x);
}

//ternary operators
function ternaryOp(a, b) {
  let y = a > b ? "yes" : "no";
  console.log("result", y);
}
function typeOfOp(x) {
  console.log("type of ", typeof x);
}
