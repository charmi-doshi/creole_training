function strLength(str) {
  str = "string length is " + str.length;
  console.log(str);
  document.getElementById("output-1").innerHTML = str;
}

function strSlice(s, e) {
  str = "JavaScript".slice(s, e);
  console.log("s", str, s, e);
  document.getElementById("output-2").innerHTML = str;
}

function strSubstring(s, e) {
  str = "JavaScript".substring(s, e);
  console.log(str);
  document.getElementById("output-3").innerHTML = str;
}

function strSubstr(s, l) {
  str = "JavaScript".substr(s, l);
  console.log(str);
  document.getElementById("output-4").innerHTML = str;
}

function strReplace(str1, str2) {
  str = "Javascript is amazing".replace(str1, str2);
  console.log(str);
  document.getElementById("output-5").innerHTML = str;
}

function strReplaceAll(str1, str2) {
  str =
    "Js is amazing.Js is everywhere.Js is used in variety of applications".replaceAll(
      str1,
      str2
    );
  console.log(str, str1, str2);
  document.getElementById("output-6").innerHTML = str;
}

function strUpperCase(str1) {
  str = str1.toUpperCase();
  console.log(str);
  document.getElementById("output-7").innerHTML = str;
}

function strLowerCase(str1) {
  str = str1.toLowerCase();
  console.log(str);
  document.getElementById("output-8").innerHTML = str;
}
function strConcat(str1) {
  str = "Hello ".concat(str1);
  console.log(str);
  document.getElementById("output-9").innerHTML = str;
}

function strTrim() {
  str = "  Js is versatile.   ".trim();
  console.log(str);
  document.getElementById("output-10").innerHTML = str;
  console.log("trim", str);
}
function strTrimStart() {
  str = "&nbsp;&nbsp;&nbsp; Js is versatile.   ".trimStart();
  console.log(str);
  document.getElementById("output-11").innerHTML =
    str + "str-length is " + str.length;
  console.log("trimstart", str);
}
function strTrimEnd() {
  str = "  Js is versatile.   ".trimStart();
  console.log(str);
  document.getElementById("output-12").innerHTML = str;
  console.log("trimend", str);
}

function strPadStart(num, str) {
  str = "js".padStart(num, str);
  console.log(str);
  document.getElementById("output-12").innerHTML = str;
  console.log("pad", str);
}
function strPadEnd(num, str) {
  str = "js".padEnd(num, str);
  console.log(str);
  document.getElementById("output-13").innerHTML = str;
  console.log("pad", str);
}
function strChar(num) {
  str = "Javascript".charAt(num);
  document.getElementById("output-14").innerHTML = str;
  console.log("charat", str, num);
}
function strCharCode(num) {
  str = "Javascript".charAt(num);
  unicode = "Javascript".charCodeAt(num);
  document.getElementById("output-15").innerHTML = str + " - " + unicode;
  console.log("unicode", str, num);
}
function strSplit(c) {
  str = "Js,java,ruby,c,python".split("-");
  document.getElementById("output-16").innerHTML = str;
  console.log("split", str);
}
