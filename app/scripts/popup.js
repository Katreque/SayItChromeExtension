'use strict';

(function () {
  'use strict';

  var kappa = function kappa() {
    console.log('Seu Kappa!');
  };

  var pride = function pride() {
    console.log('Seu KappaPride!');
  };

  var fon = function fon() {
    console.log('Fon!');
  };

  document.getElementById('kappa').onclick = kappa;
  document.getElementById('pride').onclick = pride;
  document.getElementById('fon').onclick = fon;
})();