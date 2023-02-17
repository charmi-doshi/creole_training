let stocks = {
  fruits: ["apple", "watermelon", "mango", "strawberry"],
  topping: ["chocolate", "biscuit", "sprinkles"],
  holder: ["cone", "cup"],
};
let date = new Date();
let hours = date.getHours();
let process = "";
let error = "";
function time(ms) {
  return new Promise((resolve, reject) => {
    if (hours > 10) {
      setTimeout(resolve, ms);
    } else {
      reject((error += "shop is closed"));
    }
  });
}
function order(){
    let fruitName = document.getElementById("fruit").value;
    let holderName = document.getElementById("holder").value;
    let toppingName = document.getElementById("toppings").value;
    console.log(fruitName, holderName, toppingName);
    kitchen(fruitName,holderName,toppingName)
}
//production
async function kitchen(fruitName,holderName,toppingName) {
 
  try {
    await time(2000);
    document.getElementById("process").innerHTML =
      process += `${stocks.fruits[fruitName]} is selected <br>`;
    console.log(`${stocks.fruits[fruitName]} is selected`);
    await time(0000);
    document.getElementById("process").innerHTML =
      process += `producion started<br>`;
    console.log("producion started");
    await time(2000);
    document.getElementById("process").innerHTML = process += `fruit chopped <br>`;

    console.log(`fruit chopped`);
    await time(1000);
    document.getElementById("process").innerHTML =
      process += `ice cream placed on ${stocks.holder[holderName]} <br>`;
    console.log(`ice cream placed on ${stocks.holder[holderName]}`);
    await time(2000);
    document.getElementById("process").innerHTML =
      process += `topping selected is ${stocks.topping[toppingName]} <br>`;
    console.log(`topping selected is ${stocks.topping[toppingName]}`);
    await time(1000);
    document.getElementById("process").innerHTML = process += `Serve Ice cream <br>`;
      console.log(`Serve Ice cream`);
  } catch (error) {
    document.getElementById("error").innerHTML ="<br>"+ error;
    console.log("Customer left", error);
  } finally {
    document.getElementById("end").innerHTML = "<br>day ended..";
    console.log("day ended..");
  }
}
