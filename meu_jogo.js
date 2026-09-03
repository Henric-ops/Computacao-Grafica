class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.pontos = 0;
    this.x = 100;
    this.y = 100;
    this.velocidadeX = 2;

    this.img = new Image();
    this.img.src = "img/leao.png";
  }
  atualizar() {
    this.x += this.velocidadeX;

    if (this.x <= 0 || this.x + 200 >= 800) {
      this.velocidadeX *= -1;
    }
  }
  desenhar() {
    this.limparTela("lightblue"); // é necessário limpar a tela antes de desenhar novamente
    this.imagem(this.img, 100, 100);
    this.preenchimento("blue");
    this.retangulo(this.x, this.y, 200, 100, Estilo.PREENCHIDO);

    this.contorno("black");

    this.contorno(20, "red");
    this.retangulo(320, 100, 200, 100, Estilo.PREENCHIDO); // sempre deve colocar o estilo antes de desenhar, no caso, o estilo é preenchido.
    this.contorno("black");
    this.preenchimento("green");
    this.retangulo(540, 100, 200, 100, Estilo.LINHAS);

    this.linha(100, 350, 300, 450);

    this.preenchimento("yellow");
    this.linha(500, 350, 700, 450, Estilo.PONTOS);

    this.preenchimento("black");
    this.circulo(200, 500, 200, 100, Estilo.PREENCHIDO);

    this.preenchimento("pink");
    this.triangulo(300, 100, 250, 200, 350, 200, Estilo.PREENCHIDO);

    this.preenchimento("green");
    this.paralelogramo(
      100,
      100,
      200,
      100,
      250,
      180,
      150,
      180,
      Estilo.PREENCHIDO,
    );

    this.preenchimento("yellow");
    let x = [100, 200, 250, 180, 120];
    let y = [100, 80, 150, 220, 180];
    this.poligono(x, y, Estilo.PREENCHIDO);

    this.preenchimento("violet");
    this.texto("Pontos: 100", 20, 40, 24, "bold");
  }
}

window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo", "meuCanvas", 60, 800, 600);
});
