/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
const jogador = 1;
const encerrou = false;


export function verificarVencedor(tab) {
  let vencedor = false;
  let simbolo = '-';
  if (tab[0] === tab[1] && tab[1] === tab[2] && tab[0] !== '-') {
    vencedor = true;
    simbolo = tab[0];
  }

  if (tab[3] === tab[4] && tab[4] === tab[5] && tab[3] !== '-') {
    vencedor = true;
    simbolo = tab[3];
  }

  if (tab[6] === tab[7] && tab[7] === tab[8] && tab[6] !== '-') {
    vencedor = true;
    simbolo = tab[6];
  }

  if (tab[0] === tab[3] && tab[3] === tab[6] && tab[0] !== '-') {
    vencedor = true;
    simbolo = tab[0];
  }

  if (tab[1] === tab[4] && tab[4] === tab[7] && tab[1] !== '-') {
    vencedor = true;
    simbolo = tab[1];
  }

  if (tab[2] === tab[5] && tab[5] === tab[8] && tab[2] !== '-') {
    vencedor = true;
    simbolo = tab[2];
  }

  if (tab[0] === tab[4] && tab[4] === tab[8] && tab[0] !== '-') {
    vencedor = true;
    simbolo = tab[0];
  }

  if (tab[2] === tab[4] && tab[4] === tab[6] && tab[2] !== '-') {
    vencedor = true;
    simbolo = tab[2];
  }

  if (vencedor) {
    if (simbolo === 'o') {
      return 1;
    }
    return -1;
  }
  let empate = true;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === '-') {
      empate = false;
    }
  }
  if (empate) {
    return 0;
  }

  return 99;
}

function minimax(tab, player) {
  const jogadasPossiveis = [];
  let melhorValor = 99;
  let valorTabuleiro = 0;

  valorTabuleiro = verificarVencedor(tab);
  if (valorTabuleiro === -1 || valorTabuleiro === 1 || valorTabuleiro === 0) {
    return valorTabuleiro;
  }

  player = player === 0 ? 1 : 0;

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === '-') {
      jogadasPossiveis.push(i);
    }
  }

  for (let i = 0; i < jogadasPossiveis.length; i++) {
    const jogada = jogadasPossiveis[i];
    if (player === 0) {
      tab[jogada] = 'o';
    } else {
      tab[jogada] = 'x';
    }
    valorTabuleiro = minimax(tab, player);
    tab[jogada] = '-';

    if (melhorValor === 99) {
      melhorValor = valorTabuleiro;
    } else if (player === 0) {
      if (valorTabuleiro > melhorValor) {
        melhorValor = valorTabuleiro;
      }
    } else if (valorTabuleiro < melhorValor) {
      melhorValor = valorTabuleiro;
    }
  }
  return melhorValor;
}

export function jogadaComputador(tabuleiro) {
  const jogadasPossiveis = [];
  const tabuleiros = [];
  let melhorValor = 99;
  let valorTabuleiro = 0;
  let melhorJogada = -1;
  let numeroBotao;
  console.log('---------');

  if (!encerrou) {
    for (let i = 0; i < tabuleiro.length; i++) {
      if (tabuleiro[i] === '-') {
        jogadasPossiveis.push(i);
      }
    }

    for (let i = 0; i < jogadasPossiveis.length; i++) {
      const jogada = jogadasPossiveis[i];
      if (jogador === 0) {
        tabuleiro[jogada] = 'o';
      } else {
        tabuleiro[jogada] = 'x';
      }

      tabuleiros.push([...tabuleiro]);

      valorTabuleiro = minimax(tabuleiro, jogador);
      tabuleiro[jogada] = '-';

      if (melhorValor === 99) {
        melhorValor = valorTabuleiro;
        melhorJogada = jogada;
      } else if (jogador === 0) {
        if (valorTabuleiro > melhorValor) {
          melhorValor = valorTabuleiro;
          melhorJogada = jogada;
        }
      } else if (valorTabuleiro < melhorValor) {
        melhorValor = valorTabuleiro;
        melhorJogada = jogada;
      }
    }

    if (melhorJogada < 0) {
      const quantidadeJogadas = jogadasPossiveis.length;
      const indice = Math.floor(Math.random() * quantidadeJogadas);
      numeroBotao = jogadasPossiveis[indice];
    } else {
      numeroBotao = melhorJogada;
    }
  }
  console.log(jogadasPossiveis);
  console.log(numeroBotao);

  return {
    target: numeroBotao,
    possibilities: tabuleiros,
  };
}

export function verificarFimDeJogo(tabuleiro) {
  switch (verificarVencedor(tabuleiro)) {
    case -1:
      alert('X ganhou!');
      return true;
    case 1:
      alert('O ganhou!');
      return true;
    case 0:
      alert('Empate!');
      return true;
    default:
      return false;
  }
}