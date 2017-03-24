'use strict';

(function () {
  'use strict';

  var objeto = {
    detail: {
      message: 'E eu sou o Jô Soares!'
    }
  };

  var callback = function callback(evt) {
    var k = new CustomEvent('ExtensaoParaPage', objeto);
    window.dispatchEvent(k);
  };

  var callback1 = function callback(evt) {
    chrome.runtime.sendMessage(objeto.detail);
  };

  window.addEventListener('PageParaExtensao', function (evt) {
    return new Promise(function (res, rej) {
      callback1(evt);
      return callback(evt);
    });
  }, false);

  window.removeEventListener('PageParaExtensao', function (evt) {});
})();