sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
const body = document.querySelector("body");

const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");

const searchDiv = document.createElement("div");
searchDiv.classList.add("searchDiv");

const resultsDiv = document.createElement("div");
resultsDiv.classList.add("resultsDiv");

const searchButton = document.createElement("button");
searchButton.type = "submit";
searchButton.classList.add("searchButton");

const input = document.createElement("input");
input.type = "search";
input.classList.add("input");

searchDiv.append(searchButton, input);
mainDiv.append(searchDiv, resultsDiv)
body.append(mainDiv);

let results = new Set();

searchButton.addEventListener("click", function(event) {
    if (!input.value) {
        return;
    }
    sessionStorage.setItem(input.value, "");
    input.value = "";
    input.focus();
})

input.addEventListener("keyup", function(event) {

    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        searchButton.click();
        return;
    }

    results = new Set();
    const keys = Object.keys(sessionStorage);
    const inputCurrentValue = input.value
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (inputCurrentValue.length > key) {
            continue;
        } else if (key.substring(0, inputCurrentValue.length) === inputCurrentValue){
            results.add(key);
        }
    }
    displayResults();
})

const displayResults = function() {
    resultsDiv.innerHTML = "";
    if (results.size === 0) {
        const div = document.createElement("div");
        div.classList.add("resultDiv", "noResultColor");
        div.innerText = "No Results found!";
        resultsDiv.append(div);
    } else {
        results.forEach(function(result) {
            const div = document.createElement("div");
            div.classList.add("resultDiv", "resultColor");
            div.innerText = result;
            resultsDiv.append(div);
        });
    }
}