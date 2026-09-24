class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.x = 0;
    this.y = 0;
    //guardar a posição do clique do mouse

    this.click = false;
    this.p = false;

    this.criarBotaoTouch("botao",20,200,100,100,"Botão","P");
  }

  atualizar() {}


  teclaPressionada(e) {
    if (e.key.toLowerCase() === "p") {
        this.p = true;
    }
  }

  teclaLiberada(e) {
    if (e.key.toLowerCase() === "p") {
        this.p = false;
    }
  }

  desenhar() {
    this.limparTela("lightblue");
    this.preenchimento("black");
    this.texto("[" + this.x + ", " + this.y + "]", 50, 50, 30);

    if(this.p){
      this.texto("[P]", 50, 100, 30);
    }
  }
  
  movimentoDoMouse(e) {
    //evento de movimento do mouse
    this.cliqueDoMouse(e);
  }

  cliqueDoMouse(e) {
    this.y = e.y;
    this.x = e.x;
  }

}
window.addEventListener("load", () => {
  new MeuJogo("Jogo com mouse", "meuCanvas", 800, 600);
});
