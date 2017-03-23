'use strict';

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

  angular.module('app').controller('mainController', function () {
    var self = this;

    this.kappa = function () {
      console.log('Seu Kappa!');
    };

    this.pride = function () {
      console.log('Seu KappaPride!');
    };

    this.fon = function () {
      console.log('Fon!');
    };
  });
})();