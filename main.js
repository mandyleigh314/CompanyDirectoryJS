let people = document.querySelector(".people");
let currentPerson = [];

customers.results.forEach((currentPerson, index) => {
  const newPerson = document.createElement("li");

  const img = document.createElement("img");
  img.src = currentPerson.picture.large;
  newPerson.appendChild(img);

  const name = document.createElement("h2");
  name.textContent = `${currentPerson.name.first} ${currentPerson.name.last}`;
  newPerson.appendChild(name);

  const email = document.createElement("h3");
  email.textContent = currentPerson.email;
  newPerson.appendChild(email);

  const street = document.createElement("p");
  street.textContent = currentPerson.location.street;
  newPerson.appendChild(street);

  const city = document.createElement("p");
  city.textContent = `${currentPerson.location.city}, ${currentPerson.location
    .state} ${currentPerson.location.postcode}`;
  newPerson.appendChild(city);

  const phone = document.createElement("p");
  phone.textContent = currentPerson.phone;
  newPerson.appendChild(phone);

  const ssn = document.createElement("a");
  ssn.textContent = currentPerson.id.value;
  newPerson.appendChild(ssn);

  people.appendChild(newPerson);
});
