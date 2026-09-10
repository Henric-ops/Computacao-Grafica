class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.frames = ["img/imagens/frame_0.png", "img/imagens/frame_1.png"].map(
      (src) => {
        const frame = new Image();
        frame.src = src;
        return frame;
      },
    );
    this.jogador = new Sprite(32, 32);
    this.jogador.setAnimacao(this.frames);
    this.jogador.setVelocidade(2, 0);
  }
  atualizar() {
    this.jogador.atualizar();
    if (this.jogador.px > this.larguraTela() - this.jogador.l) {
      this.jogador.setVelocidade(-3, 0);
      this.jogador.setAnimacao(this.frames.reverse());
    }
    if (this.jogador.px < 0) {
      this.jogador.setVelocidade(3, 0);
      this.jogador.setAnimacao(this.frames.reverse());
    }
  }
  desenhar() {
    this.limparTela("lightblue");
    this.desenharSprite(this.jogador);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo com Sprite", "meuCanvas", 60, 800, 600);
});
