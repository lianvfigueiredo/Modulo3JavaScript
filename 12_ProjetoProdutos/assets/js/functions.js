    let produtos = []
    let i = 0

    function adicionar(a, b){
        const produto = new Produto(i, a, b)
        i++
        produtos.push(produto)
        listar()
        cancelar()
    }

    function listar(){
        let l = document.getElementsByClassName("product")
        for(let j = l.length-1; j >= 0; j--){
            l[j].parentNode.removeChild(l[j])
        }

        for(let j = 0; j < i; j++){
            if(produtos[j] != undefined){
                let div = document.createElement("div")
                div.classList.add("table2", "product")
                div.setAttribute("id", j)
                elemento(produtos[j].getId()+1, div)
                elemento(produtos[j].getNome(), div)
                elemento(produtos[j].getValor(), div)
                imagem(j, div)
                tablemax.appendChild(div)
            }
        }
        
    }

    function elemento(attrb, div){
        let x = document.createElement("p");
        x.innerText = `${attrb}`
        div.appendChild(x)
    }

    function imagem(j, div){
        let img = document.createElement("img")
        img.src = "assets/images/lixeira.png"
        img.classList.add("img")
        img.setAttribute("id", j)
        img.onclick = () => {remover(j)}
        
        let x = document.createElement("a")
        x.appendChild(img)
        let y = document.createElement("p")
        y.classList.add("p_img")
        y.appendChild(x)
        div.appendChild(y)
    }

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
        // toString(){
        //     return `Id = ${this.getId()}, Nome = ${this.getNome()}, Valor = ${this.getValor()}`
        // }
    }
