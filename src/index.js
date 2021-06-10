export default function (Alpine) {
    Alpine.magic('clipboard', () => {
        return function (target) {
            if (typeof target === 'function') {
                target = target()
            }

            return window.navigator.clipboard.writeText(target)
        }
    })
}