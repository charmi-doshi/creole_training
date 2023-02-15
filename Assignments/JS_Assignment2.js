//1
function revStr() {
  let str = "I am a string";
  let arr = str.split("");
  console.log(arr);
  let str2 = [];
  for (let i = 0; i < arr.length; i++) {
    str2.unshift(arr[i]);
  }
  console.log(str2.join(""));
  document.getElementById("output").innerHTML = str2.join("");
}
//2
function replaceChar() {
  let char1 = "a";
  let char2 = "x";
  let str = "I am an example string";
  let str2 = str.split("");
  let arr = [];
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == "a" || str2[i] == "x") {
      arr.push("");
      console.log(str[i]);
    } else {
      arr.push(str[i]);
    }
  }
  console.log(arr.join(""));
  document.getElementById("output-2").innerHTML = arr.join("");
}
//3
function commonChar() {
  let str = "heggbdeff";

  let tempStr = str.split("");
  let duplicate = [];
  function common(char, index) {
    if (tempStr.indexOf(char) == index) {
      return char;
    } else {
      duplicate.push(char);
    }
  }

  let array = tempStr.filter(common);

  //let tempChar = duplicate.join("");

  let max = 0;
 let maxChar = ""
  for (let char of str) {
    if (duplicate[char]) {
      duplicate[char]++;
    } else {
      duplicate[char] = 1;
    }
  }

  for (let char in duplicate) {
    if (duplicate[char] > max) {
      max = duplicate[char];
      maxChar = char;
    }
  }

  document.getElementById("output-3").innerHTML = maxChar;
  console.log(array, duplicate);
  console.log(max, maxChar);
}

//4
function commonChar2() {
  let str = "tfghhhplffzaaa";
  let max = 3;
  let tempStr = str.split("");
  let duplicate = [];
  function common(char, index) {
    if (tempStr.indexOf(char) == index) {
      return char;
    } else {
      duplicate.push(char);
    }
  }

  let array = tempStr.filter(common);
  let maxChar = [];
  for (let char of str) {
    if (duplicate[char]) {
      duplicate[char]++;
    } else {
      duplicate[char] = 1;
    }
  }

  for (let char in duplicate) {
    if (duplicate[char] >= max) {
      max = duplicate[char];
      maxChar.push(char);
    }
  }
  console.log(duplicate);
  console.log(maxChar);
  document.getElementById("output-4").innerHTML = maxChar;
}

//5
function vowelCons() {
  let str = document.getElementById("input-txt").value;
  let index = document.getElementById("input-num").value;
  let res = "";
  let char = str.charAt(index);
  console.log(char);

  if (
    char === "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u"
  ) {
    res = "It is vowel";
  } else {
    if (char == " ") {
      res = "empty";
    } else {
      res = "it is consonent";
    }
  }

  document.getElementById("output-5").innerHTML = res;
}
//6- ascending order
function strSort() {
  let res = "";
  let str = document.getElementById("input-txt-6").value;
  let tempStr = str.split("");
  tempStr.sort();
  console.log(tempStr.join(""));
  document.getElementById("output-6").innerHTML = tempStr.join("");
}
//7
function checkStrOrder() {
  let res = "";
  let str = document.getElementById("input-txt-7").value;
  let tempStr = str.split("");
  tempStr.sort();
  ascStr = tempStr.join("");
  decStr = tempStr.reverse().join("");
  console.log(ascStr, decStr);

  if (str === ascStr || str === decStr) {
    res = true;
  } else {
    res = false;
  }
  document.getElementById("output-7").innerHTML = res;
}
//8
function strCap() {
  let res = "";
  let str = document.getElementById("input-txt-8").value;
  // str = "i am a string"
  let tempStr = str.split(" ");
  let arr = [];
  for (let i = 0; i < tempStr.length; i++) {
    tempStr2 = tempStr[i].split("");
    str1 = tempStr2[0].toUpperCase();
    tempStr2.shift();
    tempStr2.unshift(str1);
    console.log(tempStr2, str1);
    arr.push(tempStr2.join(""));
    arr.push(" ");
  }

  console.log(arr);
  document.getElementById("output-8").innerHTML = arr.join("");
}
//9
function findStr() {
  let str = "catapult";
  let find_str = "cat";
  let res = false;
  for (let i = 0; i < str.length; i++) {
    let temp = str.substring(i, i + find_str.length);
    if (temp === find_str) {
      console.log(temp, i);
      res = true;
    }
  }
  document.getElementById("output-9").innerHTML = res;
}

//10
function strRandom() {
  str = "hello";

  let tempStr = str.split("");
  for (let i = 0; i < str.length - 1; i++) {
    let index = Math.floor(Math.random() * str.length);

    temp = tempStr[i];
    tempStr[i] = str[index];
    str[index] = temp;
    console.log(tempStr[index]);
  }

  document.getElementById("output-10").innerHTML = tempStr;
}

//11
function altCap() {
  let str = "I am a string";
  //
  let finalStr = str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    let char = finalStr.charAt(i - 1);
    if (char === char.toUpperCase()) {
      console.log(finalStr, char, i);
      finalStr += str.charAt(i).toLowerCase();
    } else if (char === char.toLowerCase()) {
      finalStr += str.charAt(i).toUpperCase();
    }
  }
  document.getElementById("output-11").innerHTML = finalStr;
  console.log(finalStr);
}

//12
function getQuote() {
  let str = `"The unexamined life is not worth living." - Socrates`;

  let quote = str.split("-");
  let res = [];
  for (i of quote) {
    res.push(i);
  }
  console.log(res);
  document.getElementById("output-12").innerHTML = res;
}
//13
function validate() {
  let str = "somebody@email.com";
  let emailVal =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
  let res = false;
  if (emailVal.test(str)) {
    res = true;
  }
  console.log(str.match(emailVal));
  document.getElementById("output-13").innerHTML = res;
}
