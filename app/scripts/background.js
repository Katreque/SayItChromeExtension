'use strict';

(function () {
  'use strict';

  console.log('background está funcionando está up!');

  chrome.runtime.onMessage.addListener(function (evt, sender, sendResponse) {
    return new Promise(function (res, rej) {
      var port = chrome.runtime.connectNative('kappa.native');
      console.log('Mandando a churrasqueira controle remoto!');

      port.postMessage({ 'text': evt.message });

      return new Promise(function (res, rej) {
        port.onMessage.addListener(function (msg) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, msg);
            console.log('Mandando de volta para a content!');
          });
        });

        port.onDisconnect.addListener(function () {
          console.log('Desconectado, ao VIVASSO!');
        });
      });
    });
  }), false;
})();