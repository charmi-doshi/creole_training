
//if - else , else-if function
function Greeting() {
  const date = new Date();
  let hour = date.getHours();
  let greet = " ";
  console.log(date,hour);
  if (hour < 12) {
    greet = "Good Morning";
  } else if (hour == 12) {
    greet = "Good Noon";
  } else if (hour < 20) {
    greet = "Good Evening";
  } else {
    greet = "Good Night";
  }
  document.getElementById("if-else-output").innerHTML = greet;
}

function checkYear() {
  let year = Number(document.getElementById("year-input").value);
  let res = "";

  if (year % 4 == 0) {
    //nested if-else
    if (year % 400 == 0 || year % 100 != 0) {
      res = "It is leap year";
    } else {
      res = "Not a leap year";
    }
  } else {
    res = "Not a leap year";
  }

  document.getElementById("year-output").innerHTML = res;
}

function menu() {
  let choice = Number(document.getElementById("choice-input").value);
  console.log(choice);
  let res = " ";
  switch (choice) {
    case 1:
      res = "Gujarati thali costs Rs.250";
      break;
    case 2:
      res = "French fixed lunch costs Rs.350";
      break;
    case 3:
      res = "Thai cuisine fixed plate costs Rs.400";
      break;
    default:
      res = "Thank you for coming";
  }
  document.getElementById("bill-output").innerHTML = res;
}

//ternary
function checkAge() {
  let age = document.getElementById("input").value;
  console.log(age);
  let res = age > 18 ? "yes you can vote" : "no you cannot vote";

  document.getElementById("output").innerHTML = res;
}
