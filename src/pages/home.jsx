import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
        <Header/>

        <main >
        <h1 class="font-bold text-4xl">
            Bem-vindos ao Libreasy
        </h1>
        <p class="font-bold text-3xl"> Avisos: </p>
           <ul> 
           <li>
            <p>Esse site funciona apenas como método de consulta do acervo de livros disponíveis em uma biblioteca.</p>
            </li>
            <li>
            <p>Não realizamos venda, aluguel ou empréstimos de livros através do mesmo.</p>
            </li>
            <li>
            <p>Caso tenha interesse em algum dos livros visualizados, deve se dirigir presencialmente à biblioteca em questão,
                conforme informações na aba Contato como endereço e horário de funcionamento.</p>
            </li>
            </ul>
             <p class="font-bold text-3xl"> Acessar </p>  <Link className="hover:text-gray-400" to="/catalogo"> catalogo  </Link>
        
        </main>
        <Footer/>
        </>


    )
}

export default Home