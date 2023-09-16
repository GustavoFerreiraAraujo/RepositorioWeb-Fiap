import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import  styles from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {MdDeleteForever as Excluir} from "react-icons/md";
import { useEffect, useState } from "react";

export default function Produtos() {

  document.title = "Lista de Produtos";
  

  const [counter,setCounter]= useState(0)

  const [counter2,setCounter2]= useState(0)
  
  useEffect(()=>{
    console.log("useEfect sera renderizado sempre que qualquer objeto for renderizado!");
  });

  useEffect(()=>{
    console.log("useEfect sera renderizado apenas uma vez");
  },[]);
  
  useEffect(()=>{
    console.log("useEfect sera renderizado apenas se um objeto variacel/ constante estiverno array de dependencias sofer uma atualizacao");
  },[]);

  return (
    <div>
        <h1>Produtos</h1>

        <div>
          <button onClick={()=> setCounter(counter + 1)}>COUNTER - {counter}</button>
        </div>

        <div>
          <button onClick={()=> setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
        </div>

        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.tableHeader}>ID</th>
                <th className={styles.tableHeader}>NOME</th>
                <th className={styles.tableHeader}>PREÇO</th>
                <th className={styles.tableHeader}>EDITAR / EXCLUIR</th>
            </tr>
            </thead>
            <tbody>
            {ListaProdutos.map((produto,indice)=>(
                 <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}> <Editar/> </Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link></td>
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
