class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.x = 0;
    this.y = 0;
    //guardar a posição do clique do mouse

    this.click = false;
    this.p = false;
    this.criarBotaoTouch("botao", 20, 400, 100, 100, "Botão", "P");

    this.personagem = new Retangulo2D(50, 200, 80, 80); //criar um retângulo para o personagem
    this.parede = new Retangulo2D(250, 100, 50, 300);

    this.teclas = {};

    this.personagem.velocidade = 100; //velocidade do personagem

    this.colidiu = false;
  }

  atualizar(dt) {
    let vx = 0;
    let vy = 0;

    if (this.teclas["ArrowLeft"]) {
      vx = -1;
    }

    if (this.teclas["ArrowRight"]) {
      vx = 1;
    }

    if (this.teclas["ArrowUp"]) {
      vy = -1;
    }

    if (this.teclas["ArrowDown"]) {
      vy = 1;
    }

    if (vx !== 0 && vy !== 0) {
      vx *= 0.5;
      vy *= 0.5;
    }

    let passo = this.personagem.velocidade * dt;// dt é usado para calcular a distância percorrida em cada atualização

    let xAnt = this.personagem.x;
    this.personagem.x += passo * vx;

    if (this.colisao(this.personagem, this.parede)) {//verificar se houve colisão
      this.personagem.x = xAnt;
    }

    let yAnt = this.personagem.y;
    this.personagem.y += passo * vy;

    if (this.colisao(this.personagem, this.parede)) {//verificar se houve colisão
      this.personagem.y = yAnt;
    }

    if (this.colisao(this.personagem, this.parede)) {
      this.colidiu = true;
    } else {
      this.colidiu = false;
    }
  }

  teclaPressionada(e) {
    this.teclas[e.key] = true;
    if (e.key.toLowerCase() === "p") {
      this.p = true;
    }
  }

  teclaLiberada(e) {
    this.teclas[e.key] = false;

    if (e.key.toLowerCase() === "p") {
      this.p = false;
    }
  }

  desenhar() {
    this.limparTela("lightblue");
    this.preenchimento("black");
    this.texto("[" + this.x + ", " + this.y + "]", 50, 50, 30);

    if (this.p) {
      this.texto("[P]", 50, 100, 30);
    }

    this.preenchimento("red");
    this.retangulo(this.personagem, Estilo.PREENCHIDO);

    this.preenchimento("green");
    this.retangulo(this.parede, Estilo.PREENCHIDO);

    if (this.colidiu) {
      //verificar se houve colisão
      this.preenchimento("red");
      this.contorno("black");
      this.texto("COLIDIU", 500, 500, 50);
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
