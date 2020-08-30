const AlpineClipboard = {
    start() {
        if (!window.Alpine) {
            throw new Error('Alpine is required for `alpine-clipboard` to work.')
        }

        Alpine.addMagicProperty('clipboard', () => {
            return function (target) {
                let value = target

                if (typeof value !== 'string') {
                    try {
                        value = JSON.stringify(value)
                    } catch (e) {
                        console.warn(e)
                    }
                }

                const container = document.createElement('textarea')

                container.value = value
                container.setAttribute('readonly', '')
                container.style.cssText = 'position:fixed;pointer-events:none;z-index:-9999;opacity:0;'

                document.body.appendChild(container)

                if (navigator.userAgent && navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    container.contentEditable = true
                    container.readOnly = true

                    const range = document.createRange()

                    range.selectNodeContents(container)

                    const selection = window.getSelection()

                    selection.removeAllRanges()
                    selection.addRange(range)

                    container.setSelectionRange(0, 999999)
                } else {
                    container.select()
                }

                try {
                    document.execCommand('copy')
                } catch (e) {
                    console.warn(err)
                }

                document.body.removeChild(container)
            }
        })
    }
}

const alpine = window.deferLoadingAlpine || ((callback) => callback())

window.deferLoadingAlpine = function (callback) {
    AlpineClipboard.start()

    alpine(callback)
}

export default AlpineClipboard