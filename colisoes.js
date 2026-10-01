class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {

  }

  atualizar() {

    
  }



  desenhar() {
    this.limparTela("lightblue");
    this.preenchimento("black");

  }
  
  
}
window.addEventListener("load", () => {
  new MeuJogo("Jogo com mouse", "meuCanvas", 800, 600);
});
