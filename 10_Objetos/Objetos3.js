let jogador = ['Neymar', 'Cristiano', 'Messi']

jogador[0] = {
    idade: 30,
    time: 'Barcelona',
    numGol: 80
}

jogador[1] = {
    idade: 40,
    time: ['Real Madrid', 'Santos', 'Paris Saint-German'],
    numGol: 200
}

jogador[2] = {
    idade: 45,
    time: 'Argentina',
    numGol: 250
}

console.log(jogador[1].time[2])