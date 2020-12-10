const divEffect = document.querySelector('#effect-items')
const divThumb = document.querySelector('#thumb-bar')
const btnSubmit = document.querySelector('button')


// Make the form elements hidden
divEffect.style.visibility = 'hidden'

// Show the thumbnail images
let thumbHTML = ''
for (i=1; i<=5; i++) {
    thumbHTML += `<img class="thumb-img" src="images/pic${i}.jpg">`
}
document.querySelector('#thumb-bar').innerHTML = thumbHTML


// Thumbnails mousuover event
divThumb.addEventListener('mouseover', (e) => {
    e.stopPropagation()
    
    divEffect.style.visibility = 'visible'

    const filename = getRelativePath(e.target.src)
    document.querySelector('.displayed-img').outerHTML = `<img class="displayed-img" src="${filename}">`
})


// Submit button clicked event
btnSubmit.addEventListener('click', () => {
    const input = document.querySelector('input')
    const inputEffect =input.value.trim()

    input.value = ''

    if (inputEffect == 'blur') {
        const dispImage = document.querySelector('.displayed-img')
        const imgSrc = getRelativePath(dispImage.src)
        const newSrc = imgSrc.substring(0, imgSrc.length-4) + 'B.jpg'
        dispImage.outerHTML = `<img class="displayed-img" src="${newSrc}">`
    } else {
        alert('Enter a proper effect name. (ex. blur)')
    }
})


// getRelative function: return the relative path of a file/directory
function getRelativePath(absolutePath) {
    const rootPath = window.location.toString()
    const relativePath = absolutePath.substring(rootPath.lastIndexOf('/')+1)
    return relativePath
}

