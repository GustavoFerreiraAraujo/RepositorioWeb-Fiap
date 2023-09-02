import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function EditarProdutos() {
  
  document.title = "Editar Produtos";

//
const {id} = useParams();

const produtosRecuperadoPorId = ListaProdutos.filter((produto)=>{
  if(produto.id == parseInt(id)){
    return produto;
  }
});

  
  return (
    <>
    <div>EditarProdutos</div>
    <p>Produto Selecionado - {id}</p>
    <p>Produto Selecionado - {produtosRecuperadoPorId[0].nome}| Preco do produto - {produtosRecuperadoPorId[0].preco}</p>
  </>
  )
}
