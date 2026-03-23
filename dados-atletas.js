class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas.sort((a, b) => b - a);
        this.notasValidas = [...this.notas].splice(1, 3)
    }
    // calculaCategoria(), para calcular a categoria do atleta;
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "Infantil"
        else if (this.idade >= 12 && this.idade <= 13) return "Juvenil"
        else if (this.idade >= 14 && this.idade <= 15) return "Intermediario"
        else if (this.idade >= 16 && this.idade <= 30) return "Adulto"
        return "Sem categoria"

    };

    // calculaIMC(), para calcular o IMC do atleta;
    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    };

    // calculaMediaValida(), para calcular a média válida do atleta.
    calculaMediaValida() {
        let soma = this.notasValidas.reduce((acc, num) => acc + num, 0)
        let qtdNotasValidas = this.notasValidas.length

        return soma / qtdNotasValidas
    };

    // obtemNomeAtleta(), que retorna o nome do atleta
    obtemNomeAtleta() {
        return this.nome
    }

    // obtemIdadeAtleta(), que retorna a idade do atleta
    obtemIdadeAtleta() {
        return this.idade
    };

    // obtemPesoAtleta(), que retorna o peso do atleta
    obtemPesoAtleta() {
        return this.peso
    };

    obtemAltura() {
        return this.altura
    }

    // obtemNotasAtleta(), que retorna as notas do atleta
    obtemNotasAtleta() {
        return this.notas
    };

    // obtemCategoria(), que retorna a categoria do atleta
    obtemCategoria() {
        return this.calculaCategoria()
    };

    // obtemIMC(), que retorna o IMC do atleta
    obtemIMC() {
        return this.calculaIMC();

    };

    // obtemMediaValida(), que retorna a média válida do atleta
    obtemMediaValida() {
        return this.calculaMediaValida()
    }
}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

let resultado = `Nome: ${atleta.obtemNomeAtleta()}\nIdade: ${atleta.obtemIdadeAtleta()}\nAltura: ${atleta.obtemAltura()}\nNotas: ${atleta.obtemNotasAtleta()}\nCategoria: ${atleta.obtemCategoria()}\nIMC: ${atleta.obtemIMC().toFixed(2)}\nMédia válida: ${atleta.obtemMediaValida().toFixed(2)}\n\n`


console.log(resultado)




