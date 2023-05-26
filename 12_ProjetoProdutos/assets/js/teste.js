class Produto{

    Adicionar(){
        let produto = this.lerDados() 
        
        if(this.Validar(produto)){
        produtos.push(produto)
        this.listar()
        this.cancelar()
        i++
        }        
    }

    lerDados(){
 
        let ndp = document.getElementById("nome_produto").value
        let vdp = document.getElementById("valor_produto").value   
            
            let produto = []
            produto.Id = i
            produto.NomeProduto = ndp
            produto.PrecoProduto = vdp
            return produto   
    }

    Validar(produto){
        let str = ""
        produto.NomeProduto == "" ? str += "Informe o nome do produto\n" : null
        produto.PrecoProduto == "" ? str += "Informe o valor do produto": null
        if(str == ""){
            return true
        }else{
            alert(str)
            return false
        }

    }

    cancelar(){
        document.getElementById("nome_produto").value = ""
        document.getElementById("valor_produto").value = ""
    }

    toString(){
        let str = `Id = ${this.Id}, Nome = ${this.NomeProduto}, Preço = ${this.PrecoProduto}`
        console.log(str)
    }

    listar(){
        let l = document.getElementsByClassName("product")
        for(let j = l.length-1; j >= 0; j--){
            l[j].parentNode.removeChild(l[j])
        }
    
        for(let j = 0; j < produtos.length; j++){
            if(produtos[j] != undefined){
                const tr = document.createElement("tr")
                tr.classList.add("table2", "product")
                tr.setAttribute("id", j)
    
                tr.innerHTML = `
                    <td>${produtos[j].Id+1}</td>      
                    <td>${produtos[j].NomeProduto}</td>
                    <td>${produtos[j].PrecoProduto}</td>
                    <td class="p_img">
                        <a><img src="assets/images/lixeira.png" class="img" id="${j}"</a>
                    </td>
                    `
                
                tablemax.appendChild(tr)
                let remove = document.getElementsByClassName("img")[`${j}`]
                remove.addEventListener("click", produto.remover)
            }
        }   
    }

    remover(){
        produtos.splice(this.getAttribute("id"), 1)
        produto.listar()
    }
    
}

let i = 0
let produto = new Produto();
let add = document.getElementById("adicionar")
add.addEventListener("click", produto.Adicionar.bind(produto))

let cancel = document.getElementById("cancelar")
cancel.addEventListener("click", produto.cancelar)

const produtos = []