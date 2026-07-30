JavaScript
// Aguarda toda a página carregar antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos da tela pelos IDs
    const btnFonte = document.getElementById('btn-fonte');
    const botaoSOS = document.getElementById('botao-sos');

    // 1. FUNÇÃO PARA AUMENTAR/DIMINUIR A LETRA
    btnFonte.addEventListener('click', () => {
        // Liga/desliga a classe "texto-maior" no corpo da página
        document.body.classList.toggle('texto-maior');
        
        // Altera o texto do botão para o usuário saber o que vai acontecer se clicar de novo
        if (document.body.classList.contains('texto-maior')) {
            btnFonte.textContent = '🔍 Diminuir Letra';
        } else {
            btnFonte.textContent = '🔎 Aumentar Letra';
        }
    });

    // 2. FUNÇÃO DE SEGURANÇA PARA O BOTÃO SOS
    botaoSOS.addEventListener('click', (evento) => {
        // Abre uma caixa de confirmação no celular/computador
        const resposta = confirm("Você realmente deseja ligar para o número de emergência?");
        
        // Se o usuário clicar em "Cancelar", impede a ligação
        if (!resposta) {
            evento.preventDefault(); 
        }
    });

// Aumenta a fonte da página em 2px a cada clique (limitada a 28px).
// Se preferir um comportamento de toggle, me diga que eu troco.
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-fonte');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const root = document.documentElement; // <html>
    const current = parseFloat(getComputedStyle(root).fontSize) || 16;
    const newSize = Math.min(28, current + 2); // máximo 28px
    root.style.fontSize = newSize + 'px';

    // Atualiza texto do botão com o tamanho atual (opcional)
    btn.textContent = `🔎 Aumentar Letra (${Math.round(newSize)}px)`;
  });
});}
