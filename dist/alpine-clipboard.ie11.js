(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AlpineClipboard = factory());
}(this, (function () { 'use strict';

    var AlpineClipboard = {
      start: function start() {
        if (!window.Alpine) {
          throw new Error('Alpine is required for `alpine-clipboard` to work.');
        }

        Alpine.addMagicProperty('clipboard', function () {
          return function (target) {
            var value = target;

            if (typeof value === 'function') {
              value = value();
            } else if (typeof value !== 'string') {
              try {
                value = JSON.stringify(value);
              } catch (e) {
                console.warn(e);
              }
            }

            var container = document.createElement('textarea');
            container.value = value;
            container.setAttribute('readonly', '');
            container.style.cssText = 'position:fixed;pointer-events:none;z-index:-9999;opacity:0;';
            document.body.appendChild(container);

            if (navigator.userAgent && navigator.userAgent.match(/ipad|ipod|iphone/i)) {
              container.contentEditable = true;
              container.readOnly = true;
              var range = document.createRange();
              range.selectNodeContents(container);
              var selection = window.getSelection();
              selection.removeAllRanges();
              selection.addRange(range);
              container.setSelectionRange(0, 999999);
            } else {
              container.select();
            }

            try {
              document.execCommand('copy');
            } catch (e) {
              console.warn(err);
            }

            document.body.removeChild(container);
          };
        });
      }
    };

    var alpine = window.deferLoadingAlpine || function (callback) {
      return callback();
    };

    window.deferLoadingAlpine = function (callback) {
      AlpineClipboard.start();
      alpine(callback);
    };

    return AlpineClipboard;

})));
//# sourceMappingURL=alpine-clipboard.ie11.js.map
