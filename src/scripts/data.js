const API = {
    getJournalEntries () {//a function on an object is a method
        return fetch("http://localhost:3000/entries")
        //the fetch passes the information to the .then which parses it then pasess it to the .then on the journal.js
            .then(response => response.json())
    }
}

/* Step before API Acces Module 
//this code fetches and calls the loopTheEntries function
fetch(`http://localhost:3000/entries`)
    .then(response => response.json())
    .then(entries => {
        loopTheEntries(entries)

})
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)
// API.getJournalEntries().then(loopTheEntries(reponse))

