async function getSuggestion() {
const response = await fetch('https://apis.scrimba.com/bored/api/activity')
const data = await response.json()

console.log(data)
}

getSuggestion()


//.then(data=> console.log(data))