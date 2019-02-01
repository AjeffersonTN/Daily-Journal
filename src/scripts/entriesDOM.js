const putOnDOM = document.querySelector(".entryLog")
//change to method on an object
let displayOnPageObject = { 
 displayOnPage(putItOn){
    putOnDOM.innerHTML += putItOn;
    }
}
//function to add-to/modify the DOM
// let displayOnPage = (putItOn) => {
//     putOnDOM.innerHTML += putItOn;
// }
// const displayOnPageObject = Object.create(displayOnPage); COME BACK LATER
