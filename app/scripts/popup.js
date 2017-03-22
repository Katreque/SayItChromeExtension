(function () {
  'use strict';

  /*chrome.storage.local.remove('value');

    chrome.storage.local.set({ 'value': 'Fon!' }, function () {
    console.log('Oh Right!');

     localStorage.setItem('kappa', 'Churrasqueira Controle Remoto');
  });*/

  //Por localStorage
  console.log(localStorage.getItem('kappa'));

  //Por API
  chrome.storage.local.get('value', function (res) {
    console.log(res);
  });

  var kappa = function kappa() {
    console.log('Seu Kappa!');
  };

  var pride = function pride() {
    console.log('Seu KappaPride!');
  };

  var fon = function fon() {
    console.log('Fon!');
  };
})();
