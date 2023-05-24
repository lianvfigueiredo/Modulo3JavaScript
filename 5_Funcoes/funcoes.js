var dinheiro1 = 100, valor1 = 110;
console.log(presente(dinheiro1, valor1))

function presente(dinheiro, valor){
    if(dinheiro < valor){
        return 'Não consigo comprar o presente'
    }else{
        return 'Comprei o presente'
    }
}