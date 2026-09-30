class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    // Posição inicial do jogador (controlado pelo mouse)
    this.x = 400;
    this.y = 300;
    this.raioJogador = 20;

    // Pontuação
    this.pontos = 0;
    this.pontosParaVencer = 10;
    this.venceu = false;

    // Objetos espalhados pela tela
    this.objetos = [];
    this.maxObjetos = 3;
    this.tamanhoObjeto = 30;

    for (let i = 0; i < this.maxObjetos; i++) {
      this.objetos.push(this.criarObjetoAleatorio());
    }

    // Timer que garante reposição de objetos a cada 3s, caso faltem
    this.iniciarTimer("reporObjetos", 3, true, () => {
      if (!this.venceu && this.objetos.length < this.maxObjetos) {
        this.objetos.push(this.criarObjetoAleatorio());
      }
    });
  }

  criarObjetoAleatorio() {
    const margem = 60;
    return {
      x:
        margem +
        Math.random() * (this.larguraTela() - margem * 2 - this.tamanhoObjeto),
      y:
        margem +
        Math.random() * (this.alturaTela() - margem * 2 - this.tamanhoObjeto),
      largura: this.tamanhoObjeto,
      altura: this.tamanhoObjeto,
    };
  }

  atualizar() {
    if (this.venceu) return;

    // Laço invertido: percorrer de trás para frente evita bagunçar os
    // índices do array quando um item é removido com splice()
    for (let i = this.objetos.length - 1; i >= 0; i--) {
      const obj = this.objetos[i];

      const colidiu = this.colisao(
        this.x - this.raioJogador,
        this.y - this.raioJogador,
        this.raioJogador * 2,
        this.raioJogador * 2,
        obj.x,
        obj.y,
        obj.largura,
        obj.altura,
      );

      if (colidiu) {
        this.objetos.splice(i, 1); // remove o objeto tocado
        this.pontos++;

        if (this.pontos >= this.pontosParaVencer) {
          this.venceu = true;
          this.pararTimer("reporObjetos");
        } else {
          this.objetos.push(this.criarObjetoAleatorio()); // novo objeto aparece
        }
      }
    }
  }

  desenhar() {
    this.limparTela("lightblue");

    // Objetos
    this.preenchimento("gold");
    for (const obj of this.objetos) {
      this.retangulo(obj.x, obj.y, obj.largura, obj.altura, Estilo.PREENCHIDO);
    }

    // Jogador (círculo que segue o mouse)
    this.preenchimento("darkblue");
    this.circulo(
      this.x - this.raioJogador,
      this.y - this.raioJogador,
      this.raioJogador * 2,
      this.raioJogador * 2,
      Estilo.PREENCHIDO,
    );

    // Placar
    this.preenchimento("black");
    this.texto(
      `Pontos: ${this.pontos} / ${this.pontosParaVencer}`,
      20,
      30,
      22,
      "bold",
    );

    if (this.venceu) {
      this.preenchimento("darkgreen");
      this.gc.textAlign = "center";
      this.texto(
        "Você venceu!",
        this.larguraTela() / 2,
        this.alturaTela() / 2,
        48,
        "bold",
      );
      this.gc.textAlign = "left";
    }
  }

  movimentoDoMouse(e) {
    this.cliqueDoMouse(e);
  }

  cliqueDoMouse(e) {
    this.x = e.x;
    this.y = e.y;
  }
}

window.addEventListener("load", () => {
  new MeuJogo("Jogo com mouse", "meuCanvas", 800, 600);
});
