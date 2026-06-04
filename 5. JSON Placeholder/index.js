try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'GET'})
    console.log(response.ok)
    if (!response.ok) {
        throw new Error ('Something is wrong with the API')
    }
    const data = await response.json()
    console.log(data)
}

catch(err) {
    console.log(err)
}

finally {
    console.log('Operation completed')
}