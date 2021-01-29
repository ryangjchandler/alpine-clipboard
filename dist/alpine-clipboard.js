const AlpineClipboard = {
  start() {
    if (!window.Alpine) {
      throw new Error('Alpine is required for `alpine-clipboard` to work.');
    }

    Alpine.addMagicProperty('clipboard', () => {
      return function (target) {
        return window.navigator.clipboard.writeText(target);
      };
    });
  }

};

const deferrer = window.deferLoadingAlpine || (callback => callback());

window.deferLoadingAlpine = function (callback) {
  AlpineClipboard.start();
  deferrer(callback);
};

export default AlpineClipboard;
//# sourceMappingURL=alpine-clipboard.js.map
