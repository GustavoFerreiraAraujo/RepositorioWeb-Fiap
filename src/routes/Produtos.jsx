import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import  "./Produtos.css"
import { AiTwotoneDelete as Excluir} from "react-icons/ai"

export default function Produtos() {

  document.title = "Lista de Produtos"

  // estilos da tabela 
  const tdEstilos = {
    textAlign:"center",
    letterSpacing:"2px",
    color:"#0000ff",
    textDecoration:"none"
  }


  return (
    <div>
        <h1>Produtos</h1>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>EDITAR/ EXCLUIR</th>
            </tr>
            </thead>
            <tbody>
            {ListaProdutos.map((produto,indice)=>(
                 <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link> | <Link to={`/excluir/produtos/${produto.id}`}><Excluir/>Excluir</Link></td>
                 </tr>
            ))}
        </tbody>
        <tfoot>
        <tr>
           <td colSpan={4} style={{textAlign:"center"}}>PRODUTOS</td>
        </tr>
        </tfoot>
        </table>
        
    </div>
  )
}
