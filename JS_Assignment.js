//1
function checkSum() {
  let num1 = Number(document.getElementById("input_num_1").value);
  let num2 = Number(document.getElementById("input_num_2").value);

  let res = "none";
  if (num1 === 50 || num2 === 50) {
    res = "One of the input is 50";
    console.log(res);
  }
  if (num1 + num2 === 50) {
    res = "The sum of the numbers is 50";
    console.log(res);
  }

  console.log(num1 + num2, res);
  document.getElementById("output_1").innerHTML = res;
}
//2
function checkInt() {
  let num1 = Number(document.getElementById("input_num_3").value);
  let num2 = Number(document.getElementById("input_num_4").value);

  let res = false;
  if (num1 < 0 && num2 > 0) {
    res = true;
    console.log(res);
  }
  if (num1 > 0 && num2 < 0) {
    res = true;
    console.log(res);
  }
  console.log(num1, num2, res);
  document.getElementById("output_2").innerHTML = res;
}
//3
function createStr() {
  let str = document.getElementById("input_txt_1").value;

  let tempStr = str.substring(0, 2);
  let res = " ";
  if (tempStr === "Py") {
    res = str;
  } else {
    res = str.padStart(str.length + 2, "Py");
  }

  console.log(str, res);
  document.getElementById("output_3").innerHTML = res;
}
//4
function getSum() {
  let num1 = Number(document.getElementById("input_num_5").value);
  let num2 = Number(document.getElementById("input_num_6").value);

  let ans = num1 + num2;
  if (num1 === num2) {
    ans = ans * 3;
  }
  document.getElementById("output_4").innerHTML = "Result:" + ans;
}
//5
//6
function checkStr() {
  let str = document.getElementById("input_txt_2").value;

  let tempStr = str.substring(0, 4);
  let res = false;
  if (tempStr === "Java") {
    res = true;
  }
  console.log(tempStr, res);
  document.getElementById("output_5").innerHTML = res;
}
//7
function getLongestStr() {
  let str = "Web Development Tutorial";

  let arr = str.split(" ");
  console.log(arr);
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];

      console.log(max);
    }
  }

  console.log("longeest:- " + max);
  document.getElementById("output").innerHTML = "longest str is: " + max;
}
//8
function getLargerNum() {
  let num1 = Number(document.getElementById("input_num_7").value);
  let num2 = Number(document.getElementById("input_num_8").value);
  let res = " ";

  if (num1 > num2) {
    res = "The larger num is" + num1;
  } else if (num2 > num1) {
    res = "The larger num is " + num2;
  } else {
    res = "Both are equal";
  }
  console.log(num1, num2, res);
  document.getElementById("output_6").innerHTML = res;
}
//9
function getLargestNum() {
  //let array = [-5,-2,-6,0,-1]

  let array = [];

  for (let i = 9; i <= 13; i++) {
    let input = Number(document.getElementById("input_num_" + i).value);
    console.log(i, input);
    array.push(input);
  }
  console.log(array);
  let max = array[0]
  for (let j = 0; j < array.length; j++) {
    if (array[j] > max) {
      max = array[j];
      console.log(max);
    }
  }
  alert("Largest is" + max);
  document.getElementById("output_7").innerHTML = "Largest is" + max;
}
//10
function getPattern() {
  let pattern = "";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    pattern += "<br>";
  }
  document.getElementById("output_8").innerHTML = pattern;
}
//11
function sumOfMultiples() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    num1 = 3 * i;
    num2 = 5 * i;
    sum = sum + Number(num1) + Number(num2);
    // console.log(num1,num2);
  }
  console.log(sum);
  document.getElementById("output_9").innerHTML = sum;
}
//12
function printStr() {
  let myColor = ["Red", "Green", "White", "Black"];

  let result = "<br>";
  result += myColor.join() + "<br>";
  result += myColor.join() + "<br>";
  result += myColor.join("+");
  document.getElementById("output_10").innerHTML = result;
}
