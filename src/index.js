export default function (Alpine) {
    Alpine.magic('clipboard', () => {
        return function (target) {
            if (typeof target === 'function') {
                target = target()
            }

            if (typeof target === 'object') {
                target = JSON.stringify(target)
            }

            return window.navigator.clipboard.writeText(target)
        }
    })
}