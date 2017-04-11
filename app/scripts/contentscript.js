'use strict';

(function () {
  'use strict';

  var objeto = {
    detail: {
      message: ''
    }
  };

  //Listener da page
  window.addEventListener('PageParaExtensao', function (evt) {
    return new Promise(function (res, rej) {
      //Envia mensagem para a background com o objeto recebido da página;
      chrome.runtime.sendMessage(evt);
      //console.log(evt);
    });
  }, false);

  //Remove listener depois que foi ouvido.
  window.removeEventListener('PageParaExtensao', function (evt) {});

  //Listener do background ao fim do processamento
  chrome.runtime.onMessage.addListener(function (evt) {
    //console.log(evt);
    objeto.detail.message = evt.text;
    //Envia o objeto tratado para a page novamente
    var k = new CustomEvent('ExtensaoParaPage', objeto);
    window.dispatchEvent(k);
  }), false;
})();