import * as db from './config/db';
import produtoController from './controllers/ProdutoController';
import Produto from './models/Produto';

const produtoCtlr = new produtoController;

let recuperarProdutos = async () => {
    db.conectarBD();
     const produtos =await produtoCtlr.recuperarTodos();
     produtos.forEach(produto=>console.log(produto));
   const produto = new Produto({
      descricao: 'Arroz',
       quantidade: 2,
       marca: 'Tio Lauterio'
   });
   const produtoSalvo = await produtoController.salvar(produto);
   console.log(produtoSalvo);
  //let produto  = await produtoCtlr.recuperarPeloId('5ea08af1f0715443ac827f7e');
//produto.marca='Urbano';
//const produtoAtualizado = await produtoCtlr.salvar(produto);
//console.log(produtoAtualizado);

//const produtos = await produtoCtlr.recuperarTodos();
//console.log(produtos);


db.desconectarBD();
}
recuperarProdutos();
