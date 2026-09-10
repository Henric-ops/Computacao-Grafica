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
    this.imagem(this.img, 20, 80);
    this.preenchimento("blue");
    this.retangulo(this.x, this.y, 140, 70, Estilo.PREENCHIDO);

    this.contorno("black");

    this.contorno(20, "red");
    this.retangulo(220, 80, 140, 70, Estilo.PREENCHIDO); // sempre deve colocar o estilo antes de desenhar, no caso, o estilo é preenchido.
    this.contorno("black");
    this.preenchimento("green");
    this.retangulo(400, 80, 140, 70, Estilo.LINHAS);

    this.linha(40, 250, 180, 330);

    this.preenchimento("yellow");
    this.linha(220, 250, 360, 330, Estilo.PONTOS);

    this.preenchimento("black");
    this.circulo(600, 300, 120, 100, Estilo.PREENCHIDO);

    this.preenchimento("pink");
    this.triangulo(600, 100, 550, 180, 650, 180, Estilo.PREENCHIDO);

    this.preenchimento("green");
    this.paralelogramo(
      40,
      380,
      160,
      380,
      210,
      450,
      90,
      450,
      Estilo.PREENCHIDO,
    );

    this.preenchimento("yellow");
    let x = [300, 400, 450, 380, 320];
    let y = [380, 360, 430, 500, 460];
    this.poligono(x, y, Estilo.PREENCHIDO);

    this.preenchimento("violet");
    this.texto("Pontos: 100", 20, 40, 24, "bold");


    this.framesJogador = this.carregarFrames("imagens/frames", 2, 2);

  }
}

window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo", "meuCanvas", 60, 800, 600);
});
