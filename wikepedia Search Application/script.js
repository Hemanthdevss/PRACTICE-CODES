let inputEl = document.getElementById("input");
let spinnerEl = document.getElementById("spinner");
let resultEl = document.getElementById("result");





let inputValue = inputEl.value ;

function createAndAppendItems(result) {
    let { title , link , description } = result;

    let oneResultItem = document.createElement("div");
    resultEl.appendChild(oneResultItem);

    let titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.classList = "titleStyle"
    titleEl.href = link;
    titleEl.target = "_blank";
    oneResultItem.appendChild(titleEl);

    let breakEl = document.createElement("br");
    oneResultItem.appendChild(breakEl)

    let linkEl = document.createElement("a");
    linkEl.textContent = link;
    linkEl.classList = "linkStyle"
    linkEl.href = link;
    linkEl.target = "_blank";
    oneResultItem.appendChild(linkEl);

    let breakEl = document.createElement("br");
    oneResultItem.appendChild(breakEl)

    let paragraphEl = document.createElement("p");
    paragraphEl.classList = "paraStyle"
    paragraphEl.textContent = description;
    oneResultItem.appendChils(paragraphEl);


}

function displayresults(search_results) {
    spinnerEl.classList.add("d-none");

    for (let result of search_results) {
        createAndAppendItems(result);
    }
}

function result(event){
    if (event.key === "Enter") {
        inputValue = inputEl.value;


        spinnerEl.classList.remove("d-none");
        resultEl.textContent = "";

        let url = "https://apis.ccbp.in/wiki-search?search=" + inputValue;
        let options = {
            method : "GET"
        }

        fetch(url,options)
            .then (function(response){
                return response.json;
            })
            .then (function(jsonData){
                let { search_results } = jsonData;
                displayresults(search_results);
            })


    }
}

inputEl.addEventListener("keydown",result);
