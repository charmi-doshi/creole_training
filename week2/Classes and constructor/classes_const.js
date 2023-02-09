//class
class Travel {
  //constructor
  constructor(personName, locationName, airplaneName) {
    this.personName = personName;
    this.locationName = locationName;
    this.airplaneName = airplaneName;
  }

  details() {
  
    return `${this.personName} is going to ${this.locationName} through ${this.airplaneName}`
  }
}

function displayDetails() {
  let personName = document.getElementById("name").value;
  let locationName = document.getElementById("location").value;
  let airplaneName = document.getElementById("airplane-name").value;
  const person1 = new Travel(personName, locationName, airplaneName);
  console.log(personName, locationName, airplaneName);
  document.getElementById("travel_details").innerHTML = person1.details();
}
