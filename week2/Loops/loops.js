function loopFor() {
  let num = Number(document.getElementById("number-input-1").value);
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum = sum + i;
    console.log(sum, i);
  }
  document.getElementById("for-output").innerHTML = "Sum is " + sum;
}
function loopForin() {
  const color = {
    0: "red",
    1: "green",
    2: "blue",
    3: "purple",
    4: "orange",
  };
  let res = "";
  for (let key in color) {
    res += " " + key;
    console.log(key);
  }
  document.getElementById("for-in-output").innerHTML =
    "Result i.e the keys are " + res;
}
function loopForof() {
  let str = document.getElementById("for-of-input").value;
  let res = " ";
  for (let s of str) {
    res += s + "<br>";
    console.log(s);
  }
  document.getElementById("for-of-output").innerHTML =
    "Result i.e the characters are " + res;
}
function loopWhile() {
  let num = document.getElementById("while-input").value;
  let res = " ";
  let i = 0;
  while (i < num) {
    let j = 0;
    while (j <= i) {
      res += "*";
      j++;
    }
    res += "<br>";
    i++;
  }

  console.log(num);
  console.log(res);
  document.getElementById("while-output").innerHTML = res;
}
function loopDoWhile() {
  let num = document.getElementById("do-while-input").value;
  let res = " ";
  i = 0;
  do {
    res += i + " ";
    i++;
  } while (i <= num);
  console.log(num);
  console.log(res);
  document.getElementById("do-while-output").innerHTML = res;
}
