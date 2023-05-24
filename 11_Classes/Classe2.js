class Jogador {
    constructor(nome, posicao, numGol){
        this.nome = nome
        this. posicao = posicao
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numGol} gols na sua carreira`)
    }
}

const jogador = new Jogador('Neymar', 'Atacante', 200)

jogador.golsMarcados()