'use strict';

(function () {
  'use strict';

  var objeto = {
    detail: {
      message: ''
    }
  };

  var callback = function callback() {
    var k = new CustomEvent('ExtensaoParaPage', objeto);
    window.dispatchEvent(k);
  };

  var callbackk1 = function callbackk1(msg) {
    chrome.runtime.sendMessage(msg);
  };

  chrome.runtime.onMessage.addListener(function (evt) {
    objeto.detail.message = evt.text;
    return callback();
  }), false;

  window.addEventListener('PageParaExtensao', function (evt) {
    return new Promise(function (res, rej) {
      return callbackk1(evt.detail);
    });
  }, false);

  window.removeEventListener('PageParaExtensao', function (evt) {});
})();