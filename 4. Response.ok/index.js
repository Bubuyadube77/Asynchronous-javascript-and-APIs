try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (!response.ok) {
        throw new Error ('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
}

catch(err) {
console.log(err)
}

finally {
console.log('Operation has completed')
}