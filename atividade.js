class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    const frameCasa = new Image();
    frameCasa.src = "img/imagens/frame_casa.png";
    this.casa = new Sprite(350, 390);
    this.casa.setAnimacao([frameCasa]);
    this.casa.l = 50;
    this.casa.a = 50;

    const frameArvore = new Image();
    frameArvore.src = "img/imagens/frame_arvore.png";
    this.arvore = new Sprite(245, 430);
    this.arvore.setAnimacao([frameArvore]);
    this.arvore.l = 100;
    this.arvore.a = 120;
  }

  atualizar() {
    this.casa.atualizar();
    this.arvore.atualizar();
  }

  desenhar() {
    this.limparTela("lightblue");
    this.desenharSprite(this.casa);
    this.desenharSprite(this.arvore);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo com Sprite", "meuCanvas", 60, 800, 600);
});
