const dataManager = {

 getJournalEntries: () => {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    postToApi: function (createObject) {
        fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createObject)
    });

    }}



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
