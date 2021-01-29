(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AlpineClipboard = factory());
}(this, (function () { 'use strict';

    const AlpineClipboard = {
      start() {
        if (!window.Alpine) {
          throw new Error('Alpine is required for `alpine-clipboard` to work.');
        }

        Alpine.addMagicProperty('clipboard', () => {
          return function (target) {
            if (typeof target === 'function') {
              target = target();
            }

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

    return AlpineClipboard;

})));
//# sourceMappingURL=alpine-clipboard.js.map
