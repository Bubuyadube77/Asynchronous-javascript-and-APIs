function preLoadImg (URL) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.addEventListener('load', ()=> resolve(img))
        img.addEventListener('error', ()=> reject('img has not loaded'))
        img.src = URL
        img.alt = 'A beautiful scene'
    })

}

try {
    const results = await preLoadImg('https://picsum.photos/600/400')
    console.log(results)
    document.getElementById('img-container').appendChild(results)
}
catch(error) {
    console.error(error)
}

