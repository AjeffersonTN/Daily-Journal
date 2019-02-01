 //function to iterate over the array and invoke makeJournalEntryComponent
function loopTheEntries (entries){
    for (let i = 0; i < entries.length; i++) {
    let currentOne = entries[i];
    let returnFromMAGA = makeJournalEntryComponent(currentOne) //had to capture the input by setting equal to a variable in order to utlize
   displayOnPage(returnFromMAGA)

}}

//Function for creating the HTML representation
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
