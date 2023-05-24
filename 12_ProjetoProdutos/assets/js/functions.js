    let produtos = []
    let i = 0
    let add = document.getElementById("adicionar")
    let cancel = document.getElementById("cancelar")
    
    function listar(){
        let l = document.getElementsByClassName("product")
        for(let j = l.length-1; j >= 0; j--){
            l[j].parentNode.removeChild(l[j])
        }

        for(let j = 0; j < i; j++){
            if(produtos[j] != undefined){
                const div = document.createElement("div")
                div.classList.add("table2", "product")
                div.setAttribute("id", j)

                div.innerHTML = `
                    <p>${produtos[j].getId()+1}</p>      
                    <p>${produtos[j].getNome()}</p>
                    <p>${produtos[j].getValor()}</p>
                    <p class="p_img">
                        <a><img src="assets/images/lixeira.png" class="img" id="${j}" onclick="remover(${j})"</a>
                    </p>
                    `
                tablemax.appendChild(div)
            }
        }   
    }

    add.addEventListener("click", adicionar)
    function adicionar(){
        let nome_produto = document.getElementById("nome_produto").value
        let valor_produto = document.getElementById("valor_produto").value
        const produto = new Produto(i, nome_produto, valor_produto)
        i++
        produtos.push(produto)
        listar()
        cancelar()
    }

    cancel.addEventListener("click", cancelar)
    function cancelar(){
        document.getElementById("nome_produto").value = ""
        document.getElementById("valor_produto").value = ""
    }

    function remover(a){
        produtos.splice(a, 1)
        listar()
    }

    class Produto{
        constructor(id, nome, valor){
            this.Id = id
            this.Nome = nome
            this.Valor = valor
        }
        getId(){
            return this.Id
        }
        getNome(){
            return this.Nome
        }
        getValor(){
            return this.Valor
        }
    }
