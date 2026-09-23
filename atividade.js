class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.casa = new Image();
    this.casa.src = "img/frame_casa.png";

    this.framesArvore = this.carregarFrames("arvore", 1, "img");
    this.arvore = new Sprite(150, 420);
    this.arvore.setTamanho(120, 160);
    this.arvore.setAnimacao(this.framesArvore);

    this.framesSol = this.carregarFrames("sol", 4, "img");
    this.sol = new Sprite(580, 20, 180, 180);
    this.sol.setAnimacao(this.framesSol);
  }

  atualizar() {
    this.arvore.atualizar();
    this.sol.atualizar();
  }

  desenhar() {
    this.limparTela("lightblue");
    this.imagem(this.casa, 420, 400, 220, 180);
    this.desenharSprite(this.arvore);
    this.desenharSprite(this.sol);

    this.preenchimento("black");
    this.texto(this.nome, 250, 50, 32, "bold");
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Atividade dos Guri", "meuCanvas", 800, 600, 60);
});
