const bolsa = [
    'Caderno', 
    'Lápis',
    'Moletom',
    'Notebook',
    'Carregador',
    'Mouse'
]



console.log(bolsa)

for(let i=0; i<bolsa.length; i++){
    if(bolsa[i]=='Moletom'){
        console.log(`Achei ${bolsa[i]}`)
        break;
    }
    console.log(bolsa[i])
}
