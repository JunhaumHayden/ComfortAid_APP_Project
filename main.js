var pgAtual = "#home";
function mostraPagina(pg) {
    $(pgAtual).hide();
    $(pg).show();
    pgAtual = pg;
}

//Registra o serviceWorker da aplicação para cache de recursos offline
if ('serviceWorker' in navigator) {  
    //verifica se é possivel a instalacao no navegador
    navigator.serviceWorker.register("./service-worker.js");
    //realizando ainstalacao
}

//Verifica se o app pode ser instalado e mostra o botão
var pedidoInstalacao;
window.addEventListener('beforeinstallprompt', function(installPrompt) {
    if(installPrompt){
        $("#installAppBt").show();
        pedidoInstalacao = installPrompt;
    }
});

//Inicia a instalação do app
function installApp() {
    pedidoInstalacao.prompt(); 
}