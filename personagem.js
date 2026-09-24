class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.frames = this.carregarFrames("homem", 5, "frames");
    this.framesInvertidos = [...this.frames].reverse();
    this.jogador = new Sprite(32, 32);
    this.jogador.setTamanho(64, 64);
    this.jogador.setAnimacao(this.frames);

    this.direita = false;
    this.esquerda = false;
  }

  atualizar() {
    if (this.esquerda && !this.direita) {
      this.jogador.setVelocidade(-3, 0);
      this.jogador.setAnimacao(this.framesInvertidos);
      
    } else if (this.direita && !this.esquerda) {
      this.jogador.setVelocidade(3, 0);
      this.jogador.setAnimacao(this.frames);
    } else {
      this.jogador.setVelocidade(0, 0);
    }

    this.jogador.atualizar();
    const limiteX = this.larguraTela() - this.jogador.l;
    this.jogador.setPosicao(
      Math.max(0, Math.min(this.jogador.px, limiteX)),
      this.jogador.py,
    );
  }

  desenhar() {
    this.limparTela("lightblue");
    this.desenharSprite(this.jogador);
    this.preenchimento("black");
    this.texto(`Posição X: ${Math.round(this.jogador.px)}`, 20, 35, 22, "bold");
  }

  teclaPressionada(e) {
    if (e.key === "ArrowLeft") {
      this.esquerda = true;
    }
    if (e.key === "ArrowRight") {
      this.direita = true;
    }
  }

  teclaLiberada(e) {
    if (e.key === "ArrowLeft") {
      this.esquerda = false;
    }
    if (e.key === "ArrowRight") {
      this.direita = false;
    }
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Atividade dos Guri", "meuCanvas", 800, 600, 60);
});
