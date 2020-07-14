// Declare variables
let inputContainer = document.getElementById("input-container");
let form = document.getElementById("form");
let descriptionInput = document.getElementById("description-input");
let locationInput = document.getElementById("location-input");
let descriptionCheck = document.getElementById("description-check");
let locationCheck = document.getElementById("location-check");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", someFunction);
// Gather input

// Produce output
function someFunction(event) {
  event.preventDefault();
  // example api call https://jobs.github.com/positions.json?description=python&full_time=true&location=sf
  let apiQuery = "https://jobs.github.com/positions.json?";

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
}
