
function showObj() {
  let user = {
    name: "abc",
    age: 30,
  };
  let key = document.getElementById("obj_key").value;
  let value = document.getElementById("obj_value").value;

  let user2 = {
    [key]: value,
  };
  user[key] = value;
  document.getElementById("obj_output").innerHTML = JSON.stringify(user);
  console.log("prop", key, value, user, user2);
}
//delete obj
function delObj() {
  let user = {
    name: "abc",
    age: 30,
  };
  let key2 = document.getElementById("obj_key1").value;
  delete user[key2];
  document.getElementById("obj_output1").innerHTML = JSON.stringify(user);
}
//getter setter
function setObj() {
  const person = {
    firstName: "abc",
    lastName: "xyz",
    get getName() {
      return this.firstName;
    },
  };

  //using define property method for setting firstName
  Object.defineProperty(person, "setName", {
    set: function (name) {
      this.firstName = name;
    },
  });

  let name = document.getElementById("obj_key2").value;
  person.setName = name;
  document.getElementById("obj_output2").innerHTML =
    "person.getName=" + person.getName;
  console.log(person);
}
function entryObj() {
  let index = document.getElementById("input_index").value;
  let res = Object.entries(obj)[index];
  document.getElementById("output-1").innerHTML = res;
  console.log(res);
}
function valueObj() {
  const obj = {
    color: "red",
    taste: "sweet",
    
  };
  Object.defineProperty(obj,"shape",{value:"round",},)

  document.getElementById("output-2").innerHTML =  Object.values(obj)
  console.log( Object.values(obj));
}
