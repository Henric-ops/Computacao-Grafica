class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.x = 0;
    this.y = 0;
    this.click = false;
    this.p = false;

    this.personagem = new Retangulo2D(50, 200, 80, 80);
    this.parede = new Retangulo2D(250, 100, 50, 300);
    this.teclas = {};
    this.personagem.velocidade = 100;
    this.cameraX =
      this.personagem.x + this.personagem.largura / 2 - this.larguraTela() / 2;
    this.cameraY =
      this.personagem.y + this.personagem.altura / 2 - this.alturaTela() / 2;
    this.colidiu = false;
  }

  atualizar(dt) {
    let vx = 0;
    let vy = 0;

    if (this.teclas["ArrowLeft"]) vx = -1;
    if (this.teclas["ArrowRight"]) vx = 1;
    if (this.teclas["ArrowUp"]) vy = -1;
    if (this.teclas["ArrowDown"]) vy = 1;

    if (vx !== 0 && vy !== 0) {
      vx *= 0.5;
      vy *= 0.5;
    }

    const passo = this.personagem.velocidade * dt;
    const xAnterior = this.personagem.x;
    this.personagem.x += passo * vx;

    if (this.colisao(this.personagem, this.parede)) {
      this.personagem.x = xAnterior;
    }

    const yAnterior = this.personagem.y;
    this.personagem.y += passo * vy;

    if (this.colisao(this.personagem, this.parede)) {
      this.personagem.y = yAnterior;
    }

    this.colidiu = this.colisao(this.personagem, this.parede);

    this.cameraX =
      this.personagem.x + this.personagem.largura / 2 - this.larguraTela() / 2;
    this.cameraY =
      this.personagem.y + this.personagem.altura / 2 - this.alturaTela() / 2;
  }

  teclaPressionada(e) {
    this.teclas[e.key] = true;
    if (e.key.toLowerCase() === "p") this.p = true;
  }

  teclaLiberada(e) {
    this.teclas[e.key] = false;
    if (e.key.toLowerCase() === "p") this.p = false;
  }

  desenhar() {
    this.limparTela("lightblue");
    this.empilhar();
    this.transladar(-this.cameraX, -this.cameraY);

    this.preenchimento("red");
    this.retangulo(this.personagem, Estilo.PREENCHIDO);
    this.preenchimento("green");
    this.retangulo(this.parede, Estilo.PREENCHIDO);
    this.desempilhar();
  }
}

window.addEventListener("load", () => {
  new MeuJogo("Desafio câmera", "meuCanvas", 800, 600);
});
