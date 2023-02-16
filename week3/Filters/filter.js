const Candidates = [
  {
    name: "john",
    language: "C",
  },
  {
    name: "maya",
    language: "Java",
  },
  {
    name: "ram",
    language: "Java",
  },
  {
    name: "qwerty",
    language: "Javascript",
  },
  {
    name: "xyz",
    language: "PHP",
  },
];

//
function select() {
  let lang = document.getElementById("langName").value;
  const selectedCandidate = Candidates.filter(function (index) {
    if (lang === index.language) {
      return index.name;
    }
  }).map((index) => index.name);

  console.log(selectedCandidate);
  document.getElementById("result").innerHTML = selectedCandidate;
  console.log(lang);
}

