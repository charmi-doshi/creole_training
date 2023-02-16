const map = new Map();
const set = new Set();

//map 
function setGroceryList() {
  let groceryName = document.getElementById("name").value;
  let quantity = document.getElementById("quan").value;

  map.set(groceryName, quantity);
  console.log(groceryName, quantity);
}
function getGroceryList() {
  let text = "";
  map.forEach(function(key, value) {
    text += "buy " + key + " := " + value + "<br>";
  });

  set.forEach((key)=>{
    text += " buy " + key + "<br>";
  })
  console.log(map,set);
  document.getElementById("grocery").innerHTML = text;
}
function searchList() {
  let searchName = document.getElementById("search").value;
  let res = false
  console.log(searchName);
  if(map.has(searchName) || set.has(searchName)){
    res = true
  }
  document.getElementById("result").innerHTML = res;
}

function deleteItem(){
    let deleteName = document.getElementById("delete").value;

  console.log(deleteName);
  let res = ""
  if(map.delete(deleteName)){
    res = "successfully deleted"
  }
  if( set.delete(deleteItem)){
    res = "successfully deleted"
  }
  else{
    res = "item does not exist"
  }
  document.getElementById("result-2").innerHTML = res;
}

//set function
function setDairyList() {
    let dairyName = document.getElementById("dairy-name").value;
   
  
    set.add(dairyName);
    console.log(dairyName);
  }
  function deleteDairyItem(){
    let deleteName2 = document.getElementById("dairy-delete").value;

  console.log(deleteName2);
  let res = ""
  if( set.delete(deleteName2)){
    res = "successfully deleted"
  }
  else{
    res = "item does not exist"
  }
  document.getElementById("result-2").innerHTML = res;
}
//reset
function reset(){
    map.clear()
    set.clear()
}