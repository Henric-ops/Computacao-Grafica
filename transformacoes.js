class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.personagem = new Retangulo2D(300, 300, 200, 100);
    this.personagem2 = new Retangulo2D(320, 320, 160, 60);
    this.personagem3 = new Retangulo2D(-100, -50, 200, 100);

  }

  atualizar(dt) {

  }

  teclaPressionada(e) {

  }

  teclaLiberada(e) {

  }

  desenhar() {
    this.limparTela("lightblue");
    this.preenchimento("black");

    this.empilhar();

        //this.transladar(300, 300);// trocando os valores de translação, o retângulo se move para a direita e para baixo
        //this.escalar(0.5, 0.5);

        this.transladar(this.personagem.x + this.personagem.largura / 2, this.personagem.y + this.personagem.altura / 2);
        this.rotacionar(30); 
        this.transladar(-(this.personagem.x + this.personagem.largura / 2), -(this.personagem.y + this.personagem.altura / 2));
        this.preenchimento("black");
        this.retangulo(this.personagem, Estilo.PREENCHIDO);
        
        this.preenchimento("red");
        this.retangulo(this.personagem2, Estilo.PREENCHIDO);

    this.desempilhar();


        this.preenchimento("green");
        this.retangulo(this.personagem, Estilo.PREENCHIDO);

        //quando o retângulo é desenhado, ele é desenhado no centro da tela, e não no canto superior esquerdo, pois a translação 
        //foi feita para o centro da tela antes da rotação. A rotação é feita em torno do ponto (0, 0), que é o canto superior esquerdo da tela. 
        //Portanto, o retângulo é desenhado no centro da tela, mas rotacionado em torno do ponto (0, 0).
        this.empilhar();
            this.transladar(this.larguraTela() / 2, this.alturaTela() / 2);
            this.rotacionar(30);
            this.preenchimento("orange");
            this.retangulo(this.personagem3, Estilo.PREENCHIDO);
        this.desempilhar();
  
    }
}
window.addEventListener("load", () => {
  new MeuJogo("Jogo com mouse", "meuCanvas", 800, 600);
});
