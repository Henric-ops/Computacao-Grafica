class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.frames = this.carregarFrames("frame", 2, "img", 0);
    this.framesInvertidos = [...this.frames].reverse();
    this.jogador = new Sprite(32, 32);
    this.jogador.setAnimacao(this.frames);
    this.jogador.setVelocidade(2, 0);

    this.direita = false;
    this.esquerda = false;
    this.acima = false;
    this.abaixo = false;

    this.teclas = [];
  }

  atualizar() {
    this.jogador.atualizar();
    if (this.jogador.px > this.larguraTela() - this.jogador.l) {
      this.jogador.setVelocidade(-3, 0);
      this.jogador.setAnimacao(this.framesInvertidos);
    }
    if (this.jogador.px < 0) {
      this.jogador.setVelocidade(3, 0);
      this.jogador.setAnimacao(this.frames);
    }

    if (this.esquerda) {
      this.jogador.setVelocidade(-3, 0);
      this.jogador.setAnimacao(this.framesInvertidos);
    }

    if (this.direita) {
      this.jogador.setVelocidade(3, 0);
      this.jogador.setAnimacao(this.frames);
    }

    if (this.acima) {
      this.jogador.setVelocidade(0, -3);
    }

    if (this.abaixo) {
      this.jogador.setVelocidade(0, 3);
    }
  }
  desenhar() {
    this.limparTela("lightblue");
    this.desenharSprite(this.jogador);
  }

  teclaPressionada(e) {
    if (e.key === "ArrowUp") {
      this.acima = true;
    }
    if (e.key === "ArrowLeft") {
      this.esquerda = true;
    }

    if (e.key === "ArrowRight") {
      this.direita = true;
    }
    if (e.key === "ArrowDown") {
      this.abaixo = true;
    }
  }

  teclaLiberada(e) {
    if (e.key === "ArrowUp") {
      this.acima = false;
      this.jogador.setVelocidade(0, 0);
    }
    if (e.key === "ArrowLeft") {
      this.esquerda = false;
      this.jogador.setVelocidade(0, 0);
    }
    if (e.key === "ArrowRight") {
      this.direita = false;
      this.jogador.setVelocidade(0, 0);
    }
    if (e.key === "ArrowDown") {
      this.abaixo = false;
      this.jogador.setVelocidade(0, 0);
    }
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo com Sprite", "meuCanvas", 800, 600, 60);
});
