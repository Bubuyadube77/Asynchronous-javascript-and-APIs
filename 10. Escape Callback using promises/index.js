/* Option 1

function upLoadFile(callback) {
    console.log('Step 1: Uploading file...')
    setTimeout(()=> {
        callback() //call back the next step after 1 second
    }, 1000)
}

function processFile(callback) {
    console.log('Step 2: Processing file...')
    setTimeout(()=> {
        callback() //call back the next step after 1 second
    }, 1000)
}

function notifyUser(callback) {
    console.log('Step 3: Notifying User...')
    setTimeout(()=> {
        callback() //call back the next step after 1 second
    }, 1000)
}

upLoadFile(()=>
    processFile(()=>
        notifyUser(()=>
            console.log('All steps completed')
        )
    )
)

*/

// Option 2


function upLoadFile() {
    return new Promise((resolve, reject)=> {
        console.log('Step 1: Uploading file...')
        setTimeout(()=> {
            resolve() //call back the next step after 1 second
        }, 1000)
    })   
}

function processFile() {
    return new Promise((resolve, reject)=> {
        console.log('Step 2: Processing file...')
        setTimeout(()=> {
            resolve() //call back the next step after 1 second
        }, 1000)
    })   
}

function notifyUser() {
    return new Promise((resolve, reject)=> {
        console.log('Step 3: Notifying User...')
        setTimeout(()=> {
            resolve() //call back the next step after 1 second
        }, 1000)
    })
}

try {
    await upLoadFile()
    await processFile()
    await notifyUser()
    console.log('All steps completed')
}
catch(error){
    console.error(error)
}