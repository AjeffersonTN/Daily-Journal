const putOnDOM = document.querySelector(".entryLog")

document.querySelector("#sadRadioButton").addEventListener("click",  (event) => {
    putOnDOM.innerHTML = ""
    dataManager.getJournalEntries().then(entries=> {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.mood === "Sad") {
               const sadEntry = makeJournalEntryComponentObject.makeJournalEntryComponent(entry)
               putOnDOM.innerHTML += sadEntry;
            }
        });
    })

})
document.querySelector("#happyRadioButton").addEventListener("click",  (event) => {
    putOnDOM.innerHTML = ""
    dataManager.getJournalEntries().then(entries=> {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.mood === "Happy") {
               const happyEntry = makeJournalEntryComponentObject.makeJournalEntryComponent(entry)
               putOnDOM.innerHTML += happyEntry;
            }
        });
    })

})
document.querySelector("#chillRadioButton").addEventListener("click",  (event) => {
    putOnDOM.innerHTML = ""
    dataManager.getJournalEntries().then(entries=> {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.mood === "Ok") {
               const okEntry = makeJournalEntryComponentObject.makeJournalEntryComponent(entry)
               putOnDOM.innerHTML += okEntry;
            }
        });
    })

})
//change to method on an object
// let displayOnPageObject = {
//  displayOnPage(putItOn){
//     putOnDOM.innerHTML += putItOn;
//     }
// }
//add event listeners to radio buttons in order to display filter selctions from apu
//add event listeneter to recordbutton to post entries to API and recall the fetch
document.querySelector("#recordButton").addEventListener("click", () => {

    let concept = document.querySelector("#conceptsCovered").value
    let date = document.querySelector("#inputDate").value
    let entry = document.querySelector("#journalEntry").value
    let mood = document.querySelector("#dailyMood").value

    let objectJournalEntries =
    {
        concept: concept,
        date: date,
        entry: entry,
        mood: mood
    }

    dataManager.postToApi(objectJournalEntries)
    //may not need below because it will post to api and we will recall data from api
    // makeJournalEntryComponentObject.makeJournalEntryComponent(objectJournalEntries)
    //recall data from api clear dom on entry component
    document.querySelector("#journalEntry").innerHTML= ""
})

//function to add-to/modify the DOM
// let displayOnPage = (putItOn) => {
//     putOnDOM.innerHTML += putItOn;
// }
// const displayOnPageObject = Object.create(displayOnPage); COME BACK LATER
