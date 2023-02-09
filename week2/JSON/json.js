//json data
const jsonData = `{
    "employees":{
        "sales":{
            "name":"abc",
            "status":"online"
        },
        "developers":{
            "frontend":{
                "js":12,
                "reactjs":20
            },
            "backend":{
                "nodejs":17,
                "java":20
            }
        }
    }
  }`;
function parse() {
  const obj = JSON.parse(jsonData);
  console.log(obj);
  document.getElementById("json-output").innerHTML = JSON.stringify(obj);
}

function jsonToString() {
  let value1 = document.getElementById("json-val-1").value;
  let value2 = document.getElementById("json-val-2").value;
  let value3 = document.getElementById("json-val-3").value;

  const obj = {
    name: value1,
    age: value2,
    country: value3,
  };

  let json = JSON.stringify(obj);
  console.log(json);
  document.getElementById("json-output-2").innerHTML = json;
}
