const Jogador = function(nome, posicao, numGols){
    nome = nome,
    posicao = posicao,
    numGols = numGols

    this.getNome = function(){
        return nome
    }
    this.getPosicao = function(){
        return posicao
    }
    this.getNumGols = function(){
        return numGols
    }
    this.toString = function(){
        return `O nome do jogador é ${this.getNome()}, ele atua como ${this.getPosicao()}, e já fez ${this.getNumGols()} gols`
    }
}

const jogadores = [new Jogador('Neymar', 'meio-campo', '80'), 
                   new Jogador('Messi', 'Atacante', '200'),
                   new Jogador('Cristiano', 'Goleiro', '300')]

console.log(jogadores[2].toString())
// let jogador = new Jogador('Neymar', 'meio-campo', '80')

// console.log(jogador.getPosicao())