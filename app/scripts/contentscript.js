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

  window.addEventListener('PageParaExtensao', function (evt) {
    return new Promise(function (res, rej) {
      return callback(evt);
    });
  }, false);

  window.removeEventListener('PageParaExtensao', function (evt) {});
})();