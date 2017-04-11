'use strict';

(function () {
  'use strict';

  //console.log('Background está funcionando!');
  //Listener da contentscript

  chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    return new Promise(function (res, rej) {
      //console.log(msg);

      var port = chrome.runtime.connectNative('kappa.native');
      //console.log('Porta de comunicação aberta');

      port.postMessage({ 'text': msg.message });
      //console.log('Mensagem enviada');

      //Retorno da aplicação nativa
      return new Promise(function (res, rej) {
        port.onMessage.addListener(function (msg) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            //console.log(msg);
            chrome.tabs.sendMessage(tabs[0].id, msg);
            //console.log('Mandando de volta para a content!');
          });
        });

        port.onDisconnect.addListener(function () {
          //console.log('Fechando porta de comunicação');
        });
      });
    });
  }), false;
})();