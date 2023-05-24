let jogador = {
    nome: 'Renato Augusto',
    idade: 34,
    numGol: 81,
    Gol(g=0){
        console.log('Renato fez gol!')
        this.numGol += g
    }
}

// console.log(jogador)
// console.log(jogador.numGol)
// jogador.Gol(4)
// console.log(jogador.numGol)
// jogador.Gol()
// console.log(jogador.numGol)
// jogador.Gol(5)
// console.log(jogador.numGol)

jogador.posicao = 'meio-campo'

console.log(jogador)

delete jogador
console.log(jogador)