/*
    OBJETIVO - quando clicarmos no botão temos que mostrar 
    a imagem de fundo correspondente
    p1 - pegar o elemento HTML dos botões
    p2 - identificar o clique do usuário no botão
    p3 - desmarcar o botão selecionado anterior
    p4 - marcar o botão clicado como se estivesse selecionado
    p5 - esconder a imagem de fundo anterior
    p6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/
//p1 - pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


// p2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //p3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //p4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //p5 - esconder a imagem de fundo anterior
         esconderImagemativa();

         //p6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
         mostrarImagemDeFundo(indice);

        })
    })
  
        function mostrarImagemDeFundo(indice) {
            imagens[indice].classList.add('ativa');
        }

        function selecionarBotaoCarrossel(botao) {
            botao.classList.add('selecionado');
        }

        function esconderImagemativa() {
            const imagemAtiva = document.querySelector('.ativa');
            imagemAtiva.classList.remove('ativa');
        }

        function desativarBotaoSelecionado() {
            const botaoSelecionado = document.querySelector('.selecionado');
            botaoSelecionado.classList.remove('selecionado');
        }
   




