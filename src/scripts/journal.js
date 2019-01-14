/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const objectsJournalEntry = {
    dayOfWeek: "Monday",
    concepts: "JavaScript Functions",
    mood: "Chill",
    levelOfComprehension: "Need Practice",     
}
const objectsJournalEntry1 = {
    dayOfWeek: "Tuesday",
    concepts: "Querying the DOM",
    mood: "Happy",
    levelOfComprehension: "Need Practice",     
}
const objectsJournalEntry2 = {
    dayOfWeek: "Wednesday",
    concepts: "JavaScript Objects",
    mood: "Chill",
    levelOfComprehension: "Need Practice",     
}
const objectsJournalEntry3 = {
    dayOfWeek: "Thursday",
    concepts: "Git Hub Workflow",
    mood: "Sad",
    levelOfComprehension: "Understand",     
}


let dailyEntries = []
dailyEntries.push(objectsJournalEntry, objectsJournalEntry1, objectsJournalEntry2, objectsJournalEntry3);
console.log(dailyEntries)