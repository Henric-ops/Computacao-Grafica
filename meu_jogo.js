class MeuJogo extends JS_CG_2D_API {
    acaoAoIniciar() {
        this.pontos = 0;
        this.x = 100;
        this.y = 100;
        this.ir = true;
    }
    atualizar() {

        if (this.ir) {
            this.x++;
        }

        if (this.ir) {
            this.ir--;
        }

        this.x++;
        if (this.x >= 600) {
            this.x--;
        }
    }
    desenhar() {
        this.limparTela("lightblue");
        this.preenchimento("red");
        this.retangulo(this.x, this.y, 200, 100, Estilo.PREENCHIDO);
        this.retangulo(this.x, this.y, 200, 100, Estilo.PONTOS);
        this.contorno("black");
        this.preenchimento("green");


    }
}

window.addEventListener("load", () => {
    new MeuJogo("Meu Primeiro Jogo", "meuCanvas", 60, 800, 600);
});

