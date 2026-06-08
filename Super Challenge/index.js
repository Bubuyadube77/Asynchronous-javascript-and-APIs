function getImagePromise(url) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.alt = 'scenic image'
            img.addEventListener('load', ()=> resolve(img))
            img.addEventListener('error', ()=> reject(new Error (`failed to load image: ${url}`)))
        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic'
]

async function preLoadImages(imageUrlArr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')

    const promises = imageUrlArr.map((url)=> getImagePromise(url))

    try {
        const results = await Promise.all(promises)
        console.log('All images have been uploaded successfully')
        uploadContainer.style.display = 'none'
        results.forEach((img) => imgContainer.appendChild(img))
    }

    catch(err) {
        console.log(err)
        uploadContainer.innerHTML += `<p style="color:red">${err.message}</p>`
    }
/*
1. Create an array of promises using getImagePromise
2. Save results of calling all of those promises in one go to the const 'results'
3. If the promise resolves:
    - log 'All images loaded successfully'
    - hide 'upLoadContainer'
    - iterate over the results and render them to imgContainer
4. if the promises reject:
    - catch and log the error
*/

}

document.getElementById('submit-imgs').addEventListener('click', ()=> preLoadImages(images))
