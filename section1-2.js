// section 1-2
'use strict'

document.addEventListener('DOMContentLoaded', function () {

    // get input file
    const formImage = document.getElementById('formImage')
    const formPreview = document.getElementById('formPreview')

    // change in input file
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0])
    })
    function uploadFile(file) {
        // type of file
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Only pictures')
            formImage.value = ''
            return
        }

        // check size of file
        if (file.size > 2 * 1024 * 1024) {
            alert('File must be less than 2 MB')
            return
        }

        var reader = new FileReader()
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="photo">`
        }
        reader.onerror = function (e) {
            alert ('Error')
        }
        reader.readAsDataURL(file)
    }
})