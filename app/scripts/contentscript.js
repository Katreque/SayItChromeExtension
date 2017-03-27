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

  var callbackk1 = function callbackk1() {
    chrome.runtime.sendMessage(objeto.detail);
  };

  chrome.runtime.onMessage.addListener(function (evt) {
    console.log(evt);
    objeto.detail.message = evt.text;
    return callback();
  }), false;

  window.addEventListener('PageParaExtensao', function (evt) {
    return new Promise(function (res, rej) {
      return callbackk1();
    });
  }, false);

  window.removeEventListener('PageParaExtensao', function (evt) {});
})();