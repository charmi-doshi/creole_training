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

//object methods
function entryObj() {
  let index = document.getElementById("input_index").value;
  let res = Object.entries(obj)[index];
  document.getElementById("output-1").innerHTML = res;
  console.log(res);
}
const obj = {
  color: "red",
  taste: "sweet",
};
function valueObj() {
  Object.defineProperty(obj, "shape", { value: "round" });

  document.getElementById("output-2").innerHTML = Object.values(obj);
  console.log(Object.values(obj));
}
function getPrototype() {
  document.getElementById("output-3").innerHTML = Object.getPrototypeOf(obj);
}
function getObjectKeys() {
  const employees = {
    boss: "Michael",
    secretary: "Pam",
    sales: "Jim",
    accountant: "Oscar",
  };
  let roles = Object.keys(employees);

  document.getElementById("output-4").innerHTML = roles.join(",");
}
//freeze and seal
const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

const equipment = {
  laptop: "dell",
  mouse: "wired",
  headphones: "sony",
};
function getObjectAssign() {
  const junior_employee = Object.assign(employees, equipment);
  console.log(junior_employee);
  document.getElementById("output-5").innerHTML =
    JSON.stringify(junior_employee);
}
function getObjectFreeze() {
  Object.freeze(equipment);
  let input = document.getElementById("obj-input").value;
  equipment.input = input;
  console.log(input);
  document.getElementById("output-6").innerHTML = JSON.stringify(equipment);
}
function getIsFrozen() {
  let res = Object.isFrozen(equipment);
  document.getElementById("output-6").innerHTML = res;
}
function getPropDesc() {
  let input = document.getElementById("property-input").value;
  let res = Object.getOwnPropertyDescriptor(equipment, input);
  console.log(res);
  document.getElementById("output-7").innerHTML = JSON.stringify(res);
}
function getAllPropDesc() {
  let des = Object.getOwnPropertyDescriptors(Object.prototype);
  console.log(des);
  document.getElementById("output-8").innerHTML = JSON.stringify(des);
}
function getObjectIs() {
  let str1 = "abc";
  let str2 = new String("abc");

  let choice1 = document.getElementById("str-input-1").value;
  let choice2 = document.getElementById("str-input-2").value;
  let res = Object.is(choice1, choice2);
  console.log(res, choice1, choice2);
  document.getElementById("output-9").innerHTML = res;
}
