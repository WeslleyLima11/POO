class Produto{

    // função construtora do projeto
    
    constructor(){

        this.id = 1;
        this.arrayProdutos = [];
    }

    // quando o usuário apertar o botão salvar ele ativa a função ler dados
    salvar(){
        
        let produto = this.lerDados();
        console.log(produto);

        if(this.validaCampo(produto) == true){

        }

        this.adicionaProduto(produto);

        console.log(this.arrayProdutos);      
    }

    adicionaProduto(poo){

        this.arrayProdutos.push(poo);
        this.id ++;
    }

    lerDados(){

        let produto = {}

        produto.id = this.id;
        // tudo que o usuário digitar neste campo pegaremos o valor
        produto.nomeProduto = document.getElementById('produto').value; 
        produto.preco = document.getElementById('preco').value;
        
        return produto;
    }

    validaCampo(produto){
        let msg ='';
        
        if(produto.nomeProduto == ''){

            msg += '- Informe o nome do Produto \n';
        }

        if(produto.preco == ''){

            msg += '- Informe o valor do produto '; 
        }

        if(msg != ''){

            alert(msg);
            return false
        }

        return true;
    }

    cancelar(){

      
    }
}

var produto = new Produto(); // Objeto com o valor atribuido Produto