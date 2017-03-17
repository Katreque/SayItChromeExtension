'use strict';

(function () {
  'use strict';

  var seLoiro = function seLoiro(evt) {
    evt.detail.message = 'E eu sou sua mãe! FONNN!';
    var k = new CustomEvent('PuloDoGatoDeVolta', evt);
    window.dispatchEvent(k);
  };

  window.addEventListener('PuloDoGato', function (evt) {
    return new Promise(function (res, rej) {
      return seLoiro(evt);
    });
  }, false);
})();