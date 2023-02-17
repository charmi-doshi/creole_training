function setCookie() {
  let cName = document.getElementById("name").value;

  var expirydate = new Date();
  expirydate.setTime(expirydate.getTime() + 1000 * 60 * 60 * 24 * 10);

  document.cookie = "name=" + cName + ";expires=" + expirydate.toGMTString();
  console.log(cName);
}

function getCookie() {
  let arr = document.cookie;
  console.log(arr);
  document.getElementById("output").innerHTML = arr;
}
