const body = document.querySelector("body");

const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");

const searchButton = document.createElement("button");
searchButton.type = "submit";
searchButton.classList.add("searchButton");

const input = document.createElement("input");
input.type = "search";
input.classList.add("input");

mainDiv.append(searchButton, input);
body.append(mainDiv);

const suggestions = [];

searchButton.addEventListener("click", function(event) {
    if (!input.value) {
        return;
    }
    sessionStorage.setItem(input.value, "");
    input.value = "";
    input.focus();
})

input.addEventListener("keypress", function(event) {
    suggestions = [];
    const keys = Object.keys(sessionStorage);
    const inputCurrentVale = input.value
    keys.forEach(key => function() {
        if (inputCurrentVale.length > key) {}
        if (key.substring(inputCurrentVale.length) === input) {
            suggestions.add(key);
        }
    })
})