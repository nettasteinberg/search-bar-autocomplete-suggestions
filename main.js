const body = document.querySelector("body");

const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");

// const form = document.createElement("form");
// form.classList.add("form");

const searchButton = document.createElement("button");
searchButton.type = "submit";
searchButton.classList.add("searchButton");

const input = document.createElement("input");
input.type = "search";
input.classList.add("input");


// form.append(searchButton, input);

// mainDiv.append(form);
mainDiv.append(searchButton, input);
body.append(mainDiv);