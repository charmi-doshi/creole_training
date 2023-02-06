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
function delObj() {
  let user = {
    name: "abc",
    age: 30,
  };
  let key2 = document.getElementById("obj_key1").value;
  delete user[key2];
  document.getElementById("obj_output1").innerHTML = JSON.stringify(user);
}
function showObj() {
  const person = {
    firstName: "abc",
    lastName: "xyz",
    get getName() {
      return this.firstName;
    },
    set setName(name) {
      this.firstName = name;
    },
  };
  let name = document.getElementById("obj_key2").value;
  person.setName(name)
  document.getElementById("obj_output2").innerHTML = JSON.stringify(person);
  console.log(person)
}
