import clipboard from '../src/index'

document.addEventListener('alpine:initializing', () => {
    clipboard(window.Alpine)
})