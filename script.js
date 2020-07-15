// Declare variables
let inputContainer = document.getElementById("input-container");
let form = document.getElementById("form");
let descriptionInput = document.getElementById("description-input");
let locationInput = document.getElementById("location-input");
let descriptionCheck = document.getElementById("description-check");
let locationCheck = document.getElementById("location-check");
let searchButton = document.getElementById("search-button");
let outputContainer = document.getElementById("output-container");

searchButton.addEventListener("click", createApiQuery);
// Gather input

// Produce output
function createApiQuery(event) {
  event.preventDefault();
  // example api call https://jobs.github.com/positions.json?description=python&full_time=true&location=sf
  let proxy = "https://cors-anywhere.herokuapp.com/";

  let apiQuery = proxy + "https://jobs.github.com/positions.json?";

  // perform description check
  if (descriptionCheck.checked) {
    //retrieve description input and handle it
    let descriptionInputValue = descriptionInput.value;
    apiQuery = apiQuery + "description=" + descriptionInputValue;
    if (locationCheck.checked) {
      apiQuery = apiQuery + "&";
    }
  }
  // add description to api query

  // perform location check
  if (locationCheck.checked) {
    // retrieve and handle input
    let locationInputValue = locationInput.value;
    apiQuery = apiQuery + "location=" + locationInputValue;
  }
  // add location to api query
  console.log(apiQuery);

  //Perform fetch and createCard as a call back function
  fetch(apiQuery)
    .then((response) => response.json())

    .then((data) => createCards(data));
}

function createCards(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let imgURL = data[i]["company_logo"];
    let titleText = data[i]["title"];

    let outputContainer = document.getElementById("output-container");

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    outputContainer.appendChild(card);

    let image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", imgURL);
    image.setAttribute("alt", "company-logo");
    card.appendChild(image);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    card.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = titleText;
    cardBody.appendChild(cardTitle);

    let cardText1 = document.createElement("p");
    cardText1.setAttribute("class", "card-text");
    cardBody.appendChild(cardText1);

    let cardText2 = document.createElement("p");
    cardText2.setAttribute("class", "card-text");

    cardBody.appendChild(cardText2);
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    cardBody.appendChild(button);
  }
}
