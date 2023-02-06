function numFinite() {
  num= Number(document.getElementById('input_num_1').value);
  res = Number.isFinite(num);
  document.getElementById("output_1").innerHTML = res;
  console.log("num", typeof num, res);
}

function numInt() {
  num= Number(document.getElementById('input_num_2').value);
  res = Number.isInteger(num);
  console.log(Number.isInteger(num));
  document.getElementById("output_2").innerHTML = res;
}

function numExp() {
  num= Number(document.getElementById('input_num_3').value);
  n =  num.toExponential();
  document.getElementById("output_3").innerHTML = n;
  console.log("num",  num,n);
}
function numFixed() {
  point= document.getElementById('input_num_4').value;
  num = (9.68759).toFixed(point);
  document.getElementById("output_4").innerHTML = num;
  console.log("num", point, num);
}
function numString() {
  input= document.getElementById('input_num_5').value;
  str = input.toString();
  document.getElementById("output_5").innerHTML = str + " typeof " + typeof str;
  console.log("num", str);
}

function numParseFloat() {
  num1= document.getElementById('input_num_6').value;
  num = Number.parseFloat(num1);
  document.getElementById("output_6").innerHTML =num;
}

function numParseInt() {
  num1= document.getElementById('input_num_7').value;
  num = Number.parseInt(num1);
  document.getElementById("output_7").innerHTML = num;
}
