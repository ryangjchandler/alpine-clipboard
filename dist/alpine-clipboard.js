(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    function clipboard (Alpine) {
      Alpine.magic('clipboard', () => {
        return function (target) {
          if (typeof target === 'function') {
            target = target();
          }

          if (typeof target === 'object') {
            target = JSON.stringify(target);
          }

          return window.navigator.clipboard.writeText(target);
        };
      });
    }

    document.addEventListener('alpine:initializing', () => {
      clipboard(window.Alpine);
    });

})));
//# sourceMappingURL=alpine-clipboard.js.map
