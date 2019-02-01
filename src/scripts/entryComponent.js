 //function to iterate over the array and invoke makeJournalEntryComponent
function loopTheEntries (entries){
    for (let i = 0; i < entries.length; i++) {
    let currentOne = entries[i];
    let returnFromMAGA = makeJournalEntryComponentObject.makeJournalEntryComponent(currentOne) //had to capture the input by setting equal to a variable in order to utlize
    displayOnPageObject.displayOnPage(returnFromMAGA)
    //used prior to making the displayOnPageObject
    // displayOnPage(returnFromMAGA)


}}

//Function for creating the HTML representation
makeJournalEntryComponentObject ={
    makeJournalEntryComponent(currentOne){
    return `
    <div class="entryLog">
    <p><strong>${currentOne.concept}</strong></p>
    <p>Date: ${currentOne.date}</p>
    <p>Entry: ${currentOne.entry}</p>
    <p>Mood: ${currentOne.mood}</p>
    </div>
    `
    }
}
/*
//Function for creating the HTML representation used prior to above
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
*/
