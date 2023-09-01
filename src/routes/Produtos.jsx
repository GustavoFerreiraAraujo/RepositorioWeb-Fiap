import { ListaProdutos } from "../Components/listaProdutos"
export default function Produtos(){
    return(
       <div>
            <h1>Produtos</h1>

            <table>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>

                {ListaProdutos.map((produto,indice)=>{
                    <tr kay={indice}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td><Link to={'/editar/produtos'} >Editar</Link></td>
                    </tr>

                })}
           
           
            </table>

       </div>
    )
}