//Option 1

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
    })
    .finally(() => console.log('The operation was completed successfully'))

//Option 2

fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => {
        const imgElement = document.createElement('img')
        imgElement.src = data.message
        imgElement.alt = 'random dog picture'
        document.getElementById('img-container').appendChild(imgElement)
    })

