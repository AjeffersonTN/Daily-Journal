const putOnDOM = document.querySelector(".entryLog")

//function to add-to/modify the DOM
let displayOnPage = (putItOn) => {
    putOnDOM.innerHTML += putItOn;
}