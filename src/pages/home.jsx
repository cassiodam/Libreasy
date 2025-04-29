import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
        <body>
        <Header/>
        <main >
        <h1 class="font-bold text-4xl">
            Bem-vindos ao Libreasy
        </h1>
        <div className="">
        <h2 class="font-bold text-3xl flex justify-center "> Avisos: </h2>
           <ol> 
           <li>
            <p> • Esse site funciona apenas como método de consulta do acervo de livros disponíveis em uma biblioteca.</p>
            </li>
            <li>
            <p>• Não realizamos venda, aluguel ou empréstimos de livros através do mesmo.</p>
            </li>
            <li>
            <p> • Caso tenha interesse em algum dos livros visualizados, deve se dirigir presencialmente à biblioteca em questão</p>
            <p> conforme informações na aba <Link className="hover:underline hover:text-gray-400 italic " to="/contato">Contato,</Link>como endereço e horário de funcionamento.</p>
            </li>
            <li> <Link className="font-bold text-3xl hover:underline hover:text-gray-400 italic flex justify-center" to="/catalogo">
            Clique aqui para acessar o catalogo informativo</Link>   </li>
            </ol>
        </div>
        
        </main>
        <Footer/>
        </body>
        </>


    )
}

export default Home