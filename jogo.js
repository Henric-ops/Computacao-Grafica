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
      this.jogador.setAnimacao(this.frames.reverse());
    }
    if (this.jogador.px < 0) {
      this.jogador.setVelocidade(3, 0);
      this.jogador.setAnimacao(this.frames.reverse());
    }

    if(this.esquerda){
      this.jogador.setVelocidade(-3, 0);
      this.jogador.setAnimacao(this.frames.reverse());
    }

    if(this.direita){
      this.jogador.setVelocidade(3, 0);
      this.jogador.setAnimacao(this.frames.reverse());
    }

    if(this.acima){
      this.jogador.setVelocidade(0, -3);
    }

    if(this.abaixo){
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
  new MeuJogo("Meu Primeiro Jogo com Sprite", "meuCanvas", 60, 800, 600);
});
