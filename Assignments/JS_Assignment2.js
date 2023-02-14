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
  let str = "heggbdefff";

  let tempStr = str.split("");
  let duplicate = [];
  function common(char, index) {
    if (tempStr.indexOf(char) == index) {
      
      return char;
    }
    else{
        duplicate.push(char)
    }
  }

  let array = tempStr.filter(common);
  
  let tempChar = duplicate.join("");
  
  let max = 0
  let max_char = " "
  let l =[]
  for (let i = 0; i < array.length; i++) {
    let len = tempChar.substring(duplicate.indexOf(array[i]),duplicate.lastIndexOf(array[i])).length
    l.push(len)
    if(len > max){
        max = len
        max_char = array[i]
        console.log(max,max_char);
    }
    
  }
  
  document.getElementById("output-3").innerHTML = max_char;
  console.log(array, tempChar,duplicate);
  console.log(max,max_char,l);
}

//4
function repeatChar() {
  let str = "xybbbefaaag";
  let count = 0;
  let tempStr = str.split("");
  function common(char, index) {
    if (tempStr.indexOf(char) != index) {
      count++;
      if (count > 2) {
        return char;
      }
    }
  }

  let array = tempStr.filter(common);
  console.log(array);
}

//5
function vowelCons() {
  let str = document.getElementById("input-txt").value;
  let index = document.getElementById("input-num").value;
  let res = "";
  let char = str.charAt(index - 1);
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
  let random = [];
  for (let i = 0; i < str.length; i++) {
    let index = Math.floor(Math.random() * str.length);

    random.push(tempStr[index]);

    console.log(str[index]);
  }

  console.log(random.join(""));
  document.getElementById("output-10").innerHTML = random;
}
//10
//11
function altCap(){
    str = "I am a string"
    let tempStr = str.split(" ")
    
    let tempStr2=[]
    let tempStr3 = []
    let temp = tempStr.join("")
    for(let i=0;i<temp.length;i++){
        if(i%2==0){
       tempStr2.push(temp[i].toUpperCase())
        }else{
            tempStr2.push(temp[i])
        }
    }
  for(let j=0;j<str.length;j++){
    if(str[j]===" "){
        tempStr3.push(" ")
    }
    else{
        tempStr3.push(tempStr2[j])
    }
  }
    console.log(tempStr3,temp);
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
  let str = "somebody@eail.com";
  let emailVal = /^[*a-b].com/;
  console.log(emailVal.test(str));
  console.log(str.match(emailVal));
  document.getElementById("output-13").innerHTML = "";
}
