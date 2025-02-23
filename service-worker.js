/**
 * Versão do cache, é importante mudar o valor da variável 'version'
 * toda vez que algum dos arquivos em no array 'arquivos' for modificado
 * isso garante que a aplicação será atualizada nos clientes onde já exista
 * um cache salvo
 */
const version = 1
const cachename = 'comfortaid-v'+version

/**
 * Arquivos que serão salvos no cache para uso offline
 * O caminho para os arquivos deve ser completo e sem o dominio
 * Ex: arquivo logo.png
 *      URL: https://bpvifsc.github.io/template-app-pwa/imagens/logo.png
 *      Caminho: /template-app-pwa/imagens/logo.png
 * Ou utilizar caminhos relativos ao arquivo html aberto
 * Ex: arquivo aberto index.html (utilizar em PWA)
 *      URL: https://bpvifsc.github.io/template-app-pwa/index.html
 *      Caminho: ./imagens/logo.png
 */
const arquivos = [
    "./",
    "./index.html",
    "./comfortaid_user_env.html",
    "./main.js",
    "./service-worker.js",
    "./manifest.json",
    "./assets/css/style.css",
    "./assets/html/presentation.html",
    "/assets/forms/update-data.html",
    "/assets/forms/new-service.html",
    "./assets/js/script.js",
    "./assets/img/comfortaid01.jpg",
    "./assets/img/comfortaid02.jpg",
    "./assets/img/comfortaid03.jpg",
    "./assets/img/icone192.png",
    "./assets/img/icone512.png",
    "./assets/img/ig-logo.svg",
    "./assets/img/logo.png",
    "./assets/img/mail.svg",
    "./assets/img/tim-berners-lee.jpg",
    "./assets/img/wpp-logo.svg"
  ]

  /**
   * Cria o cache dos arquivos
   */
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cachename).then(function(cache) {
        return cache.addAll(arquivos);
      })
    );
  });
  
  /**
   * Verifica se existe uma versão em cache das páginas
   * Caso não seja possivel retorna o match(index) da catch
   * Está página pode ser tratada e retornar uma mensagem de erro/offline
   * É inicializado e executado junto com a aplicaçao
   */
  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      if (response !== undefined) {
        return response;
      } else {
         return fetch(event.request).then(function (response) { 
        // se estiver disponivel retorna um response
          let responseClone = response.clone();
          // se não estiver disponivel retorna o clone do cache  
          caches.open(cachename).then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('./indexx.html');
          // se nao estiver em nenhuma opcao retorna para alguma pagina, por exemplo o index
        });
      }
    }));
  });