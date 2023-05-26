    let produtos = []
    let i = 0
    let add = document.getElementById("adicionar")
    let cancel = document.getElementById("cancelar")

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

    function listar(){
        let l = document.getElementsByClassName("product")
        for(let j = l.length-1; j >= 0; j--){
            l[j].parentNode.removeChild(l[j])
        }

        for(let j = 0; j < i; j++){
            if(produtos[j] != undefined){
                const tr = document.createElement("tr")
                tr.classList.add("table2", "product")
                tr.setAttribute("id", j)

                tr.innerHTML = `
                    <td>${produtos[j].getId()+1}</td>      
                    <td>${produtos[j].getNome()}</td>
                    <td>${produtos[j].getValor()}</td>
                    <td class="p_img">
                        <a><img src="assets/images/lixeira.png" class="img" id="${j}" onclick="remover(${j})"</a>
                    </td>
                    `
                tablemax.appendChild(tr)
            }
        }   
    }

    add.addEventListener("click", adicionar)
    function adicionar(){
        let nome_produto = document.getElementById("nome_produto").value
        let valor_produto = document.getElementById("valor_produto").value
        let str = ""
        if(nome_produto != "" && valor_produto != ""){
            const produto = new Produto(i, nome_produto, valor_produto)
            i++
            produtos.push(produto)
            listar()
            cancelar()
        }else{
            if(nome_produto == ""){
                str += "Informe o nome do produto\n"
            }
            if(valor_produto == ""){
                str += "Informe o valor do produto"
            }
            alert(str)
        }
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

