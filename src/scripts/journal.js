fetch(`http://localhost:3000/entries`)
    .then(response => response.json())
    .then(entries => {
        //function to iterate over the array and invoke makeJournalEntryComponent
    for (let i = 0; i < entries.length; i++) {
        let currentOne = entries[i];

        let returnFromMAGA = makeJournalEntryComponent(currentOne) //had to capture the input by setting equal to a variable in order to utlize
       displayOnPage(returnFromMAGA)

    }
}

    )
// journalEntries.push();
// console.log(journalEntries )
const putOnDOM = document.querySelector(".entryLog")

//Function for HTML representation
let makeJournalEntryComponent = (currentOne) => {

    return `
    <div class="entryLog">
    <p><strong>${currentOne.concept}</strong></p>
    <p>Date: ${currentOne.date}</p>
    <p>Entry: ${currentOne.entry}</p>
    <p>Mood: ${currentOne.mood}</p>
    </div>
    `
}
//function to add to DOM
let displayOnPage = (putItOn) => {
    putOnDOM.innerHTML += putItOn;
}

/* Journal 3 Code

let journalEntries  = [
    {
        date: "01/12/18",
        concepts: "JavaScript Functions",
        entry: "Need Practice",
        mood: "Chill",
    },

    {
        date: "01/12/18",
        concepts: "Querying the DOM",
        entry: "Need Practice",
        mood: "Happy",
    },

    {
        date: "01/12/18",
        concepts: "JavaScript Objects",
        entry: "Need Practice",
        mood: "Chill",
    },

    {
        date: "01/12/18",
        concepts: "Git Hub Workflow",
        entry: "Need Practice",
        mood: "Sad",
    }

]
// journalEntries.push();
// console.log(journalEntries )
let putOnDOM = document.querySelector(".entryLog")

//Function for HTML representation
let makeJournalEntryComponent = (currentOne) => {

    return `
    <div class="entryLog">
    <p><strong>${currentOne.concepts}</strong></p>
    <p>Date: ${currentOne.date}</p>
    <p>Entry: ${currentOne.entry}</p>
    <p>Mood: ${currentOne.mood}</p>
    </div>
    `
}
//function to add to DOM
let displayOnPage = (putItOn) => {
    putOnDOM.innerHTML += putItOn;
}
//function to iterate over the array and invoke makeJournalEntryComponent
const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        let currentOne = entries[i];
        console.log(currentOne)
       let returnFromMAGA = makeJournalEntryComponent(currentOne) //had to capture the input by setting equal to a variable in order to utlize
       displayOnPage(returnFromMAGA)

    }
}
renderJournalEntries(journalEntries)

*/