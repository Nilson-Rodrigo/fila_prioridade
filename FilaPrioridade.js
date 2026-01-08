const Prioridade = {
    MUITO_BAIXA: 1,
    BAIXA: 2,
    NORMAL: 3,
    ALTA: 4,
    MUITO_ALTA: 5
};

class FilaPrioridade {
    constructor(capacidadeMaxima) {
        if (capacidadeMaxima <= 0) {
            throw new Error("A capacidade deve ser maior que zero.");
        }

        this.capacidadeMaxima = capacidadeMaxima;
        this.totalElementos = 0;

        this.filas = new Map();
        for (let p = 1; p <= 5; p++) {
            this.filas.set(p, []);
        }
    }

    inserir(elemento, prioridade) {
        if (this.estaCheia()) {
            throw new Error("Fila cheia. Não é possível inserir.");
        }

        if (!this.filas.has(prioridade)) {
            throw new Error("Prioridade inválida.");
        }

        this.filas.get(prioridade).push(elemento);
        this.totalElementos++;
        return true;
    }

    remover() {
        if (this.estaVazia()) {
            throw new Error("Fila vazia. Não há elementos para remover.");
        }

        for (let p = 5; p >= 1; p--) {
            const fila = this.filas.get(p);
            if (fila.length > 0) {
                this.totalElementos--;
                return fila.shift();
            }
        }
    }

    proximo() {
        if (this.estaVazia()) {
            throw new Error("Fila vazia.");
        }

        for (let p = 5; p >= 1; p--) {
            const fila = this.filas.get(p);
            if (fila.length > 0) {
                return fila[0];
            }
        }
    }

    estaVazia() {
        return this.totalElementos === 0;
    }

    estaCheia() {
        return this.totalElementos >= this.capacidadeMaxima;
    }

    tamanho() {
        return this.totalElementos;
    }

    limpar() {
        for (let fila of this.filas.values()) {
            fila.length = 0;
        }
        this.totalElementos = 0;
    }
}

module.exports = { FilaPrioridade, Prioridade };
